import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import { HiOutlineMail } from "react-icons/hi";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import logo from "../logos/disney-hotstar-logo-dark.svg";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/material/styles";

import {
  HiHome,
  HiPhotograph,
  HiViewGrid,
  HiFilm,
  HiVideoCamera,
} from "react-icons/hi";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Badge, Tooltip } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// const pages = ['HOME', 'SEARCH', 'WATCHLIST','ORIGINAL','MOVIES','SERIES'];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#B20600" }}
        // style={{backgroundColor:"black"}}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{ marginTop: "-10px", marginRight: "50px" }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    color: "white",
                  }}
                  startIcon={<HiHome />}
                >
                  HOME
                </Button>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    color: "white",
                  }}
                  startIcon={<HiPhotograph />}
                >
                  WATCHLIST
                </Button>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    color: "white",
                  }}
                  startIcon={<HiViewGrid />}
                >
                  ORIGINAL
                </Button>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    color: "white",
                  }}
                  startIcon={<HiFilm />}
                >
                  Movies
                </Button>
              </NavLink>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    marginLeft: "10px",
                    fontSize: "12px",
                    color: "white",
                  }}
                  startIcon={<HiVideoCamera />}
                >
                  Series
                </Button>
              </NavLink>
            </Box>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
             style={{marginRight:"100px"}} />
          </Search>
                    
          <Badge color="secondary" badgeContent={99} style={{ marginLeft: "30px" }}>     
            <HiOutlineMail />
          </Badge>

          <Tooltip title="Open settings" style={{ marginLeft: "30px" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src="/images/Yasmin_Bendaas_Headshot_profile_Pic.jpg"
              />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
