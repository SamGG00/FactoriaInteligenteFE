import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

import NavBar from "../home/components/AppBar";
import Footer from "../home/components/Footer";

// ====== Estilos similares a About ======

// Fondo degradado verde claro
const BackgroundContainer = styled("div")(({ theme }) => ({
  background: "linear-gradient(135deg, #e0ffea 0%, #e0ffea 100%)",
  minHeight: "100vh",
  width: "100%",
  height: "100%",
  paddingBottom: theme.spacing(5),
}));

// AppBar verde claro
const TransparentGreenAppBar = styled(AppBar)(() => ({
  backgroundColor: "#8FD5A6",
  boxShadow: "none",
}));

// Panel de pestaña (igual que en About)
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

// ====== Componente principal ======
export default function Quiz() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  // Manejo del tab actual
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ====== Estados para almacenar las respuestas ======
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  // Ejemplo de pregunta 1 con checkboxes (puede haber varias respuestas)
  const [p1Respuestas, setP1Respuestas] = useState({
    financiero: false,
    gestionHumana: false,
    produccion: false,
    documentacion: false,
    otro: false,
    otroTexto: "",
  });

  // Ejemplo de pregunta 3 con radios (solo una respuesta)
  const [p3Respuesta, setP3Respuesta] = useState("");

  // ... Puedes seguir creando estados para cada pregunta
  // o agruparlos en un objeto si lo prefieres.

  // ====== Manejo de eventos ======
  const handleP1Change = (event) => {
    const { name, value, checked } = event.target;
    // Si es el checkbox "otro", hay 2 casos: el checkbox y el campo de texto
    if (name === "otro") {
      // Activar/desactivar la casilla
      setP1Respuestas((prev) => ({ ...prev, otro: checked }));
    } else if (name === "otroTexto") {
      // Cambiar el texto "¿Cuál?"
      setP1Respuestas((prev) => ({ ...prev, otroTexto: value }));
    } else {
      // Para financiero, gestionHumana, etc.
      setP1Respuestas((prev) => ({ ...prev, [name]: checked }));
    }
  };

  const handleEnviar = () => {
    // Aquí puedes imprimir en consola o hacer un POST al backend para guardar
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("P1:", p1Respuestas);
    console.log("P3:", p3Respuesta);
    // ...
    alert("Respuestas enviadas (pendiente de integración con backend).");
  };

  return (
    <BackgroundContainer>
      {/* Navbar Superior */}
      <NavBar />

      {/* Contenedor para las pestañas */}
      <Box sx={{ width: "100%", mt: 2 }}>
        <TransparentGreenAppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#006400", // verde oscuro
                height: "4px"
              }
            }}
            aria-label="full width tabs example"
          >
            <Tab label="Instrucciones" {...a11yProps(0)} />
            <Tab label="Cuestionario" {...a11yProps(1)} />
          </Tabs>
        </TransparentGreenAppBar>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 5, mb: 5, color: "#000" }}>
        {/* ============== Pestaña 0: Instrucciones ============== */}
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" }}>
            Instrucciones
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A continuación se presentan varias preguntas sobre la adopción y uso de
            tecnologías de la industria 4.0. Por favor responda con la opción que más
            se ajuste a su realidad. Si no aplica o no está seguro, seleccione “No sabe”.
            <br />
            Al finalizar, haga clic en <strong>“Enviar respuestas”</strong>.
          </Typography>
        </TabPanel>

        {/* ============== Pestaña 1: Cuestionario ============== */}
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Cuestionario
          </Typography>

          {/* Formulario general */}
          <Grid container spacing={3}>
            {/* Nombre */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Grid>

            {/* Correo */}
            <Grid item xs={12} md={6}>
              <TextField
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            {/* PREGUNTA 1 (Checkbox) */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                1. Actualmente qué sistemas de información, de operación o transaccionales
                tiene la empresa
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={p1Respuestas.financiero}
                      onChange={handleP1Change}
                      name="financiero"
                    />
                  }
                  label="Sistema financiero"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={p1Respuestas.gestionHumana}
                      onChange={handleP1Change}
                      name="gestionHumana"
                    />
                  }
                  label="Sistema de gestión humana"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={p1Respuestas.produccion}
                      onChange={handleP1Change}
                      name="produccion"
                    />
                  }
                  label="Sistema de producción"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={p1Respuestas.documentacion}
                      onChange={handleP1Change}
                      name="documentacion"
                    />
                  }
                  label="Sistema de documentación"
                />
                {/* Otro */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={p1Respuestas.otro}
                        onChange={handleP1Change}
                        name="otro"
                      />
                    }
                    label="Otro"
                  />
                  {p1Respuestas.otro && (
                    <TextField
                      placeholder="¿Cuál?"
                      name="otroTexto"
                      variant="outlined"
                      size="small"
                      value={p1Respuestas.otroTexto}
                      onChange={handleP1Change}
                    />
                  )}
                </Box>
              </Box>
            </Grid>

            {/* PREGUNTA 3 (Radio: Conocimiento I4.0) */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                3. ¿Tiene usted conocimiento acerca de las tecnologías que componen la cuarta
                revolución industrial?
              </Typography>
              <RadioGroup
                value={p3Respuesta}
                onChange={(e) => setP3Respuesta(e.target.value)}
              >
                <FormControlLabel value="si" control={<Radio />} label="Sí" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
                <FormControlLabel value="noSabe" control={<Radio />} label="No sabe" />
              </RadioGroup>
            </Grid>

            {/* ... Puedes seguir agregando más preguntas análogamente ... */}

            {/* BOTÓN ENVIAR */}
            <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
              <Button variant="contained" onClick={handleEnviar}>
                Enviar respuestas
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      </Container>

      <Footer />
    </BackgroundContainer>
  );
}
