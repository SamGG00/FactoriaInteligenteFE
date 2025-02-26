import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { LinkedIn } from "@mui/icons-material";
import Logo from "../../assets/images/Logo Verde.png";
import NavBar from "/src/pages/home/components/AppBar.jsx";
import Footer from "/src/pages/home/components/Footer.jsx"
import MarceloLopez from "../../assets/images/MarceloLopezTrujillo.jpg";
import AlexandraDuarte from "../../assets/images/AlexandraDuarte.jpg";
import CarlosMarulanda from "../../assets/images/CarlosMarulanda.jpg";
import perfil2 from "../../assets/images/perfil2.webp";

// Datos de ejemplo
const investigadorData = [
  {
    nombre: "Marcelo López Trujillo",
    perfilImg: MarceloLopez,
    linkedin: "https://www.linkedin.com/in/marcelo-lopez-trujillo-76114125/",
    informacion: "Profesor Titular de Universidad de Caldas - Catedrático de Universidad Nacional de Colombia"
  },
  {
    nombre: "Alexandra Eugenia Duarte",
    perfilImg: AlexandraDuarte,
    linkedin: "https://www.linkedin.com/in/ph-d-alexandra-duarte-0a992724/",
    informacion: "Ph.D-Docente Universidad de Caldas"
  },
  {
    nombre: "Carlos Eduardo Marulanda",
    perfilImg: CarlosMarulanda,
    linkedin: "https://co.linkedin.com/in/carlos-marulanda-2018",
    informacion:"Profesor Universidad de Caldas"
  },
  {
    nombre: "Santiago Murillo Rendón",
    perfilImg: perfil2,
    linkedin:
      "https://www.linkedin.com/mwlite/profile/in/samurillore?originalSubdomain=co"
  },
  {
    nombre: "Marco Fidel Suárez",
    perfilImg: perfil2,
    linkedin: "https://www.linkedin.com/in/marco-suarez-918a94338"
  }
];

// Panel auxiliar para cada tab
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
        <Box sx={{ p: 1 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const BackgroundContainer = styled("div")(({ theme }) => ({
  background: "linear-gradient(135deg, #e0ffea 0%, #e0ffea 100%)",
  minHeight: "100vh",
  width: "100%",
  height: "100%",
  paddingBottom: theme.spacing(5),
}));

const TransparentGreenAppBar = styled(AppBar)(() => ({
  backgroundColor: "#8FD5A6",
  boxShadow: "none",
}));

export default function About() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BackgroundContainer>
      {/* Navbar Superior */}
      <NavBar />

      {/* Contenedor para que las pestañas estén de punta a punta */}
      {/* Agregamos mt: 2 para cierto espacio arriba de los botones */}
      <Box sx={{ width: "100%", mt: 2 }}>
        <TransparentGreenAppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth" // De punta a punta
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#006400", // Verde oscuro
                height: "4px",
              },
            }}
            aria-label="full width tabs example"
          >
            <Tab label="Sobre Nosotros" {...a11yProps(0)} />
            <Tab label="Líderes" {...a11yProps(1)} />
          </Tabs>
        </TransparentGreenAppBar>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 5, mb: 5, color: "#000" }}>
        {/* Tab 0: Sobre Nosotros */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* Título con negrita */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontFamily: "Times New Roman, serif",
              textAlign: "center",
              fontWeight: "bold", // Negrita
            }}
          >
            Sobre Nosotros
          </Typography>

          {/* Imagen bajo el título */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src={Logo}
              alt="Sobre Nosotros"
              style={{
                maxWidth: "200px",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify", fontFamily: "Times New Roman", fontSize: 24, }}>
            La industria 4.0 ya es una realidad mundial y nacional y tiene desafíos para integrarse al entorno de producción actual,
            el que requiere la convergencia entre el entorno físico y el digital, lo que exige una transformación radical en la industria
            manufacturera. Este desafío de transformación no solo impacta en los procedimientos operativos, sino también en las personas y
            en la nueva forma de trabajar en un mundo donde los datos se han convertido en la materia prima principal, en lugar de los materiales
            tradicionales utilizados en la fabricación de productos. En Colombia, según estudios revisados, la presencia de la Industria 4.0
            está en proceso de crecimiento y en el sector de alimentos es incipiente, lo que hace relevante adoptar las innovaciones tecnológicas,
            detallando las herramientas disponibles.Para el efecto, desde un tipo de investigación cualitativa, a través de un estudio descriptivo,
            exploratorio, explicativo y correlacional, se definirán estrategias para la fábrica inteligente en las empresas medianas del sector
            de alimentos del Departamento de Caldas Colombia y se desarrollará una aplicación de software que permita dar inicio a un observatorio institucional del tema.

          </Typography>

        </TabPanel>

        {/* Tab 1: Líderes */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* Contenedor: cada líder en una sola fila, texto a la izquierda e imagen a la derecha.
              Agregamos alignItems="center" y justifyContent="center" para centrar las columnas. */}
          <Grid container direction="column" spacing={2} alignItems="center">
            {investigadorData.map((investigador, index) => (
              <Grid item key={index} sx={{ width: "100%" }}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  {/* Columna izquierda (texto ~60%) */}
                  <Grid item xs={12} md={6}>
                    <Box display="flex" flexDirection="column">
                      <Box display="flex" alignItems="center" mb={1}>
                        <Typography variant="h6" sx={{ mr: 1 }}>
                          {investigador.nombre}
                        </Typography>
                        <IconButton
                          color="primary"
                          component="a"
                          href={investigador.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LinkedIn />
                        </IconButton>
                      </Box>
                      <Typography variant="body2" sx={{ textAlign: "justify" }}>
                        {investigador.informacion}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Columna derecha (imagen ~40%) */}
                  <Grid item xs={12} md={4} textAlign="center">
                    <img
                      src={investigador.perfilImg}
                      alt={investigador.nombre}
                      style={{
                        width: "120px", // Ajusta el tamaño a tu gusto
                        height: "120px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

      </Container>
      <Footer />
    </BackgroundContainer>

  );
}
