import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2E8B57", // Color de fondo
        color: "text.primary",      // Color de texto (tomado del tema)
        mt: "auto",                 // "Empujar" el footer hacia abajo si usas un layout de altura completa
        py: 3,                      // Padding vertical
        px: 2,                      // Padding horizontal
      }}
    >
      <Grid container spacing={2}>
        {/* Columna 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Sobre nosotros
          </Typography>
          <Typography variant="body2">
            Somos una empresa comprometida con la tecnología y la innovación.
            Nuestro objetivo es proveer soluciones de última generación a
            nuestros clientes.
          </Typography>
        </Grid>

        {/* Columna 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contacto
          </Typography>
          <Typography variant="body2">Email: info@example.com</Typography>
          <Typography variant="body2">Tel: +1 234 5678 9012</Typography>
        </Grid>

        {/* Columna 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Redes Sociales
          </Typography>
          <Link color="inherit" href="#" underline="hover" display="block">
            Facebook
          </Link>
          <Link color="inherit" href="#" underline="hover" display="block">
            Twitter
          </Link>
          <Link color="inherit" href="#" underline="hover" display="block">
            Instagram
          </Link>
        </Grid>

        {/* Columna 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Información Legal
          </Typography>
          <Link color="inherit" href="#" underline="hover" display="block">
            Términos y condiciones
          </Link>
          <Link color="inherit" href="#" underline="hover" display="block">
            Política de privacidad
          </Link>
        </Grid>
      </Grid>

      {/* Línea de separación opcional */}
      <Box
        sx={{
          borderTop: "1px solid #ccc",
          mt: 2,
          pt: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} - Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
}
