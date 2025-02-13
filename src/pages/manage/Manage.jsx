import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../home/components/AppBar";
import Grid from "@mui/material/Grid2";
import EnhancedTable from "./components/EnhancedTable";
import { Button, Box, Snackbar, Alert } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

export default function Manage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [alertOpen, setAlertOpen] = useState(false);

  const url = "http://localhost:3000/article/articles?page=";

  const nav = useNavigate();

  useEffect(() => {
    getArticles(page);
  }, [page]);

  const getArticles = async (page = 1) => {
    const link = url + page;
    console.log(link);
    const response = await axios.get(link, {
      withCredentials: true, // Asegúrate de que las cookies se envíen
    });

    if (response.data.status) {
      console.log(response.data);
      setArticles(response.data.articles);
      setLoading(false);
    }
  };

  const deleteArticle = async (articleId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/article/article/${articleId}`,
        {
          withCredentials: true, // Incluye las cookies si es necesario
        }
      );
      console.log(response.data);
      if (response.data.status) {
        setAlertOpen(true);
        getArticles(page);
        console.log("Articulo eliminado correctamente");
      }
    } catch (error) {
      console.error("Error al eliminar el artículo:", error);
    }
  };

  const handleModalOpen = () => {
    nav("/New-article");
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  return (
    <div>
      <NavBar />
      <div className="container">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 12, sm: 12 }} sx={{ mt: 3 }}>
            <h2>Listado de artículos</h2>
          </Grid>
          <Grid size={{ xs: 12, md: 12, sm: 12 }}>
            {!loading && (
              <div className="">
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                  <Button
                    variant="contained"
                    size="medium"
                    startIcon={<AddIcon />}
                    sx={{ alignItems: "flex-end" }}
                    onClick={handleModalOpen}
                  >
                    {" "}
                    Articulo
                  </Button>
                </Box>
                <EnhancedTable rows={articles} deleteArticle={deleteArticle} />
              </div>
            )}
          </Grid>
        </Grid>
      </div>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {`Articulo eliminado  exitosamente!`}
        </Alert>
      </Snackbar>
    </div>
  );
}
