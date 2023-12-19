import React, { useState } from "react";
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
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Kpi from "../Commons/Kpi";
import { ResponsivePie } from "@nivo/pie";
import { ResponsiveLine } from "@nivo/line";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";

const logTypesChartData = [
  {
    id: "info",
    label: "Info",
    value: 120,
    color: "hsl(210, 70%, 50%)",
  },
  {
    id: "warning",
    label: "Warning",
    value: 80,
    color: "hsl(40, 70%, 50%)",
  },
  {
    id: "error",
    label: "Error",
    value: 90,
    color: "hsl(0, 70%, 50%)",
  },
  {
    id: "debug",
    label: "Debug",
    value: 100,
    color: "hsl(120, 70%, 50%)",
  },
  {
    id: "fatal",
    label: "Fatal",
    value: 30,
    color: "hsl(300, 70%, 50%)",
  },
];

const MyLogTypesChart = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "info",
        },
        id: "dots",
      },
      {
        match: {
          id: "warning",
        },
        id: "dots",
      },
      {
        match: {
          id: "error",
        },
        id: "lines",
      },
      {
        match: {
          id: "debug",
        },
        id: "dots",
      },
      {
        match: {
          id: "fatal",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

const cpuUsageData = [
  {
    id: "Week 1",
    color: "hsl(24, 70%, 50%)",
    data: [
      { x: "Monday", y: 70 },
      { x: "Tuesday", y: 65 },
      { x: "Wednesday", y: 75 },
      { x: "Thursday", y: 60 },
      { x: "Friday", y: 80 },
      { x: "Saturday", y: 85 },
      { x: "Sunday", y: 55 },
    ],
  },
  {
    id: "Week 2",
    color: "hsl(120, 70%, 50%)",
    data: [
      { x: "Monday", y: 60 },
      { x: "Tuesday", y: 55 },
      { x: "Wednesday", y: 65 },
      { x: "Thursday", y: 70 },
      { x: "Friday", y: 75 },
      { x: "Saturday", y: 80 },
      { x: "Sunday", y: 85 },
    ],
  },
];

const MyCpuUsageLine = ({ data }) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Day of the Week",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "CPU Usage (%)",
      legendOffset: -50,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

function Manage(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreenClick = (chartId) => {
    const chartElement = document.getElementById(chartId);

    if (chartElement) {
      if (!isFullScreen) {
        if (chartElement.requestFullscreen) {
          chartElement.requestFullscreen();
        } else if (chartElement.mozRequestFullScreen) {
          chartElement.mozRequestFullScreen();
        } else if (chartElement.webkitRequestFullscreen) {
          chartElement.webkitRequestFullscreen();
        } else if (chartElement.msRequestFullscreen) {
          chartElement.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }

      setIsFullScreen(!isFullScreen);
    }
  };
  const handleDownloadClick = (chartId) => {
    const chartElement = document.getElementById(chartId);
    if (chartElement) {
      const canvas = chartElement.querySelector("canvas");
      if (canvas) {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = `${chartId}.png`;
        link.href = image;
        link.click();
      }
    }
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar collapsed={collapsed}>
          <Menu style={{ marginTop: "30px" }}>
            <MenuItem>
              <List>
                <ListItem button onClick={toggleSidebar}>
                  <ListItemIcon>
                    <MenuIcon />
                  </ListItemIcon>
                  <ListItemText primary="Collapse" />
                </ListItem>
              </List>
            </MenuItem>
            <MenuItem component={<Link to="/dashboard" />}>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </List>
            </MenuItem>
          </Menu>
        </Sidebar>

        <Grid
          container
          spacing={1.5}
          justifyContent="center"
          style={{ padding: "4%" }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Kpi title="Total Logs" value="10,000" description="This Month" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Kpi title="CPU Usage" value="20% ￪" description="This Month" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Kpi title="Server Load" value="10% ￪" description="This Month" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Kpi title="Memory Usage" value="5% ￪" description="This Month" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              sx={{
                minWidth: 275,
                marginBottom: "24px",
                boxShadow: "none",
                border: "1px solid #f5f5f5",
              }}
              id="log-types-chart"
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
                  Log Types Chart
                </Typography>
                <div>
                  <IconButton
                    color="#f75733"
                    onClick={() => handleDownloadClick("log-types-chart")}
                  >
                    <DownloadIcon />
                  </IconButton>
                  <IconButton
                    color="#f75733"
                    onClick={() => handleFullScreenClick("log-types-chart")}
                  >
                    {isFullScreen ? <CloseIcon /> : <FullscreenIcon />}
                  </IconButton>
                </div>
              </CardContent>
              <div style={{ height: "400px" }}>
                <MyLogTypesChart data={logTypesChartData} />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card
              sx={{
                minWidth: 275,
                marginBottom: "24px",
                boxShadow: "none",
                border: "1px solid #f5f5f5",
              }}
              id="cpu-usage"
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
                  Log Types Chart
                </Typography>
                <div>
                  <IconButton
                    color="#f75733"
                    onClick={() => handleDownloadClick("cpu-usage-chart")}
                  >
                    <DownloadIcon />
                  </IconButton>
                  <IconButton
                    color="#f75733"
                    onClick={() => handleFullScreenClick("cpu-usage-chart")}
                  >
                    {isFullScreen ? <CloseIcon /> : <FullscreenIcon />}
                  </IconButton>
                </div>
              </CardContent>
              <div style={{ height: "400px" }}>
                <MyCpuUsageLine data={cpuUsageData} />
              </div>
            </Card>
          </Grid>
        </Grid>
        <br />
      </div>
    </div>
  );
}

export default Manage;
