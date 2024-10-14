import {
  alpha,
  Box,
  IconButton,
  InputBase,
  Stack,
  styled,
  Toolbar,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

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
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// eslint-disable-next-line react/prop-types
export default function TopBar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box flexGrow={1}> </Box>

        <Stack direction="row">
          <IconButton aria-label="person" style={{ color: "white" }}>
            <Person2OutlinedIcon />
          </IconButton>

          <IconButton aria-label="notification" style={{ color: "white" }}>
            <NotificationsNoneOutlinedIcon />
          </IconButton>

          <IconButton aria-label="settings" style={{ color: "white" }}>
            <SettingsOutlinedIcon />
          </IconButton>

          {theme.palette.mode ? (
            <IconButton  onClick={() => {
              localStorage.setItem('currentMode', theme.palette.mode === 'light' ? 'dark' : 'light');
              setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));}}
              aria-label="LightModeOutlinedIcon"
              style={{ color: "white" }}
            >
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => {
              localStorage.setItem('currentMode', theme.palette.mode === 'light' ? 'dark' : 'light');
              setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));}}
              aria-label="NightlightOutlinedIcon"
              style={{ color: "white" }}
            >
              <NightlightOutlinedIcon />
            </IconButton>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
