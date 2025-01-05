import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#8FD5A6", // Color de fondo
                color: "text.primary",      // Color de texto (tomado del tema)
                mt: "auto",                 // "Empujar" el footer hacia abajo si usas un layout de altura completa
                py: 0.5,                      // Padding vertical
                px: 3,                      // Padding horizontal
                marginTop: 2,
            }}
        >
            {/* Línea de separación opcional */}
            <Box
                sx={{
                    borderTop: "1px solid #2E8B57",
                    mt: 0.5,
                    pt: 0.5,
                    pb: 1,
                    textAlign: "center",
                }}
            >
                <Typography variant="body2" sx={{ fontWeight: 500, fontFamily: "Times New Roman, serif", color: "white", marginTop: 1 }}>
                    © {new Date().getFullYear()} - Todos los derechos reservados
                </Typography>
            </Box>
        </Box>
    );
}
