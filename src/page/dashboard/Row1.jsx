import { Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <EmailIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
          <Typography variant="h5" component="div">
            12,361
          </Typography>
          <Typography color="text.secondary">
            Emails Sent
          </Typography>
          <Typography variant="body2">
            +14%
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <PointOfSaleIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
          <Typography variant="h5" component="div">
            431,225
          </Typography>
          <Typography color="text.secondary">
            Sales obtained
          </Typography>
          <Typography variant="body2">
            +21%
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <PersonAddIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
          <Typography variant="h5" component="div">
            32,441
          </Typography>
          <Typography color="text.secondary">
            New Clients
          </Typography>
          <Typography variant="body2">
            +5%
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TrafficIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
          <Typography variant="h5" component="div">
            1,325,134
          </Typography>
          <Typography color="text.secondary">
            Traffic Received
          </Typography>
          <Typography variant="body2">
            +43%
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
