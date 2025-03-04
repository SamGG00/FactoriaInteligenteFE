import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  TextField,
  Input,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import NavBar from "../home/components/AppBar";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import axios from "axios";
import "../../assets/css/newArticle.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditArticle = () => {
  
  const [fields, setFields] = useState([
    { type: 1, value: "" }, // Bloque 1
    { type: 1, value: "" }, // Bloque 2
    { type: 1, value: "" }, // Bloque 3
    { type: 1, value: "" }, // Bloque 4
    { type: 1, value: "" }, // Bloque 5
    { type: 1, value: "" }, // Bloque 6
  ]);
  
  const [published, setPublished] = useState(false);
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const { id } = useParams();
  const nav = useNavigate();

    
  useEffect(() => {
    getArticletoEdit(id);
  }, [id]);

      
  useEffect(() => {
    console.log(fields);
  }, [fields]);


  const getArticletoEdit = async (id) =>{

    const response = await axios.get(
      `${API_URL}/article/${id}`,
      { withCredentials: true } // Asegúrate de que las cookies se envíen
    );
    if (!response.data.status) {
      alert("Error al cargar el artículo");
      return;
    }
    setFieldsToEdit(response.data.article);
  }
  
  const setFieldsToEdit = (data) => {
    const newFields = Object.keys(data).filter(key => key.startsWith("campo")).map((key, index) => {
      const value = data[key];
      if (typeof value === "string" && value.includes("hvj_bp_")) {
        const imageUrl = `${API_URL}/uploads/${value}`;
        return { type: 2, value:imageUrl, preview:imageUrl  }; // Es una imagen
      } else {
        return { type: 1, value }; // Es un texto
      }
    });
    setFields(newFields);
    setTitle(data.titulo);
    setPublished(data.publicado);
    setKeywords(data.palabras_clave);

  };
  
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
     info.split(",").map((kw) => kw.trim());
    setKeywords(info);
  };


  const guardarArticulo = async () => {
    const formData = new FormData();

    // Agregar el título y las palabras clave
    formData.append("title", title);
    formData.append("keywords", keywords);
    formData.append("published", published? 1:0);

    fields.forEach((field, index) => {
      if (field.type === 1) {
        // Campo de texto
        formData.append(`field${index + 1}`, field.value);
      } else if (field.type === 2 && field.value instanceof File) {
        // Campo de imagen
        formData.append(`field${index + 1}`, field.value);
      }
    });

    try {
      const route =`${API_URL}/article/article/${id}`
      console.log("ruta",route)
      const response = await axios.put( route,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true, // Incluye las cookies en la solicitud
        }
      );
      if (response.data.status){
        setAlertOpen(true)
          setTimeout(() => {
          nav("/dashboard");
        }, 2000); // Espera 2 segundos 
      }
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar el artículo:", error);
    }
  };

  const handleCloseAlert =  (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setAlertOpen(false);
  };
  return (
    <div>
      <NavBar />
      <Box sx={{ padding: 4 }}>
        <Box sx={{ marginBottom: 4 }}>
          <TextField
            label="Titulo del articulo"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={error}
            helperText={error ? errorMessage : ""}
          />
        </Box>
        {/* Palabras clave */}
        <Box sx={{ marginBottom: 4}}>
          <TextField
            label="Palabras clave (separadas por comas)"
            variant="outlined"
            fullWidth
            value={keywords}
            onChange={(e) => handleChangeKeyWords(e.target.value)}
            error={error}
            helperText={error ? errorMessage : ""}
            sx={{ flexGrow: 1, marginRight: 2 }} // Ajusta el estilo para que el checkbox quede al lado
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
                    <label
                      htmlFor={`file-upload-${index}`}
                      className="custom-label"
                    >
                      <FileUploadIcon /> Subir imagen
                    </label>
                    {field.preview && (
                      <Box sx={{ mt: 2, mb: 2 }}>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <img
                            src={field.preview}
                            alt={`Preview ${index}`}
                            style={{ maxWidth: "100%", maxHeight: "400px" }}
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
          <FormControlLabel
            control={
              <Checkbox
                checked={published}
                onChange={(e) => setPublished(e.target.checked)} // Actualiza el estado cuando el checkbox cambie
                color="primary"
              />
            }
            label="Publicado"
          />
          <Button
            variant="contained"
            size="large"
            startIcon={<SaveIcon />}
            sx={{ backgroundColor: "#1976d2" }}
            onClick={() => guardarArticulo()}
          >
            Crear
          </Button>
        </Box>
      </Box>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleCloseAlert}>
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
    {`Articulo ${title} creado exitosamente!`}
  </Alert>
</Snackbar>
    </div>
  );
};

export default EditArticle;
