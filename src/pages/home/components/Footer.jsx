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
                py: 1,                      // Padding vertical
                px: 3,                      // Padding horizontal
                marginTop:2,
            }}
        >


            {/* Línea de separación opcional */}
            <Box
                sx={{
                    borderTop: "1px solid #ccc",
                    mt: 1,
                    pt: 1,
                    textAlign: "center",
                }}
            >
                <Typography variant="body2" sx={{fontWeight: 500 ,fontFamily : "Times New Roman, serif"} }>
                    © {new Date().getFullYear()} - Todos los derechos reservados
                </Typography>
            </Box>
        </Box>
    );
}
