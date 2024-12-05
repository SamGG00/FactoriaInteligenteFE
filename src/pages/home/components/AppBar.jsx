import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Button, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../../../assets/images/Logo Verde.png";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1), // Ícono alineado a la derecha
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0), // Ajuste de padding superior e inferior
    paddingLeft: theme.spacing(2), // Espacio inicial para el texto (placeholder)
    paddingRight: `calc(1em + ${theme.spacing(4)})`, // Espacio para el ícono a la derecha
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const toAbout = () => {
    navigate('/about');
  }
  const toHome = () => {
    navigate('/');
  }
  const toWeb = () => {
    navigate('/web');
  }

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Iniciar sesion</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button onClick={toAbout}>
          <Typography>Sobre Nosotros</Typography>
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Iniciar sesión</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#29ABE2" }}>
        <Toolbar>
          <IconButton
           onClick={toHome}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <img
              src={Logo}
              alt="Home"
              style={{
                height: "40px", // Altura del logo
                width: "auto", // Mantener proporciones
              }}
            />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2
            }}
          >
            <Button
              onClick={toAbout}
              variant="text"
              sx={{
                color: "white",
                textTransform: "none", // Evita las mayúsculas automáticas
                position: "relative",
                overflow: "hidden", // Asegura que el subrayado no se desborde
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "2px", // Grosor del subrayado
                  backgroundColor: "white",
                  transform: "scaleX(0)", // Oculto inicialmente
                  transformOrigin: "left",
                  transition: "transform 0.3s ease-in-out", // Animación suave
                },
                "&:hover::after": {
                  transform: "scaleX(1)", // Se expande en hover
                },
              }}
            >
              Sobre Nosotros
            </Button>
            <Button
              onClick={toWeb}
              variant="text"
              sx={{
                color: "white",
                textTransform: "none", // Evita las mayúsculas automáticas
                position: "relative",
                overflow: "hidden", // Asegura que el subrayado no se desborde
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: "100%",
                  height: "2px", // Grosor del subrayado
                  backgroundColor: "white",
                  transform: "scaleX(0)", // Oculto inicialmente
                  transformOrigin: "left",
                  transition: "transform 0.3s ease-in-out", // Animación suave
                },
                "&:hover::after": {
                  transform: "scaleX(1)", // Se expande en hover
                },
              }}
            >
              ¿Industria 4.0?
            </Button>

            <Button variant="outlined" sx={{ color: 'white', textTransform: 'none', borderColor: 'white' }}>
              Iniciar Sesión
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
