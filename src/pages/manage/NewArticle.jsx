import React, { useEffect, useState } from "react";
import NavBar from "../home/components/AppBar";
import Grid from "@mui/material/Grid2";
import { Button, TextField, Input, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

export default function NewArticle() {
  // Estados para los campos
  const [title, setTitle] = useState(null);
  const [keywords, setKeywords] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Estado para cada campo adicional
  const [fields, setFields] = useState([null, null, null, null, null, null]);


  // Estado para gestionar el tipo de contenido seleccionado (Texto o Imagen)
  const [contentType, setContentType] = useState(1); // Predeterminado a 1 para mostrar el campo de texto

  // Lógica para manejar el campo de palabras clave
  const handleChangeKeyWords = (info) => {
    const keywordArray = info.split(",").map((kw) => kw.trim()); // Divide las palabras clave por comas
    if (keywordArray.length > 6) {
      setError(true);
      setErrorMessage("Solo se permite ingresar un máximo de 6 palabras clave.");
      return;
    }
    setError(false);
    setErrorMessage(""); // Limpia el mensaje de error
    setKeywords(info);
  };


  const handleChangeField = (index, value) => {
    const newFields = [...fields];
    newFields[index] = value;
    setFields(newFields);
  };

  // Función para seleccionar el tipo de contenido (Texto o Imagen)
  const selecterType = (type) => {
    setContentType(type); 
  };

  useEffect(() => {
    console.log(keywords);
  }, [keywords]);

  return (
    <div>
      <NavBar />
      <div className="ms-5 me-5">
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 8, sm: 12 }}
            sx={{
              mt: 5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <TextField
              id="outlined-basic"
              label="Titulo del articulo.."
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>

          <Grid
            size={{ xs: 12, md: 4, sm: 12 }}
            sx={{ mt: 5, display: "flex", justifyContent: "flex-end", mb: 2 }}
          >
            <Button
              variant="contained"
              size="small"
              startIcon={<SaveIcon />}
              sx={{ minWidth: 100, marginRight: 5 }}
            >
              Crear
            </Button>
            <Button
              variant="contained"
              size="small"
              startIcon={<DoNotDisturbAltIcon />}
              sx={{ minWidth: 100 }}
            >
              Cancelar
            </Button>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mb: 0 }}>
            <TextField
              id="outlined-basic"
              label="Palabras clave (separadas por comas)"
              variant="outlined"
              fullWidth
              onChange={(e) => handleChangeKeyWords(e.target.value)}
              error={error}
              helperText={errorMessage}
              value={keywords}
              onInput={(e) => {
                const keywordArray = e.target.value.split(",").map((kw) => kw.trim());
                // Si hay 6 palabras clave, prevenimos escribir más
                if (keywordArray.length > 6) {
                  e.preventDefault();
                }
              }}
            />
          </Grid>

          {/* Caja que contiene los botones de "Texto" y "Imagen" */}
          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              minHeight: 300,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selecterType(1)}
                variant={contentType === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selecterType(2)}
                variant={contentType === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={fields[0]} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(0, e.target.value)}
                />
              )}

              {contentType === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(0, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              minHeight: 300,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selecterType(1)}
                variant={contentType === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selecterType(2)}
                variant={contentType === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={fields[0]} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(0, e.target.value)}
                />
              )}

              {contentType === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(0, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              minHeight: 300,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selecterType(1)}
                variant={contentType === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selecterType(2)}
                variant={contentType === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={fields[0]} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(0, e.target.value)}
                />
              )}

              {contentType === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(0, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              minHeight: 300,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selecterType(1)}
                variant={contentType === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selecterType(2)}
                variant={contentType === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={fields[0]} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(0, e.target.value)}
                />
              )}

              {contentType === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(0, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              minHeight: 300,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selecterType(1)}
                variant={contentType === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selecterType(2)}
                variant={contentType === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={fields[0]} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(0, e.target.value)}
                />
              )}

              {contentType === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(0, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              minHeight: 300,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selecterType(1)}
                variant={contentType === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selecterType(2)}
                variant={contentType === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={fields[0]} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(0, e.target.value)}
                />
              )}

              {contentType === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(0, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
