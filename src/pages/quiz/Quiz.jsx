import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import NavBar from "../home/components/AppBar";
import Footer from "../home/components/Footer";

// ===== Estilo de fondo, similar a "About" =====
const BackgroundContainer = styled("div")(({ theme }) => ({
    background: "linear-gradient(135deg, #e0ffea 0%, #e0ffea 100%)",
    minHeight: "100vh",
    width: "100%",
    height: "100%",
    paddingBottom: theme.spacing(5),
}));

// Estilo para las preguntas (cuadros con borde y fondo blanco)
const QuestionBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: theme.spacing(5),
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    marginBottom: theme.spacing(3),
}));

// Estilo para el título con borde blanco
const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: "3rem",
    fontWeight: "bold",
    fontFamily: "TimesNewRoman",
    color: "#006400", // verde
    textShadow: "10px black",
    textAlign: "center",
    marginBottom: theme.spacing(4),
}));

export default function Quiz() {
    // Estado global de las respuestas
    const [answers, setAnswers] = useState({
        // Datos de caracterización
        nombre: "",
        correo: "",

        // Pregunta 1 (múltiple)
        p1: {
            financiero: false,
            gestionHumana: false,
            produccion: false,
            documentacion: false,
            otro: false,
            otroTexto: ""
        },

        // Pregunta 2 (múltiple)
        p2: {
            ti: false,
            tecnologiaProduccion: false,
            desarrolloProductos: false,
            servicios: false,
            gestionCentralizada: false,
            sinGestion: false,
            otro: false,
            otroTexto: ""
        },

        // Pregunta 3 (radio: sí/no/no sabe)
        p3: "",

        // Pregunta 4 (múltiple)
        p4: {
            investigacion: false,
            produccion: false,
            compras: false,
            logistica: false,
            ventas: false,
            servicios: false,
            ti: false,
            otro: false,
            otroTexto: ""
        },

        // Pregunta 5 (múltiple)
        p5: {
            bigData: false,
            ia: false,
            fabricacionAditiva: false,
            rv: false,
            ra: false,
            roboticaColaborativa: false,
            iot: false,
            simuladores: false,
            nube: false,
            ciberseguridad: false,
            integracion: false,
            otro: false,
            otroTexto: ""
        },


        // Big Data, Pregunta 6 (radio)
        p6: "", // "si" | "no" | "noSabe"
        p6_1: {
            mongo: false,
            hadoop: false,
            elasticsearch: false,
            spark: false,
            storm: false,
            python: false,
            r: false,
            tableau: false,
            cognos: false,
            powerBI: false,
            oracleBI: false,
            otro: false,
            otroTexto: ""
        },


        // Inteligencia Artificial, Pregunta 7 (radio)
        p7: "", // "si" | "no" | "noSabe"
        p7_1: {
            iaGenerativa: false,
            robotsCadena: false,
            sistemasVisuales: false,
            chatbot: false,
            otro: false,
            otroTexto: ""
        },

        // Fabricación aditiva, Pregunta 8 (radio)
        p8: "",

        // RV y RA, Pregunta 9 (radio)
        p9: "",
        // 9.1 (múltiple)
        p9_1: {
            asistenciaTareas: false,
            capacitaciones: false,
            visualizacionProductos: false,
            eventos: false,
            ayudasTextuales: false,
            entretenimiento: false,
            presentaciones: false,
            otro: false,
            otroTexto: ""
        },

        // Robótica, Pregunta 10
        p10: {
            respuesta: "", // "si", "no", "noSabe"
            lineasTexto: "" // si es sí, ¿en qué líneas?
        },

        // IoT, Pregunta 11 (radio)
        p11: "",

        // Simuladores, Pregunta 12 (radio)
        p12: "", // si/no/noSabe
        p12Otro: "", // en caso de "otros, cuáles?"

        // Drones, Pregunta 13
        p13: {
            respuesta: "",
            usoTexto: ""
        },

        // Nube, Pregunta 14
        p14: {
            respuesta: "",
            cualesTexto: ""
        },

        // Ciberseguridad, Pregunta 15
        p15: {
            respuesta: "",
            cualesTexto: ""
        },

        // Integración horizontal, Pregunta 16
        p16: {
            respuesta: "",
            cualesTexto: ""
        },

        // Integración vertical, Pregunta 17
        p17: {
            respuesta: "",
            cualesTexto: ""
        }
    });

    // ============================= Handlers =============================
    const handleChangeText = (field, value) => {
        setAnswers((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    // Para preguntas con estructura { p1: { financiero, otro, otroTexto... } }
    const handleChangeCheckboxGroup = (question, name, checked) => {
        setAnswers((prev) => ({
            ...prev,
            [question]: {
                ...prev[question],
                [name]: checked
            }
        }));
    };

    const handleChangeTextInGroup = (question, name, value) => {
        setAnswers((prev) => ({
            ...prev,
            [question]: {
                ...prev[question],
                [name]: value
            }
        }));
    };

    const handleChangeRadio = (field, value) => {
        setAnswers((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleChangeRadioGroupObj = (question, value) => {
        setAnswers((prev) => ({
            ...prev,
            [question]: {
                ...prev[question],
                respuesta: value
            }
        }));
    };

    // Al hacer clic en "Enviar"
    const handleSubmit = () => {
        console.log("Respuestas finales:", answers);
        alert("Respuestas enviadas (aún no se implementa guardado en DB). Revisa la consola.");
    };

    // ====== Estilo de checkbox/radio: verde oscuro al marcar ======
    const checkboxRadioSx = {
        color: "#006400",
        "&.Mui-checked": {
            color: "#006400"
        }
    };

    // ====== Estilo para que el TextField se ponga blanco al enfocar ======
    const textFieldFocusSx = {
        "& .MuiInputBase-input:focus": {
            backgroundColor: "#fff"
        }
    };

    return (
        <BackgroundContainer>
            <NavBar />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 5 }}>
                
                <QuestionBox>
                <StyledTitle>
                    Cuestionario Industria 4.0
                </StyledTitle>
                    {/* ======================================================================== */}
                    {/* Nombre y Correo */}
                    {/* ======================================================================== */}
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Nombre"
                                    variant="outlined"
                                    fullWidth
                                    value={answers.nombre}
                                    onChange={(e) => handleChangeText("nombre", e.target.value)}
                                    sx={textFieldFocusSx}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    label="Correo electrónico"
                                    variant="outlined"
                                    fullWidth
                                    value={answers.correo}
                                    onChange={(e) => handleChangeText("correo", e.target.value)}
                                    sx={textFieldFocusSx}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                
                {/* ======================================================================== */}
                {/* PREGUNTA 1 */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">
                        1. Actualmente qué sistemas de información, de operación o transaccionales tiene la empresa
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p1.financiero}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p1", "financiero", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sistema financiero"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p1.gestionHumana}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p1", "gestionHumana", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sistema de gestión humana"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p1.produccion}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p1", "produccion", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sistema de producción"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p1.documentacion}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p1", "documentacion", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sistema de documentación"
                        />
                        {/* OTRO */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={answers.p1.otro}
                                        onChange={(e) =>
                                            handleChangeCheckboxGroup("p1", "otro", e.target.checked)
                                        }
                                        sx={checkboxRadioSx}
                                    />
                                }
                                label="Otro"
                            />
                            {answers.p1.otro && (
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="¿Cuál?"
                                    value={answers.p1.otroTexto}
                                    onChange={(e) =>
                                        handleChangeTextInGroup("p1", "otroTexto", e.target.value)
                                    }
                                    sx={textFieldFocusSx}
                                />
                            )}
                        </Box>
                    </Box>
                </Box>

                {/* ======================================================================== */}
                {/* PREGUNTA 2 */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">
                        2. ¿En qué áreas dispone su empresa de una gestión de la tecnología y la innovación?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p2.ti}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p2", "ti", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="TI"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p2.tecnologiaProduccion}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p2", "tecnologiaProduccion", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Tecnología de producción"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p2.desarrolloProductos}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p2", "desarrolloProductos", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Desarrollo de productos"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p2.servicios}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p2", "servicios", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Servicios"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p2.gestionCentralizada}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p2", "gestionCentralizada", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Gestión centralizada e integradora"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p2.sinGestion}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p2", "sinGestion", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sin gestión sistemática de la tecnología y la innovación"
                        />
                        {/* Otro */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={answers.p2.otro}
                                        onChange={(e) =>
                                            handleChangeCheckboxGroup("p2", "otro", e.target.checked)
                                        }
                                        sx={checkboxRadioSx}
                                    />
                                }
                                label="Otro"
                            />
                            {answers.p2.otro && (
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="¿Cuál?"
                                    value={answers.p2.otroTexto}
                                    onChange={(e) =>
                                        handleChangeTextInGroup("p2", "otroTexto", e.target.value)
                                    }
                                    sx={textFieldFocusSx}
                                />
                            )}
                        </Box>
                    </Box>
                </Box>

                {/* ======================================================================== */}
                {/* PREGUNTA 3 (Radio) */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">
                        3. ¿Tiene usted conocimiento acerca de las tecnologías que componen la cuarta revolución industrial?
                    </Typography>
                    {/* Colocamos radios uno debajo de otro */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p3 === "si"}
                                    onChange={(e) => handleChangeRadio("p3", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p3 === "no"}
                                    onChange={(e) => handleChangeRadio("p3", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p3 === "noSabe"}
                                    onChange={(e) => handleChangeRadio("p3", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                </Box>

                {/* ======================================================================== */}
                {/* PREGUNTA 4 (Múltiple) */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">
                        4. En su empresa se ha invertido en los dos años anteriores en Industria 4.0 en:
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p4.investigacion}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p4", "investigacion", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Investigación y Desarrollo"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p4.produccion}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p4", "produccion", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Producción y-o manufactura"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p4.compras}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p4", "compras", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Compras"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p4.logistica}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p4", "logistica", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Logística"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p4.ventas}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p4", "ventas", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Ventas"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p4.servicios}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p4", "servicios", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Servicios"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p4.ti}
                                    onChange={(e) => handleChangeCheckboxGroup("p4", "ti", e.target.checked)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Tecnologías de la Información"
                        />

                        {/* Otro */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={answers.p4.otro}
                                        onChange={(e) =>
                                            handleChangeCheckboxGroup("p4", "otro", e.target.checked)
                                        }
                                        sx={checkboxRadioSx}
                                    />
                                }
                                label="Otro"
                            />
                            {answers.p4.otro && (
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="¿Cuál?"
                                    value={answers.p4.otroTexto}
                                    onChange={(e) => handleChangeTextInGroup("p4", "otroTexto", e.target.value)}
                                    sx={textFieldFocusSx}
                                />
                            )}
                        </Box>
                    </Box>
                </Box>

                {/* ======================================================================== */}
                {/* PREGUNTA 5 */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">
                        5. En su empresa se tiene previsto invertir en los próximos 3 años en Industria 4.0 en:
                    </Typography>

                    {/* Contenedor para alinear en columna */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        {/* Big data */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.bigData}
                                    onChange={(e) => handleChangeCheckboxGroup("p5", "bigData", e.target.checked)}
                                    sx={checkboxRadioSx}  // Estilo verde oscuro y color al marcar
                                />
                            }
                            label="Big data"
                        />

                        {/* Inteligencia Artificial */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.ia}
                                    onChange={(e) => handleChangeCheckboxGroup("p5", "ia", e.target.checked)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Inteligencia Artificial"
                        />

                        {/* Fabricación Aditiva */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.fabricacionAditiva}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p5", "fabricacionAditiva", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Fabricación Aditiva"
                        />

                        {/* Realidad Virtual */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.rv}
                                    onChange={(e) => handleChangeCheckboxGroup("p5", "rv", e.target.checked)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Realidad Virtual"
                        />

                        {/* Realidad Aumentada */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.ra}
                                    onChange={(e) => handleChangeCheckboxGroup("p5", "ra", e.target.checked)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Realidad Aumentada"
                        />

                        {/* Robótica Colaborativa */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.roboticaColaborativa}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p5", "roboticaColaborativa", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Robótica Colaborativa"
                        />

                        {/* Internet de las Cosas */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.iot}
                                    onChange={(e) => handleChangeCheckboxGroup("p5", "iot", e.target.checked)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Internet de las Cosas"
                        />

                        {/* Simuladores */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.simuladores}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p5", "simuladores", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Simuladores"
                        />

                        {/* Computación en la nube */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.nube}
                                    onChange={(e) => handleChangeCheckboxGroup("p5", "nube", e.target.checked)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Computación en la nube"
                        />

                        {/* Ciberseguridad */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.ciberseguridad}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p5", "ciberseguridad", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Ciberseguridad"
                        />

                        {/* Sistemas de integración vertical y horizontal */}
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={answers.p5.integracion}
                                    onChange={(e) =>
                                        handleChangeCheckboxGroup("p5", "integracion", e.target.checked)
                                    }
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sistemas de integración vertical y horizontal"
                        />

                        {/* Otra. ¿Cuál? */}
                        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={answers.p5.otro}
                                        onChange={(e) =>
                                            handleChangeCheckboxGroup("p5", "otro", e.target.checked)
                                        }
                                        sx={checkboxRadioSx}
                                    />
                                }
                                label="Otra"
                            />
                            {answers.p5.otro && (
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    placeholder="¿Cuál?"
                                    value={answers.p5.otroTexto}
                                    onChange={(e) => handleChangeTextInGroup("p5", "otroTexto", e.target.value)}
                                    sx={{
                                        "& .MuiInputBase-input:focus": {
                                            backgroundColor: "#fff"
                                        }
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                </Box>



                {/* ======================================================================== */}
                {/* BIG DATA (P6) y 6.1 (múltiples) */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">
                        6. ¿En su empresa se realiza Big Data?
                    </Typography>

                    {/* Radio principal: Sí / No / No sabe */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p6 === "si"}
                                    onChange={(e) => handleChangeRadio("p6", e.target.value)}
                                    sx={checkboxRadioSx} // tu estilo de color verde oscuro
                                />
                            }
                            label="Sí"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p6 === "no"}
                                    onChange={(e) => handleChangeRadio("p6", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p6 === "noSabe"}
                                    onChange={(e) => handleChangeRadio("p6", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>

                    {/* Sub-pregunta 6.1: Solo aparece si p6 === "si" */}
                    {answers.p6 === "si" && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle1">
                                6.1. Si su respuesta es afirmativa, ¿Cuáles manejadores de Big Data utiliza?
                            </Typography>

                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                {/* MongoDB */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.mongo}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "mongo", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="MongoDB"
                                />

                                {/* Hadoop */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.hadoop}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "hadoop", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Hadoop"
                                />

                                {/* Elasticsearch */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.elasticsearch}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "elasticsearch", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Elasticsearch"
                                />

                                {/* Apache Spark */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.spark}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "spark", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Apache Spark"
                                />

                                {/* Apache Storm */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.storm}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "storm", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Apache Storm"
                                />

                                {/* Python */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.python}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "python", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Python"
                                />

                                {/* Lenguaje R */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.r}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "r", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Lenguaje R"
                                />

                                {/* Tableau */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.tableau}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "tableau", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Tableau"
                                />

                                {/* Cognos */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.cognos}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "cognos", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Cognos"
                                />

                                {/* Power BI */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.powerBI}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "powerBI", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Power BI"
                                />

                                {/* Oracle BI */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p6_1.oracleBI}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p6_1", "oracleBI", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Oracle BI"
                                />

                                {/* Otro */}
                                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={answers.p6_1.otro}
                                                onChange={(e) =>
                                                    handleChangeCheckboxGroup("p6_1", "otro", e.target.checked)
                                                }
                                                sx={checkboxRadioSx}
                                            />
                                        }
                                        label="Otro"
                                    />
                                    {answers.p6_1.otro && (
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            placeholder="¿Cuál?"
                                            value={answers.p6_1.otroTexto}
                                            onChange={(e) =>
                                                handleChangeTextInGroup("p6_1", "otroTexto", e.target.value)
                                            }
                                            sx={{
                                                "& .MuiInputBase-input:focus": {
                                                    backgroundColor: "#fff"
                                                }
                                            }}
                                        />
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>

                {/* ======================================================================== */}
                {/* Inteligencia Artificial (7, 7.1) */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Inteligencia Artificial</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        El campo de la informática que se concentra en la creación de sistemas capaces de realizar tareas
                        que normalmente requieren inteligencia humana, como el aprendizaje, el razonamiento y la
                        adaptación utilizando modelos matemáticos y algoritmos para procesar datos y tomar decisiones
                        de manera autónoma.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        7. ¿Tiene su negocio, software, aplicaciones, robots o sistemas que imitan
                        o reemplazan las funciones humanas como percibir, razonar, responder,
                        aprender o resolver problemas?
                    </Typography>

                    {/* Radio principal: Sí / No / No sabe */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p7 === "si"}
                                    onChange={(e) => handleChangeRadio("p7", e.target.value)}
                                    sx={checkboxRadioSx} // tu estilo verde oscuro
                                />
                            }
                            label="Sí"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p7 === "no"}
                                    onChange={(e) => handleChangeRadio("p7", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p7 === "noSabe"}
                                    onChange={(e) => handleChangeRadio("p7", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>

                    {/* Sub-pregunta 7.1: aparece solo si p7 === "si" */}
                    {answers.p7 === "si" && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle1">
                                7.1. Si la respuesta es afirmativa, marque cuál pueden estar implementando:
                            </Typography>

                            <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                                {/* IA generativa */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p7_1.iaGenerativa}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p7_1", "iaGenerativa", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="IA generativa (ChatGPT, Gemini, otros)"
                                />

                                {/* Robots en la cadena de valor */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p7_1.robotsCadena}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p7_1", "robotsCadena", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Robots en la cadena de valor"
                                />

                                {/* Sistemas visuales o auditivos */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p7_1.sistemasVisuales}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p7_1", "sistemasVisuales", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Sistemas visuales o auditivos"
                                />

                                {/* Chatbot */}
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p7_1.chatbot}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p7_1", "chatbot", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Chatbot"
                                />

                                {/* Otro */}
                                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={answers.p7_1.otro}
                                                onChange={(e) =>
                                                    handleChangeCheckboxGroup("p7_1", "otro", e.target.checked)
                                                }
                                                sx={checkboxRadioSx}
                                            />
                                        }
                                        label="Otro"
                                    />
                                    {answers.p7_1.otro && (
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            placeholder="¿Cuál?"
                                            value={answers.p7_1.otroTexto}
                                            onChange={(e) => handleChangeTextInGroup("p7_1", "otroTexto", e.target.value)}
                                            sx={{
                                                "& .MuiInputBase-input:focus": {
                                                    backgroundColor: "#fff"
                                                }
                                            }}
                                        />
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>

                {/* ==================== PREGUNTA 8 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Fabricación Aditiva</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        Las impresoras 3D son básicamente máquinas que aplican capas de diferentes materiales o
                        filamentos en diferentes direcciones o ejes, lo que facilita la creación y reproducción de productos
                        en menor tiempo y con menos costos.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        8. ¿En su empresa se realiza o adquiere servicios de impresión 3D?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p8 === "si"}
                                    onChange={(e) => handleChangeRadio("p8", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p8 === "no"}
                                    onChange={(e) => handleChangeRadio("p8", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p8 === "noSabe"}
                                    onChange={(e) => handleChangeRadio("p8", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                </Box>
                {/* ==================== PREGUNTA 9 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Realidad virtual y Aumentada</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        La realidad virtual es una tecnología que utiliza dispositivos para crear entornos virtuales que
                        permiten a los usuarios sumergirse y participar en ellos como si fueran reales. A través de
                        dispositivos como smartphones o lentes, la realidad aumentada combina elementos virtuales con
                        el mundo real, mejorando la experiencia del usuario al superponer información digital al entorno
                        físico.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        9. ¿Su empresa implementa realidad virtual y/o aumentada?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p9 === "si"}
                                    onChange={(e) => handleChangeRadio("p9", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p9 === "no"}
                                    onChange={(e) => handleChangeRadio("p9", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p9 === "noSabe"}
                                    onChange={(e) => handleChangeRadio("p9", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>

                    {answers.p9 === "si" && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle1">
                                9.1. ¿Cuál de las siguientes funciones aplican en su empresa?
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p9_1.asistenciaTareas}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p9_1", "asistenciaTareas", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Asistencia de tareas u oficios"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p9_1.capacitaciones}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p9_1", "capacitaciones", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Capacitaciones de recursos humanos"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p9_1.visualizacionProductos}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p9_1", "visualizacionProductos", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Visualización o percepción de productos o servicios"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p9_1.eventos}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p9_1", "eventos", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Eventos"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p9_1.ayudasTextuales}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p9_1", "ayudasTextuales", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Ayudas textuales para romper las barreras idiomáticas"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p9_1.entretenimiento}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p9_1", "entretenimiento", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Entretenimiento o recreación"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={answers.p9_1.presentaciones}
                                            onChange={(e) =>
                                                handleChangeCheckboxGroup("p9_1", "presentaciones", e.target.checked)
                                            }
                                            sx={checkboxRadioSx}
                                        />
                                    }
                                    label="Presentaciones, reuniones o conferencias"
                                />
                                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={answers.p9_1.otro}
                                                onChange={(e) =>
                                                    handleChangeCheckboxGroup("p9_1", "otro", e.target.checked)
                                                }
                                                sx={checkboxRadioSx}
                                            />
                                        }
                                        label="Otra"
                                    />
                                    {answers.p9_1.otro && (
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            placeholder="¿Cuál?"
                                            value={answers.p9_1.otroTexto}
                                            onChange={(e) =>
                                                handleChangeTextInGroup("p9_1", "otroTexto", e.target.value)
                                            }
                                            sx={{
                                                "& .MuiInputBase-input:focus": {
                                                    backgroundColor: "#fff"
                                                }
                                            }}
                                        />
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>

                {/* ==================== Robótica (10) ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Robótica</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        La robótica es un campo de ingeniería y ciencia que se dedica al diseño, construcción, operación y
                        uso de robots. Estos dispositivos, programables y con frecuencia autónomos, se utilizan para
                        realizar tareas que pueden ser peligrosas, repetitivas o complejas para los humanos.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        10. ¿En su empresa hay algún proceso en el cual una persona es asistida...?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p10.respuesta === "si"}
                                    onChange={(e) => handleChangeRadioGroupObj("p10", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí, ¿en qué líneas?"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p10.respuesta === "no"}
                                    onChange={(e) => handleChangeRadioGroupObj("p10", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p10.respuesta === "noSabe"}
                                    onChange={(e) => handleChangeRadioGroupObj("p10", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                    {answers.p10.respuesta === "si" && (
                        <TextField
                            fullWidth
                            margin="normal"
                            label="¿En qué líneas?"
                            value={answers.p10.lineasTexto}
                            onChange={(e) =>
                                setAnswers((prev) => ({
                                    ...prev,
                                    p10: { ...prev.p10, lineasTexto: e.target.value }
                                }))
                            }
                            sx={textFieldFocusSx}
                        />
                    )}
                </Box>

                {/* ==================== PREGUNTA 11 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Internet de las cosas</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        El Internet de las cosas (IoT) es un sistema de dispositivos físicos interconectados que se conectan
                        a Internet y tienen la capacidad de comunicarse y compartir datos entre sí. Estos dispositivos, que
                        incluyen electrodomésticos y sensores industriales, utilizan tecnologías integradas para recopilar y
                        transmitir información, lo que mejora la eficiencia y la toma de decisiones.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        11. ¿En su empresa hay máquinas comunicadas vía internet Wifi a otras máquinas o personas y que estas presten algún servicio o pertenezcan a la cadena de producción?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p11 === "si"}
                                    onChange={(e) => handleChangeRadio("p11", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p11 === "no"}
                                    onChange={(e) => handleChangeRadio("p11", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p11 === "noSabe"}
                                    onChange={(e) => handleChangeRadio("p11", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                </Box>
                {/* ==================== PREGUNTA 12 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Simuladores</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        Los sistemas que simulan el comportamiento de procesos, sistemas o entornos reales para
                        entrenamiento, análisis o investigación se conocen como simuladores. Para recrear escenarios,
                        utilizan modelos matemáticos y algoritmos, lo que permite a los usuarios experimentar y practicar
                        en un entorno seguro y controlado.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        12. ¿En su empresa implementan simuladores? Estos pueden ser matemáticos, de comercio, lógicos, de decisiones, de producción, etc.
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p12 === "si"}
                                    onChange={(e) => handleChangeRadio("p12", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p12 === "no"}
                                    onChange={(e) => handleChangeRadio("p12", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p12 === "noSabe"}
                                    onChange={(e) => handleChangeRadio("p12", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                        <FormControlLabel
                            value="otro"
                            control={
                                <Radio
                                    checked={answers.p12 === "otro"}
                                    onChange={(e) => handleChangeRadio("p12", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Otros ¿Cuáles?"
                        />
                    </Box>
                    {answers.p12 === "otro" && (
                        <TextField
                            variant="outlined"
                            size="small"
                            placeholder="¿Cuáles?"
                            value={answers.p12Otro}
                            onChange={(e) => handleChangeText("p12Otro", e.target.value)}
                            sx={{
                                mt: 1,
                                "& .MuiInputBase-input:focus": {
                                    backgroundColor: "#fff"
                                }
                            }}
                        />
                    )}
                </Box>
                {/* ==================== PREGUNTA 13 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Drones</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        Los drones son vehículos aéreos no tripulados (UAV) con control remoto y autonomía gracias a
                        sensores integrados y software. Se utilizan para una variedad de propósitos, incluida la vigilancia,
                        las misiones de rescate, las entregas y la fotografía aérea.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        13. ¿En su empresa implementan drones? Estos dispositivos se utilizan para tareas como vigilancia, rescate, entregas y fotografía aérea.
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p13.respuesta === "si"}
                                    onChange={(e) => handleChangeRadioGroupObj("p13", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí, ¿para qué los usan?"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p13.respuesta === "no"}
                                    onChange={(e) => handleChangeRadioGroupObj("p13", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p13.respuesta === "noSabe"}
                                    onChange={(e) => handleChangeRadioGroupObj("p13", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                    {answers.p13.respuesta === "si" && (
                        <TextField
                            label="¿Para qué los usan?"
                            fullWidth
                            margin="normal"
                            value={answers.p13.usoTexto}
                            onChange={(e) =>
                                setAnswers((prev) => ({
                                    ...prev,
                                    p13: { ...prev.p13, usoTexto: e.target.value },
                                }))
                            }
                            sx={textFieldFocusSx}
                        />
                    )}
                </Box>

                {/* ==================== PREGUNTA 14 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Computación en la nube</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        El modelo de prestación de servicios informáticos conocido como computación en la nube permite
                        el acceso remoto a recursos y servicios como almacenamiento, procesamiento y aplicaciones a
                        través de Internet. El uso de este método elimina la necesidad de infraestructura física local, lo
                        que permite la escalabilidad, la flexibilidad y la eficiencia.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        14. ¿En su empresa se implementan servicios de almacenamiento en la nube permitiéndoles así acceder a diferentes tipos de información más allá de los servidores de la empresa?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p14.respuesta === "si"}
                                    onChange={(e) => handleChangeRadioGroupObj("p14", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí, ¿Cuáles?"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p14.respuesta === "no"}
                                    onChange={(e) => handleChangeRadioGroupObj("p14", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p14.respuesta === "noSabe"}
                                    onChange={(e) => handleChangeRadioGroupObj("p14", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                    {answers.p14.respuesta === "si" && (
                        <TextField
                            label="¿Cuáles?"
                            fullWidth
                            margin="normal"
                            value={answers.p14.cualesTexto}
                            onChange={(e) =>
                                setAnswers((prev) => ({
                                    ...prev,
                                    p14: { ...prev.p14, cualesTexto: e.target.value }
                                }))
                            }
                            sx={textFieldFocusSx}
                        />
                    )}
                </Box>
                {/* ==================== PREGUNTA 15 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Ciberseguridad</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        La práctica de proteger sistemas informáticos, redes y datos contra ataques, daños o acceso no
                        autorizado se conoce como ciberseguridad. Incluye una variedad de enfoques y tecnologías para
                        proteger la integridad, la confidencialidad y la disponibilidad de la información digital.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        15. ¿En su empresa reconocen la importancia de la ciberseguridad para la protección de los sistemas y los datos y, a la vez, destinan presupuesto y adquieren servicios especializados de este tipo?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p15.respuesta === "si"}
                                    onChange={(e) => handleChangeRadioGroupObj("p15", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí, ¿Cuáles?"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p15.respuesta === "no"}
                                    onChange={(e) => handleChangeRadioGroupObj("p15", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p15.respuesta === "noSabe"}
                                    onChange={(e) => handleChangeRadioGroupObj("p15", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                    {answers.p15.respuesta === "si" && (
                        <TextField
                            label="¿Cuáles?"
                            fullWidth
                            margin="normal"
                            value={answers.p15.cualesTexto}
                            onChange={(e) =>
                                setAnswers((prev) => ({
                                    ...prev,
                                    p15: { ...prev.p15, cualesTexto: e.target.value }
                                }))
                            }
                            sx={textFieldFocusSx}
                        />
                    )}
                </Box>
                {/* ==================== PREGUNTA 16 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Sistemas de integración horizontales</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        En la Industria 4.0, los sistemas de integración horizontal facilitan la conexión y colaboración entre
                        diferentes empresas o departamentos dentro de una organización, optimizando la comunicación,
                        compartiendo datos y recursos para lograr una producción más ágil y eficiente en toda la cadena
                        de valor.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        16. ¿Tiene sistemas de integración horizontal?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p16.respuesta === "si"}
                                    onChange={(e) => handleChangeRadioGroupObj("p16", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí, ¿Cuáles?"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p16.respuesta === "no"}
                                    onChange={(e) => handleChangeRadioGroupObj("p16", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p16.respuesta === "noSabe"}
                                    onChange={(e) => handleChangeRadioGroupObj("p16", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                    {answers.p16.respuesta === "si" && (
                        <TextField
                            label="¿Cuáles?"
                            fullWidth
                            margin="normal"
                            value={answers.p16.cualesTexto}
                            onChange={(e) =>
                                setAnswers((prev) => ({
                                    ...prev,
                                    p16: { ...prev.p16, cualesTexto: e.target.value }
                                }))
                            }
                            sx={textFieldFocusSx}
                        />
                    )}
                </Box>
                {/* ==================== PREGUNTA 17 ==================== */}
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Sistemas de integración verticales</Typography>
                    <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                        Los sistemas de integración vertical en la industria 4.0 conectan y coordinan procesos a lo largo de
                        la cadena de valor, desde la producción hasta la distribución, lo que permite una mayor eficiencia,
                        flexibilidad y personalización en la fabricación de productos.
                    </Typography>
                    <p></p>
                    <Typography variant="h6">
                        17. ¿Tiene sistemas de integración vertical?
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <FormControlLabel
                            value="si"
                            control={
                                <Radio
                                    checked={answers.p17.respuesta === "si"}
                                    onChange={(e) => handleChangeRadioGroupObj("p17", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="Sí, ¿cuáles?"
                        />
                        <FormControlLabel
                            value="no"
                            control={
                                <Radio
                                    checked={answers.p17.respuesta === "no"}
                                    onChange={(e) => handleChangeRadioGroupObj("p17", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No"
                        />
                        <FormControlLabel
                            value="noSabe"
                            control={
                                <Radio
                                    checked={answers.p17.respuesta === "noSabe"}
                                    onChange={(e) => handleChangeRadioGroupObj("p17", e.target.value)}
                                    sx={checkboxRadioSx}
                                />
                            }
                            label="No sabe"
                        />
                    </Box>
                    {answers.p17.respuesta === "si" && (
                        <TextField
                            label="¿Cuáles?"
                            fullWidth
                            margin="normal"
                            value={answers.p17.cualesTexto}
                            onChange={(e) =>
                                setAnswers((prev) => ({
                                    ...prev,
                                    p17: { ...prev.p17, cualesTexto: e.target.value }
                                }))
                            }
                            sx={textFieldFocusSx}
                        />
                    )}
                </Box>
                </QuestionBox>
                {/* ======================================================================== */}
                {/* Botón ENVIAR */}
                {/* ======================================================================== */}
                <Box sx={{ mt: 5, textAlign: "center" }}>
                    <Button variant="contained" size="large" onClick={handleSubmit}>
                        Enviar
                    </Button>
                </Box>
            </Container>

            <Footer />
        </BackgroundContainer>
    );
}
