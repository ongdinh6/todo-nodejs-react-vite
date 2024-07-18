import React, { ReactElement } from "react";
import { Box, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Dns, KeyboardArrowDown, LogoDev, People, PermMedia, Public } from "@mui/icons-material";
import NavBar from "components/MainHeader/NavBar";
import ButtonStack from "components/MainHeader/ButtonStack";
import OutlinedButton from "components/shared/OutlinedButton";
import viteLogo from "assets/react.svg";
import styles from "App.module.css";

const data = [
  { icon: <People />, label: 'Authentication' },
  { icon: <Dns />, label: 'Database' },
  { icon: <PermMedia />, label: 'Storage' },
  { icon: <Public />, label: 'Hosting' },
];

const PageItem = () => {
  const [open, setOpen] = React.useState(false);
  return <>
    <ListItemButton
      alignItems="flex-start"
      onClick={() => setOpen(!open)}
      sx={{
        padding: 0,
      }}
    >
    <ListItemText
      primary="Pages"
      />
      <KeyboardArrowDown
      />
    </ListItemButton>
    {open &&
      data.map((item) => (
        <ListItemButton
          key={item.label}
          sx={{ py: 0, minHeight: 32, flexDirection: "column" }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
          />
        </ListItemButton>
      ))
    }
  </>;
}

const navBarItems: ReactElement[] = [
  <Typography key="home-item" component="a">Home</Typography>,
  <Typography key="home-item" component="a">Components</Typography>,
  <PageItem />,
];

const buttonStackItems: ReactElement[] = [
  <OutlinedButton variant="contained">Login</OutlinedButton>,
  <OutlinedButton variant="outlined">Register</OutlinedButton>
];

const MainHeader = () => {
  return <Box sx={{
    display: "flex"
  }}>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className={styles.logo} alt="Vite logo" />
    </a>
    <NavBar className="flex" items={navBarItems} />
    <ButtonStack className="flex" items={buttonStackItems} />
  </Box>;
}

export default MainHeader;