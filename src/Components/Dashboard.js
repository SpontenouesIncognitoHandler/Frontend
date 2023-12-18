import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Hidden,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  CardActions,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import DownloadIcon from "@mui/icons-material/Download";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  PieController,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  PieController,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </div>
  );

  const cpuUsageData = {
    labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00"],
    datasets: [
      {
        label: "CPU Usage (%)",
        data: [20, 35, 40, 60, 80, 45, 30],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const cpuOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const incidentsChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Incidents Logged",
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: "rgba(247, 87, 51, 0.5)",
        borderColor: "#f75733",
        borderWidth: 1,
      },
    ],
  };

  const logTypesChartData = {
    labels: ["Info", "Warning", "Error", "Critical"],
    datasets: [
      {
        label: "Log Types",
        data: [300, 50, 100, 20],
        backgroundColor: ["#f75733", "#FFCE56", "#36A2EB", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div sx={{ flexGrow: 1, padding: 3 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: 2, display: { sm: "none" } }}
            style={{ backgroundColor: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <nav>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ "& .MuiDrawer-paper": { width: 240 } }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            sx={{ "& .MuiDrawer-paper": { width: 240 } }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main
        sx={{ flexGrow: 1, padding: 3 }}
        style={{ marginLeft: "20%", marginRight: "2%" }}
      >
        <Grid container spacing={2.5} style={{ marginTop: "2%" }}>
          <Grid item md={7}>
            <Card
              sx={{
                minWidth: 275,
                marginBottom: "24px",
                boxShadow: "none",
                border: "1px solid #f5f5f5",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "#f5f5f5",
                }}
              >
                <Typography variant="h7" component="h7">
                  Incidents Logged
                </Typography>
                <div>
                  <IconButton color="#f75733">
                    <DownloadIcon />
                  </IconButton>
                  <IconButton color="#f75733">
                    <FullscreenIcon />
                  </IconButton>
                </div>
              </CardContent>
              <Bar data={incidentsChartData} style={{ padding: "3%" }} />
            </Card>
          </Grid>
          <Grid item md={5}>
            <Grid item md={12}>
              <Card
                sx={{
                  minWidth: 275,
                  marginBottom: "24px",
                  boxShadow: "none",
                  border: "1px solid #f5f5f5",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#f5f5f5",
                  }}
                >
                  <Typography variant="h7" component="h7">
                    Log Type Distribution
                  </Typography>
                  <div>
                    <IconButton color="#f75733">
                      <DownloadIcon />
                    </IconButton>
                    <IconButton color="#f75733">
                      <FullscreenIcon />
                    </IconButton>
                  </div>
                </CardContent>
                <Pie data={logTypesChartData} style={{ padding: "4%" }} />
              </Card>
            </Grid>
            <Grid item md={12}>
              <Card
                sx={{
                  minWidth: 275,
                  marginBottom: "24px",
                  boxShadow: "none",
                  border: "1px solid #f5f5f5",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#f5f5f5",
                  }}
                >
                  <Typography variant="h7" component="h7">
                    CPU Usage
                  </Typography>
                  <div>
                    <IconButton color="#f75733">
                      <DownloadIcon />
                    </IconButton>
                    <IconButton color="#f75733">
                      <FullscreenIcon />
                    </IconButton>
                  </div>
                </CardContent>
                <Line
                  data={cpuUsageData}
                  options={cpuOptions}
                  style={{ padding: "3%" }}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default Dashboard;
