import React from 'react';
import { Card, CardContent, Typography, Container, Box, Paper, Divider } from '@mui/material';
import NavBar from "/src/pages/home/components/AppBar.jsx";
import Footer from "/src/pages/home/components/Footer.jsx";
export default function Informacion() {
  return (
    <div>
      <NavBar />
      <Container
        maxWidth="xl"
        sx={{
          mt: 5,
          mb: 5,
          backgroundColor: '#e0ffea ',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          borderRadius: 3,
          border: '2px solid #006400',
          padding: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#e0ffea ',
            borderRadius: 3,
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #006400',
          }}
        >
          {/* Espacio para la imagen */}
          <Box
            component="img"
            src={Apoyo}
            alt="Industria 4.0"
            sx={{
              width: '50%',
              height: 'auto',
              borderRadius: 3,
              objectFit: 'cover',
              margin: 3,
            }}
          />

          {/* Contenido del texto */}
          <Card
            sx={{
              boxShadow: 2,
              borderRadius: 5,
              flex: 1,
              color: 'black',
            }}
          >
            <CardContent sx={{ p: 5 }}>
              {/* Título */}
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontSize: 40,
                  fontFamily: 'Times New Roman, serif',
                  color: 'black',
                }}
              >
                Industria 4.0: Transformando el Futuro de la Producción
              </Typography>

              {/* Línea sutil */}
              <Divider
                sx={{
                  borderColor: 'rgba(0, 0, 0, 1)',
                  marginBottom: 4,
                }}
              />

              {/* Texto en párrafos más pequeños */}
              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: 20,
                  fontFamily: 'Times New Roman, serif',
                  color: '#4d4d4d',
                  marginBottom: 2,
                }}
              >
                La Industria 4.0 representa la cuarta revolución industrial, caracterizada por la integración de tecnologías avanzadas como inteligencia artificial, Internet de las Cosas (IoT) y robótica. Este fenómeno está transformando la manufactura y otras industrias al crear "fábricas inteligentes" capaces de operar de manera autónoma y eficiente.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: 20,
                  fontFamily: 'Times New Roman, serif',
                  color: '#4d4d4d',
                  marginBottom: 2,
                }}
              >
                Las máquinas y dispositivos están conectados en tiempo real, permitiendo el monitoreo constante de los procesos. Esto no solo mejora la eficiencia, sino que también facilita la personalización de productos y servicios, abriendo nuevas oportunidades de negocio.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: 20,
                  fontFamily: 'Times New Roman, serif',
                  color: '#4d4d4d',
                  marginBottom: 2,
                }}
              >
                En países como Colombia, aunque la adopción de estas tecnologías está en una etapa inicial, se están implementando políticas para fomentar la digitalización en sectores clave como la manufactura, agroindustria y salud, beneficiando especialmente a pequeñas y medianas empresas.
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  fontSize: 20,
                  fontFamily: 'Times New Roman, serif',
                  color: '#4d4d4d',
                }}
              >
                A pesar de sus beneficios, la Industria 4.0 también enfrenta desafíos como la necesidad de capacitación, infraestructura tecnológica y ciberseguridad. La transformación digital requiere estrategias claras para garantizar una transición efectiva hacia un futuro más conectado y automatizado.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
