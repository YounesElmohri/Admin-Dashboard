import { Avatar, Divider,  IconButton, ListItemButton, ListItemIcon, ListItemText, styled, useTheme, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MuiDrawer from '@mui/material/Drawer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon  from "@mui/icons-material/CalendarTodayOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import BarChartOutlined  from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon  from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon  from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
// @ts-ignore
import photoAdmin from '../assets/images/Younes.jpg';
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      variants: [
        {
          props: ({ open }) => open,
          style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          },
        },
        {
          props: ({ open }) => !open,
          style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          },
        },
      ],
    }),
);

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Array1 = [
  {text: 'Dashboard', icon: <HomeOutlinedIcon />, path: "/" },
  {text: 'Manage Team', icon: <PeopleOutlinedIcon />, path: "/team" },
  {text: 'Contacts Information', icon: <ContactsOutlinedIcon />, path: "/contacts" },
  {text: 'Invoices Balances', icon: <ReceiptOutlinedIcon />, path: "/invoices" },
];

const Array2 = [
  {text: 'Profile Form', icon: <PersonOutlinedIcon />, path: "/form" },
  {text: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  {text: 'FAQ Page', icon: <HelpCenterOutlinedIcon />, path: "/faq" },
];

const Array3 = [
  {text: 'Bar Chart', icon: <BarChartOutlined />, path: "/bar" },
  {text: 'Pie Chart', icon: <PieChartOutlinedIcon />, path: "/pie" },
  {text: 'Line Chart', icon: <TimelineOutlinedIcon />, path: "/line" },
  {text: 'Geography Chart', icon: <MapOutlinedIcon />, path: "/geography" },
];

// eslint-disable-next-line react/prop-types
export default function SideBar({open, handleDrawerClose}) {
    const theme = useTheme();
    const navigate = useNavigate();
    let location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />


        <Avatar sx={{mx: "auto", width: open? 88: 44, height: open? 88: 44, my: 1, border: "2px solid grey"}} alt="Remy Sharp" src={photoAdmin} />
        

        <Typography align="center" sx={{fontSize: open? 17: 0, transition: "0.25s"}} >Younes ELMOHRI</Typography>
        <Typography align="center"  sx={{fontSize: open? 15:0, transition: "0.25s", color : theme.palette.info.main}}>Admin</Typography>

        <List>
          {Array1.map((item) => (
            <ListItem key={item.key} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: open? "initial": "center",
                    bgcolor: item.path === location.pathname ? theme.palette.mode === "dark" ? grey[800] : grey[100] : null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.key} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: open? "initial": "center",
                    bgcolor: item.path === location.pathname ? theme.palette.mode === "dark" ? grey[800] : grey[100] : null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array3.map((item) => (
            <ListItem key={item.key} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
              onClick={() => {
                  navigate(item.path);
                }}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                    justifyContent: open? "initial": "center",
                    bgcolor: item.path === location.pathname ? theme.palette.mode === "dark" ? grey[800] : grey[100] : null
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
  )
}
