import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              backgroundColor:
                access == "Admin"
                  ? theme.palette.primary.dark
                  : access == "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
              p: "5px",
              width: "160px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined sx={{ color: "#fff" }} />
            )}
            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} />
            )}
            {access === "User" && <LockOpenOutlined sx={{ color: "#fff" }} />}
            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
