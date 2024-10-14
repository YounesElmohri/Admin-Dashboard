import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import Pie from "./pie";
import Header from "../../components/Header";

export default function Piechart() {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </Box>
  );
}
