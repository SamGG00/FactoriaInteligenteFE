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
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          borderRadius: 3,
          border: '2px solid #006400',
          padding: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#faf3e0',
            borderRadius: 3,
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
            border: '1px solid #006400',
          }}
        >
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

              {/* Contenido */}
              {[
                'La Industria 4.0 se refiere a la cuarta revolución industrial, un cambio global que combina la automatización de procesos, el uso de tecnologías avanzadas y la interconexión digital en tiempo real. Este fenómeno está transformando la manufactura y otras industrias a través de la integración de nuevas tecnologías como la inteligencia artificial (IA), el Internet de las Cosas (IoT), la robótica avanzada, la realidad aumentada (AR) y la impresión 3D, entre otras.',
                'Uno de los pilares fundamentales de la Industria 4.0 es la digitalización de los procesos de producción. Las máquinas y dispositivos están ahora conectados entre sí a través de Internet, lo que permite el monitoreo en tiempo real de todas las etapas de la producción. Esta convergencia de los mundos físico y digital es lo que da lugar a la creación de "fábricas inteligentes", capaces de operar de manera más eficiente y autónoma que nunca.',
                'La transformación digital no solo afecta a los procesos de producción, sino también a la manera en que las empresas gestionan la cadena de suministro, la calidad y la relación con los clientes. En lugar de producir en grandes lotes, las empresas ahora pueden fabricar productos a medida, con una flexibilidad y personalización mucho mayor, lo que da lugar a nuevas oportunidades de negocio.',
                'En Colombia, aunque la adopción de la Industria 4.0 está en una etapa incipiente, el país está avanzando hacia la integración de estas tecnologías en sectores clave como la manufactura, la agroindustria y la salud. Se están impulsando políticas para fomentar la innovación y la competitividad, con un enfoque especial en pequeñas y medianas empresas (PYMEs), que pueden beneficiarse enormemente de la digitalización de sus procesos.',
                'La industria 4.0 ofrece múltiples beneficios, como el aumento de la productividad, la mejora de la calidad de los productos, la reducción de costos operativos, el aumento de la flexibilidad en la producción y una mejor gestión de los recursos. Sin embargo, también presenta desafíos, como la necesidad de una infraestructura tecnológica adecuada, la capacitación de la fuerza laboral y la implementación de ciberseguridad para proteger los sistemas interconectados.',
                'Con el fin de facilitar la adopción de estas tecnologías, es fundamental que las empresas desarrollen una estrategia de transformación digital clara, que contemple no solo la integración de nuevas tecnologías, sino también la creación de un entorno empresarial más ágil y resiliente ante los cambios rápidos del mercado global.',
                'La Industria 4.0 está diseñada para hacer que las industrias sean más inteligentes, sostenibles y competitivas. A medida que estas tecnologías continúan evolucionando, la transformación digital se está convirtiendo en una necesidad para todas las empresas que deseen mantenerse relevantes en un mundo cada vez más conectado y automatizado.',
              ].map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: 20,
                    fontFamily: 'Times New Roman, serif',
                    color: '#4d4d4d',
                  }}
                >
                  {paragraph}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
