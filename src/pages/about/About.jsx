import React, { useState } from 'react';
import { Card, CardContent, Typography, Container, Box, AppBar, Tabs, Tab, IconButton, Grid } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import NavBar from "/src/pages/home/components/AppBar.jsx";
import '../../assets/css/about.css';
import perfil1 from "../../assets/images/perfil1.webp";
import perfil2 from "../../assets/images/perfil2.webp"; // Imagen para otro investigador

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const investigadorData = [
  {
    nombre: "Marcelo López Trujillo",
    perfilImg: "https://media.licdn.com/dms/image/v2/C4E03AQEKcWQFU15LdA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1548725555869?e=1738800000&v=beta&t=2hZvzKF64h1Nuh3waUmhsOQ7f8pJdDXJQIS8CEVD0LQ",
    linkedin: "https://www.linkedin.com/in/marcelo-lopez-trujillo-76114125/"
  },
  {
    nombre: "Alexandra Eugenia Duarte ",
    perfilImg: "https://media.licdn.com/dms/image/v2/D4E03AQEHwSrAvrMnhg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724078772464?e=1738800000&v=beta&t=SdUX8ohIwaOt9fLqrLPk64oxqkqw5jZysqWbRPfV56w",
    linkedin: "https://www.linkedin.com/in/ana-rodriguez/"
  },
  {
    nombre: "Carlos Eduardo Marulanda ",
    perfilImg: "https://media.licdn.com/dms/image/v2/C5603AQGsTuRXri0yKw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1532127732301?e=1738800000&v=beta&t=-W2eqL_jI6pRahwWwdBM_qStLbSObkZZV8xNsFXSxso",
    linkedin: "https://co.linkedin.com/in/carlos-marulanda-2018"
  },
  {
    nombre: "Santiago Murillo Rendon",
    perfilImg: perfil2,
    linkedin: "https://www.linkedin.com/mwlite/profile/in/samurillore?originalSubdomain=co"
  },
  {
    nombre: "Marco Fidel Suárez",
    perfilImg: perfil2,
    linkedin: "https://www.linkedin.com/in/marco-suarez-918a94338"
  }

];

export default function About() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue); // Cambia la pestaña activa
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
        <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="inherit"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Sobre Nosotros" {...a11yProps(0)} />
                  <Tab label="Líderes" {...a11yProps(1)} />
                </Tabs>
              </AppBar>

              <TabPanel value={value} index={0} dir={theme.direction}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Sobre Nosotros
                </Typography>
                <Typography variant="body1" paragraph>
                  La industria 4.0 ya es una realidad mundial y nacional y tiene desafíos para integrarse al entorno de producción actual,
                  el que requiere la convergencia entre el entorno físico y el digital, lo que exige una transformación radical en la industria manufacturera.
                  Este desafío de transformación no solo impacta en los procedimientos operativos, sino también en las personas y en la nueva forma de trabajar
                  en un mundo donde los datos se han convertido en la materia prima principal, en lugar de los materiales tradicionales utilizados en la fabricación de productos.
                  En Colombia, según estudios revisados, la presencia de la Industria 4.0 está en proceso de crecimiento y en el sector de alimentos es incipiente,
                  lo que hace relevante adoptar las innovaciones tecnológicas, detallando las herramientas disponibles.
                  Para el efecto, desde un tipo de investigación cualitativa, a través de un estudio descriptivo, exploratorio, explicativo y correlacional,
                  se definirán estrategias para la fábrica inteligente en las empresas medianas del sector de alimentos del Departamento de Caldas Colombia y
                  se desarrollará una aplicación de software que permita dar inicio a un observatorio institucional del tema.
                </Typography>
              </TabPanel>

              <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid container spacing={3} justifyContent="center">
                  {investigadorData.map((investigador, index) => (
                    <Grid item xs={8} sm={"auto"} md={"auto"} key={index}>
                      <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                        <CardContent>
                          <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Typography variant="h6" gutterBottom>
                              {investigador.nombre}
                            </Typography>
                            <IconButton
                              color="primary"
                              component="a"
                              href={investigador.linkedin}
                              target="_blank"
                            >
                              <LinkedIn />
                            </IconButton>
                          </Box>

                          <Box display="flex" alignItems="center" mb={2}>
                            <img
                              src={investigador.perfilImg}
                              alt={investigador.nombre}
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                marginRight: 16
                              }}
                            />
                            <Typography variant="body2">
                              Información adicional sobre {investigador.nombre}.
                            </Typography>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </TabPanel>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
