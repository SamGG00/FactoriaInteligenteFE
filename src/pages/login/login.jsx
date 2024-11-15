import { useEffect, useState,useContext} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";
/* import logo from "../../assets/images/logo.png" */
import ReCAPTCHA from "react-google-recaptcha";
/* import { UserContext } from "../../context/userContext"; */
import axios from "axios"

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.65)",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "100vh",
  padding: 20,
  backgroundImage:
    "radial-gradient(ellipse at 50% 50%, hsl(226 97% 90%), hsl(226, 5%, 100%))",
  backgroundRepeat: "no-repeat",
}));

export default function Login() {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const url = "http://localhost:3000/auth/login/";
  const nav = useNavigate();
 /*  const {
    setIdUser,
    setUser,
    setAccessToken,
    setRefreshToken,
    setIsad,
    setPsst
    
  } = useContext(UserContext); */

  const authorization = async () => {
    const data = {
      user: user,
      password: password,
    };
    try {
      const response = await axios.post(url, data);
      const dataResponse = response.data;
      console.log(dataResponse)
      if (dataResponse.status) {
        setIdUser(dataResponse.data.iduser)
        setUser(dataResponse.data.user)
        setAccessToken(dataResponse.accessToken)
        setRefreshToken(dataResponse.refreshToken)
        setIsad(dataResponse.data.isad? 1:null)
        setPsst(dataResponse.data.passwordChanged? 1:0)
        nav("/dashboard")
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Credenciales incorrectas. Por favor intenta de nuevo.'); // Mensaje de error específico
      } else {
        console.log(error)
        setError('Ocurrió un error. Por favor intenta más tarde.'); // Mensaje de error general
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
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+/])[A-Za-z\d@$!%*?&+/]{12,}$/;


    if (user.length < 10 || user.length > 50 || !userRegex.test(user)) {
      setUserError(true);
      setError("Usuario incorrecto");
      return false;
    }
    if (password.length < 2 ) {
      setPasswordError(true);
      setError("Usuario o contraseña incorrectos");
      return false;
    }
    setUserError(false);
    setPasswordError(false);
    setError(null);
    authorization()
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs();
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

 

  return (
    <div className="app">
      <SignInContainer
        direction="column"
        justifyContent="space-between"
        className="bodyLogin"
      >
        <Card>
          <div className="d-flex justify-content-center mt-2 mb-1">
            {/* <img src={logo} width="50%" height="84%" alt="Logo" /> */}
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
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
                fullWidth
                variant="outlined"
                color={userError ? "error" : "primary"}
                label="Usuario"
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
                color={passwordError ? "error" : "primary"}
                placeholder="••••••••••••"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
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
              />
            </FormControl>
            {error && (
              <div className="error text-center text-danger">
                <p>{error}</p>
              </div>
            )}
            <div className="d-flex justify-content-center mt-2 mb-2 col-12 col-md-12">
              <ReCAPTCHA
                sitekey="6LdXWGIpAAAAAELm0POay9rlRRMWgrsZFcvX1jal"
                onChange={handleCaptchaChange}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ background: "radial-gradient(#008FD5, #4AB8EC)",color:"white"}}
              className="mt-2 mb-2"
              size="normal"
              disabled={!captchaValue || !password || !user}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </div>
  );
}