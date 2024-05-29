import LanguageIcon from "@mui/icons-material/Language";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundedIcon from "@mui/icons-material/NightlightRounded";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { COLOR } from "../constants";
import {
  getUserLanguage,
  languages,
  setUserLanguage,
} from "./../utils/language";

const Navbar = (props) => {
  const [langMenu, setLangMenu] = useState(null);
  const userLanguage = getUserLanguage();

  useEffect(() => {
    const body = document.querySelector("body");

    if (props.darkMode) {
      // dark
      body.style.backgroundColor = COLOR.DARK;
      body.style.color = COLOR.LIGHT;
    } else {
      // light
      body.style.backgroundColor = COLOR.LIGHT;
      body.style.color = COLOR.DARK;
    }
  }, [props.darkMode]);

  const handleOpenLangMenu = (event) => {
    setLangMenu(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setLangMenu(null);
  };

  const handleLanguage = (lang) => {
    setUserLanguage(lang);
    location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 2rem",
        }}
      >
        <Box>
          <h2>{props.projectLabel}</h2>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <IconButton onClick={props.handleTheme}>
              {props.darkMode ? (
                <LightModeRoundedIcon />
              ) : (
                <NightlightRoundedIcon />
              )}
            </IconButton>
          </Box>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenLangMenu}>
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={langMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(langMenu)}
              onClose={handleCloseLangMenu}
            >
              {languages.map(
                (language) =>
                  language.value !== userLanguage && (
                    <MenuItem
                      key={language.value}
                      onClick={() => handleLanguage(language.value)}
                    >
                      <Typography textAlign="center">
                        {language.label}
                      </Typography>
                    </MenuItem>
                  )
              )}
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
