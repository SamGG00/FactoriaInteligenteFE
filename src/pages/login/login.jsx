import React, { useState,useContext } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  FormControl,
  OutlinedInput,
  Stack,
  Card as MuiCard,
  InputAdornment,
  InputLabel
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/userContext";
import logo from "../../assets/images/Logo Verde.png";
import {UserContext} from "../../utils/userContext";

const SignInContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100vh", // Ocupa toda la ventana
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  // Fondo con gradiente
  background:
    "radial-gradient(ellipse at 50% 50%, hsl(226, 97%, 90%), hsl(226, 5%, 100%)) no-repeat center center",
  backgroundSize: "cover",
}));

const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ebf5e9", // Semitransparente
  width: "100%",
  maxWidth: 400, // Ancho máximo para pantallas grandes
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
}));

export default function Login() {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  // URL de ejemplo; ajusta según tu backend
  const url = `${API_URL}/auth/login`;
  const nav = useNavigate();

  // Si usas Context para manejar usuario, descomenta e importa tu contexto
  
  const {
    setUserId,
    setUser,
  } = useContext(UserContext);
  

  const authorization = async () => {
    const data = {
      username: user,
      password: password,
    };
    try {
      const response = await axios.post(url, data,{withCredentials:true});
      const dataResponse = response;
      console.log("response :",dataResponse)
      if (dataResponse.status) {
        // Descomenta si usas tu contexto de usuario
        setUserId(dataResponse.data.id);
        setUser(dataResponse.data.user);
        nav("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Credenciales incorrectas. Por favor intenta de nuevo.");
      } else {
        setError("Ocurrió un error. Por favor intenta más tarde.");
      }
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const validateInputs = () => {
    const userRegex = /^[a-zA-Z0-9._%+-]+$/;

    // Validación mínima (ajusta según tus requisitos)
    if (user.length < 4 || user.length > 50 || !userRegex.test(user)) {
      setUserError(true);
      setError("Usuario incorrecto o demasiado corto.");
      return false;
    }
    if (password.length < 2) {
      setPasswordError(true);
      setError("Usuario o contraseña incorrectos.");
      return false;
    }
    setUserError(false);
    setPasswordError(false);
    setError(null);
    authorization();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <SignInContainer>
      <StyledCard>
         
        <Box display="flex" justifyContent="center">
          <img src={logo} alt="Logo" style={{ width: "35%", height: "auto" }} />
        </Box>
        
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              mb: 1,
              fontWeight: "bold",
              fontFamily: "Times New Roman, serif",
              color:"#2E8B57",
            }}
          >
            Inicio de sesión
          </Typography>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-user">Usuario</InputLabel>
            <OutlinedInput
              onChange={(e) => setUsername(e.target.value)}
              id="outlined-adornment-user"
              error={userError}
              type="text"
              name="user"
              placeholder="ejemplo.123"
              autoComplete="username"
              autoFocus
              required
              label="Usuario"
              sx={{ bgcolor: "#cff5c4" }}
            />
          </FormControl>

          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              error={passwordError}
              placeholder="••••••••••••"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Contraseña"
              sx={{ bgcolor: "#cff5c4" }}
            />
          </FormControl>

          {/* Mensaje de error */}
          {error && (
            <Typography
              variant="body2"
              color="error"
              textAlign="center"
              mt={1}
            >
              {error}
            </Typography>
          )}

          {/* Captcha */}
          {/* <Box display="flex" justifyContent="center" mt={1}>
            <ReCAPTCHA
              sitekey=""
              onChange={handleCaptchaChange}
            />
          </Box> */}

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              background: "radial-gradient(#cff5c4,#2E8B57)",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                background: "radial-gradient(#cff5c4, #2E8B57)",
              },
            }}
            disabled={!password || !user}
          >
            Iniciar sesión
          </Button>
        </Box>
      </StyledCard>
    </SignInContainer>
  );
}
