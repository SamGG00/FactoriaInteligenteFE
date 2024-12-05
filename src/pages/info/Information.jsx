import React from 'react';
import { Card, CardContent, Typography, Container, Box, Paper } from '@mui/material';
import NavBar from "/src/pages/home/components/AppBar.jsx";

export default function Informacion() {

  return (
    <div>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
        <Paper elevation={3} sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ boxShadow: 0, borderRadius: 2, flex: 1 }}>
            <CardContent sx={{ p: 5 }}>
              <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Industria 4.0: Transformando el Futuro de la Producción
              </Typography>
              <Typography variant="body1" paragraph>
                La Industria 4.0 se refiere a la cuarta revolución industrial, un cambio global que combina la automatización de procesos, el uso de tecnologías avanzadas y la interconexión digital en tiempo real. Este fenómeno está transformando la manufactura y otras industrias a través de la integración de nuevas tecnologías como la inteligencia artificial (IA), el Internet de las Cosas (IoT), la robótica avanzada, la realidad aumentada (AR) y la impresión 3D, entre otras.
              </Typography>
              <Typography variant="body1" paragraph>
                Uno de los pilares fundamentales de la Industria 4.0 es la digitalización de los procesos de producción. Las máquinas y dispositivos están ahora conectados entre sí a través de Internet, lo que permite el monitoreo en tiempo real de todas las etapas de la producción. Esta convergencia de los mundos físico y digital es lo que da lugar a la creación de "fábricas inteligentes", capaces de operar de manera más eficiente y autónoma que nunca.
              </Typography>
              <Typography variant="body1" paragraph>
                La transformación digital no solo afecta a los procesos de producción, sino también a la manera en que las empresas gestionan la cadena de suministro, la calidad y la relación con los clientes. En lugar de producir en grandes lotes, las empresas ahora pueden fabricar productos a medida, con una flexibilidad y personalización mucho mayor, lo que da lugar a nuevas oportunidades de negocio.
              </Typography>
              <Typography variant="body1" paragraph>
                En Colombia, aunque la adopción de la Industria 4.0 está en una etapa incipiente, el país está avanzando hacia la integración de estas tecnologías en sectores clave como la manufactura, la agroindustria y la salud. Se están impulsando políticas para fomentar la innovación y la competitividad, con un enfoque especial en pequeñas y medianas empresas (PYMEs), que pueden beneficiarse enormemente de la digitalización de sus procesos.
              </Typography>
              <Typography variant="body1" paragraph>
                La industria 4.0 ofrece múltiples beneficios, como el aumento de la productividad, la mejora de la calidad de los productos, la reducción de costos operativos, el aumento de la flexibilidad en la producción y una mejor gestión de los recursos. Sin embargo, también presenta desafíos, como la necesidad de una infraestructura tecnológica adecuada, la capacitación de la fuerza laboral y la implementación de ciberseguridad para proteger los sistemas interconectados.
              </Typography>
              <Typography variant="body1" paragraph>
                Con el fin de facilitar la adopción de estas tecnologías, es fundamental que las empresas desarrollen una estrategia de transformación digital clara, que contemple no solo la integración de nuevas tecnologías, sino también la creación de un entorno empresarial más ágil y resiliente ante los cambios rápidos del mercado global.
              </Typography>
              <Typography variant="body1" paragraph>
                La Industria 4.0 está diseñada para hacer que las industrias sean más inteligentes, sostenibles y competitivas. A medida que estas tecnologías continúan evolucionando, la transformación digital se está convirtiendo en una necesidad para todas las empresas que deseen mantenerse relevantes en un mundo cada vez más conectado y automatizado.
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Container>
    </div>
  );
}
