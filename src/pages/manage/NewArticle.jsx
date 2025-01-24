import React, { useState,useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  TextField,
  Input,
  Typography,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import NavBar from "../home/components/AppBar";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import axios from 'axios'
import '../../assets/css/newArticle.css'
const ArticleEditor = () => {
  const [fields, setFields] = useState([
    { type: 1, value: "" }, // Bloque 1
    { type: 1, value: "" }, // Bloque 2
    { type: 1, value: "" }, // Bloque 3
    { type: 1, value: "" }, // Bloque 4
    { type: 1, value: "" }, // Bloque 5
    { type: 1, value: "" }, // Bloque 6
  ]);

  const [title, setTitle]=useState("")
  const [keywords, setKeywords] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFieldChange = (index, value, preview = null) => {
    setFields((prev) =>
      prev.map((field, i) =>
        i === index ? { ...field, value, preview } : field
      )
    );
  };

  const handleTypeChange = (index, type) => {
    setFields((prev) =>
      prev.map((field, i) => (i === index ? { ...field, type } : field))
    );
  };

  const handleChangeKeyWords = (info) => {
    const keywordArray = info.split(",").map((kw) => kw.trim());
    if (keywordArray.length > 6) {
      setError(true);
      setErrorMessage("Solo se permite ingresar un máximo de 6 palabras clave.");
    } else {
      setError(false);
      setErrorMessage("");
    }
    setKeywords(info);
  };

  const guardarArticulo = async() => {
    console.log("Holas")
  }
  useEffect(() => {
    console.log(fields);
  }, [fields]);

  return (
    <div>
    <NavBar/>
    <Box sx={{ padding: 4 }}>

    <Box sx={{ marginBottom: 4 }}>
        <TextField
          label="Titulo del articulo"
          variant="outlined"
          fullWidth
          value={keywords}
          onChange={(e) => setTitle(e.target.value)}
          error={error}
          helperText={error ? errorMessage : ""}
        />
      </Box>
      {/* Palabras clave */}
      <Box sx={{ marginBottom: 4 }}>
        <TextField
          label="Palabras clave (separadas por comas)"
          variant="outlined"
          fullWidth
          value={keywords}
          onChange={(e) => handleChangeKeyWords(e.target.value)}
          error={error}
          helperText={error ? errorMessage : ""}
        />
      </Box>

      {/* Bloques dinámicos */}
      <Grid container spacing={2}>
        {fields.map((field, index) => (
          <Grid
            key={index}
            item
            xs={12}
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* Botones de selección */}
            <Box sx={{ mb: 2 }}>
              <Button
                className="btn-1"
                onClick={() => handleTypeChange(index, 1)}
                variant={field.type === 1 ? "contained" : "outlined"}
                sx={{ marginRight: 2 }}
              >
                Texto
              </Button>
              <Button
                className="btn-1"
                onClick={() => handleTypeChange(index, 2)}
                variant={field.type === 2 ? "contained" : "outlined"}
              >
                Imagen
              </Button>
            </Box>

            {/* Campo dinámico */}
            <Box sx={{ width: "100%" }}>
              {field.type === 1 ? (
                <TextField
                  label={`Descripción del bloque ${index + 1}`}
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe algo aquí..."
                  value={field.value}
                  onChange={(e) => handleFieldChange(index, e.target.value)}
                />
              ) : (
                <Box>
                  <Input
                    type="file"
                    inputProps={{ accept: "image/*" }}
                    id={`file-upload-${index}`}
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          handleFieldChange(index, file, reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <label htmlFor={`file-upload-${index}`} className="custom-label">
                  <FileUploadIcon/> Subir imagen
                  </label>
                  {field.preview && (
                    <Box sx={{ mt: 2,mb:2, }}>
                      <Box sx={{display:"flex",justifyContent:"center",}}>
                      <img
                        src={field.preview}
                        alt={`Preview ${index}`}
                        style={{ maxWidth: "100%", maxHeight: "400px",}}
                      />
                      </Box>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Botón de guardar */}
      <Box sx={{ marginTop: 4, textAlign: "right" }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<SaveIcon />}
          sx={{ backgroundColor: "#1976d2" }}
          onClick={() =>guardarArticulo()}
        >
          Crear
        </Button>
      </Box>
    </Box>
    </div>
  );
};

export default ArticleEditor;
