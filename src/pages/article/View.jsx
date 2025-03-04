import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import NavBar from "../home/components/AppBar";
import { Button, Box } from "@mui/material";
import "./view.css";
const API_URL = import.meta.env.VITE_API_URL;

export default function View() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  useEffect(() => {
    getArticles(id);
  }, [id]);

  const getArticles = async (idArticle) => {
    const response = await axios.get(`${API_URL}/article/${idArticle}`);
    if (!response.data.status) {
      alert("Error al cargar el artículo");
      return;
    }
    setArticle(response.data.article);
  };
  

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div>
      <NavBar />
      {article && (
        <div className="container">
          <Grid container spacing={2}>
            {/* Titulo */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }} sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="medium"
                onClick={() => window.history.back()}
              >
                Volver
              </Button>
              <h1 className="mt-5">{capitalizeFirstLetter(article.titulo)}</h1>
            </Grid>
            {/* Campo 1 */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }} sx={{ mt: 1 }}>
              {article.campo1 ? (
                article.campo1.startsWith("hvj_bp_") ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 0,
                      m: 0,
                    }}
                  >
                    <img
                      src={`${API_URL}/uploads/${article.campo1}`} 
                      alt={article.title}
                      style={{
                        maxWidth: "700px",
                        height: "auto", // Ajusta la altura automáticamente
                        display: "block", // Evita márgenes extra
                        margin: 0, // Elimina cualquier margen
                      }}
                    />
                  </Box>
                ) : (
                  <p className="lh-md" style={{ textAlign: "justify" }}>
                    {article.campo1}
                  </p>
                )
              ) : null}
            </Grid>
            {/* Campo 2 */}
            <Grid
              size={{ xs: 12, md: 12, sm: 12 }}
              sx={{ mt: 1, mb: 0, p: 0, }}
            >
              {article.campo2 ? (
                article.campo2.startsWith("hvj_bp_") ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 0,
                      m: 0,
                    }}
                  >
                    <img
                      src={`http://localhost:3000/uploads/${article.campo2}`}
                      alt={article.title}
                      style={{
                        maxWidth: "700px",
                        height: "auto", // Ajusta la altura automáticamente
                        display: "block", // Evita márgenes extra
                        margin: 0, // Elimina cualquier margen
                      }}
                    />
                  </Box>
                ) : (
                  <p className="lh-md" style={{ textAlign: "justify" }}>
                    {article.campo2}
                  </p>
                )
              ) : null}
            </Grid>
            {/* Campo 3 */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }} sx={{ mt: 1 }}>
              {article.campo3 ? (
                article.campo3.startsWith("hvj_bp_") ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 0,
                      m: 0,
                    }}
                  >
                    <img
                      src={`http://localhost:3000/uploads/${article.campo3}`}
                      alt={article.title}
                      style={{
                        maxWidth: "700px",
                        height: "auto", // Ajusta la altura automáticamente
                        display: "block", // Evita márgenes extra
                        margin: 0, // Elimina cualquier margen
                      }}
                    />
                  </Box>
                ) : (
                  <p className="lh-md" style={{ textAlign: "justify" }}>
                    {article.campo3}
                  </p>
                )
              ) : null}
            </Grid>
            {/* Campo 4 */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }} sx={{ mt: 1 }}>
              {article.campo4 ? (
                article.campo4.startsWith("hvj_bp_") ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 0,
                      m: 0,
                    }}
                  >
                    <img
                      src={`http://localhost:3000/uploads/${article.campo4}`}
                      alt={article.title}
                      style={{
                        maxWidth: "700px",
                        height: "auto", // Ajusta la altura automáticamente
                        display: "block", // Evita márgenes extra
                        margin: 0, // Elimina cualquier margen
                      }}
                    />
                  </Box>
                ) : (
                  <p className="lh-md" style={{ textAlign: "justify" }}>
                    {article.campo4}
                  </p>
                )
              ) : null}
            </Grid>
            {/* Campo 5 */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }} sx={{ mt: 1 }}>
              {article.campo5 ? (
                article.campo5.startsWith("hvj_bp_") ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 0,
                      m: 0,
                    }}
                  >
                    <img
                      src={`http://localhost:3000/uploads/${article.campo5}`}
                      alt={article.title}
                      style={{
                        maxWidth: "700px",
                        height: "auto", // Ajusta la altura automáticamente
                        display: "block", // Evita márgenes extra
                        margin: 0, // Elimina cualquier margen
                      }}
                    />
                  </Box>
                ) : (
                  <p className="lh-md" style={{ textAlign: "justify" }}>
                    {article.campo5}
                  </p>
                )
              ) : null}
            </Grid>
            {/* Campo 6 */}
            <Grid size={{ xs: 12, md: 12, sm: 12 }} sx={{ mt: 1, mb: 0 }}>
              {article.campo6 ? (
                article.campo6.startsWith("hvj_bp_") ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: 0,
                      m: 0,
                    }}
                  >
                    <img
                      src={`http://localhost:3000/uploads/${article.campo6}`}
                      alt={article.title}
                      style={{
                        maxWidth: "700px",
                        height: "auto", // Ajusta la altura automáticamente
                        display: "block", // Evita márgenes extra
                        margin: 0, // Elimina cualquier margen
                      }}
                    />
                  </Box>
                ) : (
                  <p className="lh-md" style={{ textAlign: "justify" }}>
                    {article.campo6}
                  </p>
                )
              ) : null}
            </Grid>
          </Grid>
        </div>
      )}
      {!article && <p>Cargando artículo...</p>}
    </div>
  );
}
