import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.png";
import NavBar from "./components/AppBar";
import Grid from "@mui/material/Grid2";
const images = [
  { src: img1, alt: "Imagen 1" },
  { src: img2, alt: "Imagen 2" },
  { src: img3, alt: "Imagen 3" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 15000); // Cambia cada 15 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          maxWidth: "90%",
          margin: "auto",
          marginTop: "2%",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Contenedor del carrusel con animación de deslizamiento */}
        <Box
          sx={{
            width: "100%",
            height: 400,
            overflow: "hidden",
            position: "relative",
            borderRadius: "25px",
          }}
        >
          {/* Contenedor de las imágenes en fila horizontal */}
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.5s ease-in-out", // Animación de deslizamiento
              transform: `translateX(-${currentIndex * 33.33}%)`, // Mueve la imagen actual
              width: `${images.length * 100}%`, // Ancho total del carrusel
            }}
          >
            {images.map((image, index) => (
              <Box key={index} sx={{ width: "100%" }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Título superpuesto */}
          <Typography
            variant="subtitle1"
            sx={{
              position: "absolute",
              bottom: 20,
              left: 10,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {images[currentIndex].alt}
          </Typography>

          {/* Indicadores dentro de la imagen */}
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
            {images.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentIndex(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor:
                    currentIndex === index
                      ? "white"
                      : "rgba(255, 255, 255, 0.5)",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Botones de navegación */}
        <Button
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "20px",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <NavigateBeforeIcon />
        </Button>
        <Button
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 10,
            borderRadius: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <NavigateNextIcon />
        </Button>
      </Box>
      <Box
        sx={{
          maxWidth: "90%",
          margin: "auto",
          marginTop: "2%",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
        <Grid
            item
            size={{ xs: 12, md: 6, sm: 12 }}
            sx={{ backgroundColor: "#1234", borderRadius: "25px" }}
          >
            <Grid container>
              <Grid item size={{ xs: 12, md: 9, sm: 12 }} sx={{}}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "start",
                    margin: "3% 0 1% 3%",
                    fontWeight: 600,
                  }}
                >
                  Titulo Articulo
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ textAlign: "start", margin: "3%" }}
                >
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 3, sm: 12 }}>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Puedes usar 'cover' o 'contain' dependiendo del efecto que desees
                    borderTopRightRadius: "25px", // Solo en el borde superior derecho
                    borderBottomRightRadius: "25px", // Solo en el borde inferior derecho
                    margin: "0", // Eliminar márgenes
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6, sm: 12 }}
            sx={{ backgroundColor: "#1234", borderRadius: "25px" }}
          >
            <Grid container>
              <Grid item size={{ xs: 12, md: 9, sm: 12 }} sx={{}}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "start",
                    margin: "3% 0 1% 3%",
                    fontWeight: 600,
                  }}
                >
                  Titulo Articulo
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ textAlign: "start", margin: "3%" }}
                >
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 3, sm: 12 }}>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Puedes usar 'cover' o 'contain' dependiendo del efecto que desees
                    borderTopRightRadius: "25px", // Solo en el borde superior derecho
                    borderBottomRightRadius: "25px", // Solo en el borde inferior derecho
                    margin: "0", // Eliminar márgenes
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6, sm: 12 }}
            sx={{ backgroundColor: "#1234", borderRadius: "25px" }}
          >
            <Grid container>
              <Grid item size={{ xs: 12, md: 9, sm: 12 }} sx={{}}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "start",
                    margin: "3% 0 1% 3%",
                    fontWeight: 600,
                  }}
                >
                  Titulo Articulo
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ textAlign: "start", margin: "3%" }}
                >
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 3, sm: 12 }}>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Puedes usar 'cover' o 'contain' dependiendo del efecto que desees
                    borderTopRightRadius: "25px", // Solo en el borde superior derecho
                    borderBottomRightRadius: "25px", // Solo en el borde inferior derecho
                    margin: "0", // Eliminar márgenes
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6, sm: 12 }}
            sx={{ backgroundColor: "#1234", borderRadius: "25px" }}
          >
            <Grid container>
              <Grid item size={{ xs: 12, md: 9, sm: 12 }} sx={{}}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "start",
                    margin: "3% 0 1% 3%",
                    fontWeight: 600,
                  }}
                >
                  Titulo Articulo
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ textAlign: "start", margin: "3%" }}
                >
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 3, sm: 12 }}>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Puedes usar 'cover' o 'contain' dependiendo del efecto que desees
                    borderTopRightRadius: "25px", // Solo en el borde superior derecho
                    borderBottomRightRadius: "25px", // Solo en el borde inferior derecho
                    margin: "0", // Eliminar márgenes
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 6, sm: 12 }}
            sx={{ backgroundColor: "#1234", borderRadius: "25px" }}
          >
            <Grid container>
              <Grid item size={{ xs: 12, md: 9, sm: 12 }} sx={{}}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "start",
                    margin: "3% 0 1% 3%",
                    fontWeight: 600,
                  }}
                >
                  Titulo Articulo
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ textAlign: "start", margin: "3%" }}
                >
                  body2. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
              <Grid item size={{ xs: 12, md: 3, sm: 12 }}>
                <img
                  src={img1}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Puedes usar 'cover' o 'contain' dependiendo del efecto que desees
                    borderTopRightRadius: "25px", // Solo en el borde superior derecho
                    borderBottomRightRadius: "25px", // Solo en el borde inferior derecho
                    margin: "0", // Eliminar márgenes
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
