import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
import NavBar from "./components/AppBar";
import Footer from "./components/Footer";

// ⚠ Asegúrate de que la ruta al fallback sea correcta según tu proyecto
import fallbackImg from "../../assets/images/1.jpg";


/**
 * Devuelve la primera imagen encontrada en los campos campo1..campo6.
 * Si no encuentra ninguna (que empiece con "hvj_bp_"), retorna la imagen de respaldo (fallbackImg).
 */
function getFirstImage(article) {
  for (let i = 1; i <= 6; i++) {
    const campo = article[`campo${i}`];
    console.log(campo)
    // Si ese campo existe y empieza con "hvj_bp_", asumimos que es nombre de archivo de imagen
    if (campo && campo.startsWith("hvj_bp_")) {
      return `${API_URL}/uploads/${campo}`;
    }
  }
  // Si no encontró ninguna imagen en campo1..campo6, devolvemos la imagen de respaldo
  return fallbackImg;
}

/**
 * Devuelve un snippet (los primeros 120 caracteres) del primer campo de texto que encuentre.
 * Si no hay ningún campo de texto, retorna "Sin texto disponible..."
 */
function getFirstTextSnippet(article) {
  for (let i = 1; i <= 6; i++) {
    const campo = article[`campo${i}`];
    // Si existe y NO es una imagen (no empieza con "hvj_bp_"), asumimos que es texto
    console.log(campo)
    if (campo && !campo.startsWith("hvj_bp_")) {
      return campo.substring(0, 120) + "...";
    }
  }
  // No encontró texto
  return "Sin texto disponible...";
}

export default function Home() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Índice del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchArticles();
  }, []);


  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/article/articles/1`,
        { withCredentials: true }
      );
      console.log("Artículos recibidos:", response.data.articles);
      if (response.data.status && response.data.articles) {
        setArticles(response.data.articles);
      }
    } catch (error) {
      console.error("Error obteniendo artículos:", error);
    } finally {
      setLoading(false);
    }
  };
  
  // Ordenar artículos por id (descendente)
  const sorted = [...articles].sort((a, b) => b.id - a.id);

  // Últimos 3 para el carrusel
  const lastThree = sorted.slice(0, 3);
  // Últimos 6 para la lista
  const lastSix = sorted.slice(0, 6);

  // Funciones del carrusel
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % lastThree.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? lastThree.length - 1 : prev - 1));
  };

  // Cambio automático cada 15s (solo si hay más de 1 artículo)
  useEffect(() => {
    if (lastThree.length > 1) {
      const interval = setInterval(handleNext, 15000);
      return () => clearInterval(interval);
    }
  }, [lastThree]);

  return (
    <div>
      <Box sx={{ backgroundColor: "#ecfae8" }}>
        <NavBar />

        {/* ==================== CARRUSEL (últimos 3 artículos) ==================== */}
        <Box
          sx={{
            maxWidth: "100%",
            margin: "auto",
            marginTop: "1%",
            textAlign: "center",
            position: "relative",
          }}
        >
          {loading ? (
            <Typography variant="h6" sx={{ mt: 2 }}>
              Cargando artículos...
            </Typography>
          ) : lastThree.length === 0 ? (
            <Typography variant="h6" sx={{ mt: 2 }}>
              No hay artículos disponibles
            </Typography>
          ) : (
            <Box
              sx={{
                width: "100%",
                height: 500,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Contenedor deslizante */}
              <Box
                sx={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${lastThree.length * 100}%`,
                }}
              >
                {lastThree.map((article) => {
                  const imageUrl = getFirstImage(article);
                  return (
                    <Box
                      key={article.id}
                      sx={{ width: "100%", position: "relative" }}
                    >
                      <img
                        src={imageUrl}
                        alt={article.titulo}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      {/* Título superpuesto */}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          position: "absolute",
                          bottom: 20,
                          left: 10,
                          color: "#e5ffde",
                          backgroundColor: "rgba(76, 95, 78, 0.5)",
                          padding: "5px 10px",
                        }}
                      >
                        {article.titulo}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>

              {/* Indicadores */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: 1,
                }}
              >
                {lastThree.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor:
                        currentIndex === idx ? "#e5ffde" : "#deffd6",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                    }}
                  />
                ))}
              </Box>

              {/* Botón Anterior */}
              <Button
                onClick={handlePrevious}
                disabled={lastThree.length < 2}
                sx={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderRadius: "20px",
                  color: "#e5ffde",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                <NavigateBeforeIcon />
              </Button>

              {/* Botón Siguiente */}
              <Button
                onClick={handleNext}
                disabled={lastThree.length < 2}
                sx={{
                  position: "absolute",
                  right: 10,
                  borderRadius: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#e5ffde",
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                }}
              >
                <NavigateNextIcon />
              </Button>
            </Box>
          )}
        </Box>

        {/* ==================== LISTA (últimos 6 artículos) ==================== */}
        <Box
          sx={{
            maxWidth: "100%",
            margin: "auto",
            marginTop: "2%",
            marginLeft: "5%",
            marginRight: "5%",
            textAlign: "center",
            position: "relative",
          }}
        >
          {loading ? (
            <Typography variant="h6" sx={{ mt: 2 }}>
              Cargando artículos...
            </Typography>
          ) : lastSix.length === 0 ? (
            <Typography variant="h6" sx={{ mt: 2 }}>
              No hay artículos disponibles
            </Typography>
          ) : (
            <Grid container spacing={2}>
              {lastSix.map((article) => {
                const previewImage = getFirstImage(article); // primera imagen o fallback
                const snippet = getFirstTextSnippet(article); // primer texto o "Sin texto disponible..."
                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sm={12}
                    key={article.id}
                    sx={{
                      backgroundColor: "#e5ffde",
                      borderRadius: "25px",
                      border: 0.3,
                      borderColor: "#c8fab9",
                    }}
                  >
                    <Grid container>
                      {/* Texto */}
                      <Grid item xs={12} md={9} sm={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            textAlign: "start",
                            margin: "3% 0 1% 3%",
                            fontWeight: 600,
                          }}
                        >
                          {article.titulo}
                        </Typography>
                        <Typography
                          variant="body2"
                          gutterBottom
                          sx={{ textAlign: "start", margin: "3%" }}
                        >
                          {snippet}
                        </Typography>
                        {/* Botón "Ver más" -> ruta de detalle */}
                        <Box sx={{ textAlign: "start", ml: 3, mb: 2 }}>
                          <Button
                            variant="contained"
                            onClick={() =>
                              navigate(`/article/${article.id}`)
                            }
                          >
                            Ver más
                          </Button>
                        </Box>
                      </Grid>

                      {/* Imagen de previsualización */}
                      <Grid item xs={12} md={3} sm={12}>
                        <img
                          src={previewImage}
                          alt={article.titulo}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderTopRightRadius: "25px",
                            borderBottomRightRadius: "25px",
                            margin: 0,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>

        <Footer />
      </Box>
    </div>
  );
}
