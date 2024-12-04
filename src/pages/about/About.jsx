import React, { useState } from 'react';
import { Card, CardContent, Typography, Container, Box, Breadcrumbs, Link, IconButton } from '@mui/material';
import NavBar from "/src/pages/home/components/AppBar.jsx";
import { LinkedIn } from '@mui/icons-material';
import '../../assets/css/about.css'
export default function About() {
  const [activeTab, setActiveTab] = useState(0); // Estado para controlar las pestañas

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex); // Cambia el contenido basado en la pestaña seleccionada
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Breadcrumbs separator="-" aria-label="breadcrumb" sx={{ mb: 2 }}>
              <Link
                underline="hover"
                color="inherit"
                onClick={() => handleTabChange(0)}
              >
                Sobre Nosotros
              </Link>

              <Link
                underline="hover"
                color="inherit"
                onClick={() => handleTabChange(1)}
              >
                Detalles
              </Link>

              <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
            </Breadcrumbs>

            {/* Contenido dinámico según la pestaña seleccionada */}
            <div className="container">
              <div className="tabs">
                <input
                  type="radio"
                  id="radio-1"
                  name="tabs"
                  checked={activeTab === 0}
                  onChange={() => handleTabChange(0)}
                />
                <label className="tab" htmlFor="radio-1">
                  Sobre Nosotros
                </label>

                <input
                  type="radio"
                  id="radio-2"
                  name="tabs"
                  checked={activeTab === 1}
                  onChange={() => handleTabChange(1)}
                />
                <label className="tab" htmlFor="radio-2">
                  Detalles
                </label>

                <span className="glider"></span>
              </div>
            </div>

            {/* Contenido de la pestaña */}
            {activeTab === 0 && (
              <div>
                <Typography variant="h4" component="h1" gutterBottom>
                  Sobre Nosotros
                </Typography>
                <Typography variant="body1" paragraph>
                  La industria 4.0 ya es una realidad mundial y nacional y tiene desafíos para integrarse al entorno de producción actual,
                  el que requiere la convergencia entre el entorno físico y el digital, lo que exige una transformación radical en la industria manufacturera.
                  Este desafío de transformación no solo impacta en los procedimientos operativos, sino también en las personas y en la nueva
                  forma de trabajar en un mundo donde los datos se han convertido en la materia prima principal, en lugar de los materiales
                  tradicionales utilizados en la fabricación de productos. En Colombia, según estudios revisados, la presencia de la Industria
                  4.0 está en proceso de crecimiento y en el sector de alimentos es incipiente, lo que hace relevante adoptar las innovaciones
                  tecnológicas, detallando las herramientas disponibles.
                </Typography>
              </div>
            )}

            {activeTab === 1 && (
              <div>
                <Typography variant="h6" gutterBottom>
                  Detalles y Seguimiento
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <img
                    src="https://via.placeholder.com/80"
                    alt="Imagen"
                    style={{ marginRight: 16, borderRadius: 8 }}
                  />
                  <Typography variant="body2">
                    Aquí puedes agregar información adicional como imágenes o detalles específicos.
                  </Typography>
                </Box>

                <Typography variant="body2" mb={2}>
                  También puedes seguirnos en LinkedIn para estar al tanto de las últimas actualizaciones.
                </Typography>

                <IconButton
                  color="primary"
                  component="a"
                  href="https://www.linkedin.com"
                  target="_blank"
                >
                  <LinkedIn />
                </IconButton>
              </div>
            )}
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
