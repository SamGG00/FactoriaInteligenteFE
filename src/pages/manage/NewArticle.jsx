import React, { useEffect, useState } from "react";
import NavBar from "../home/components/AppBar";
import Grid from "@mui/material/Grid2";
import { Button, TextField, Input, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import '../../assets/css/newArticle.css'
export default function NewArticle() {
  // Estados para los campos
  const [title, setTitle] = useState(null);
  const [keywords, setKeywords] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Estado para cada campo adicional
  const [field1,setField1]=useState('');
  const [field2,setField2]=useState('');
  const [field3,setField3]=useState('');
  const [field4,setField4]=useState('');
  const [field5,setField5]=useState('');
  const [field6,setField6]=useState('');

  // Estado para gestionar el tipo de contenido seleccionado (Texto o Imagen)
  const [contentType1, setContentType1] = useState(1); 
  const [contentType2, setContentType2] = useState(1);
  const [contentType3, setContentType3] = useState(1); 
  const [contentType4, setContentType4] = useState(1);
  const [contentType5, setContentType5] = useState(1); 
  const [contentType6, setContentType6] = useState(1); 


  const handleChangeField= (block,value) => {
    switch(block){
      case 1: setField1(value); break;
      case 2: setField2(value); break;
      case 3: setField3(value); break;
      case 4: setField4(value); break;
      case 5: setField5(value); break;
      case 6: setField6(value); break;
      default: break;
    }
  }

  const selectorType=(block,type)=>{
    switch(block){
      case 1: setContentType1(type); break;
      case 2: setContentType2(type); break;
      case 3: setContentType3(type); break;
      case 4: setContentType4(type); break;
      case 5: setContentType5(type); break;
      case 6: setContentType6(type); break;
      default: break;
    }
  }

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

  useEffect(() => {
    console.log(field1);
  }, [field1]);

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
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selectorType(1, 1)}
                variant={contentType1 === 1 ? 'contained' : 'outlined'}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selectorType(1, 2)}
                variant={contentType1 === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType1 === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={field1} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(1, e.target.value)}
                />
              )}

              {contentType1 === 2 && (
                <Box>
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  id="file-upload"
                  style={{ display: "none" }}
                  onChange={(e) => handleChangeField(1, e.target.files[0])}
                />
                <label htmlFor="file-upload" className="custom-label">
                  Subir imagen
                </label>
              </Box>
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selectorType(2,1)}
                variant={contentType2 === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selectorType(2,2)}
                variant={contentType2 === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType1 === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={field2} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(2, e.target.value)}
                />
              )}

              {contentType2 === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(2, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selectorType(3,1)}
                variant={contentType3 === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selectorType(3,2)}
                variant={contentType3 === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType3 === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={field3} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(3, e.target.value)}
                />
              )}

              {contentType3 === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(3, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selectorType(4,1)}
                variant={contentType4 === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selectorType(4,2)}
                variant={contentType4 === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType4 === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={field4} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(4, e.target.value)}
                />
              )}

              {contentType4 === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(4, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selectorType(5,1)}
                variant={contentType5 === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selectorType(5,2)}
                variant={contentType5 === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType5 === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={field5} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(5, e.target.value)}
                />
              )}

              {contentType5 === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(5, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>

          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", // Permite apilar los botones y el campo
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => selectorType(6,1)}
                variant={contentType6 === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => selectorType(6,2)}
                variant={contentType6 === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo de texto o imagen, según la selección */}
            <Box sx={{ width: "100%" }}>
              {contentType6 === 1 && (
                <TextField
                  label="Descripción"
                  multiline
                  rows={4} // Número de filas visibles por defecto
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={field6} // Usamos el primer campo para texto
                  onChange={(e) => handleChangeField(6, e.target.value)}
                />
              )}

              {contentType6 === 2 && (
                <Input
                  type="file"
                  inputProps={{ accept: "image/*" }}
                  fullWidth
                  sx={{ marginTop: 3 }}
                  onChange={(e) => handleChangeField(6, e.target.files[0])}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
