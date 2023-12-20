import React, { useEffect, useState } from "react";
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
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableHead,
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
import axios from "axios";

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

const MySyslogIdentifierChart = ({ data }) => (
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
        color: "rgba(144, 238, 144, 0.7)",
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
          id: "systemd",
        },
        id: "dots",
      },
      {
        match: {
          id: "(AppImage)",
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

function Dashboard(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorCount, setErrorCount] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const [infoCount, setInfoCount] = useState(0);
  const [systemdCount, setSystemdCount] = useState(0);
  const [appimageCount, setAppimageCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchData = () => {
    axios
      .get("https://e74a-14-139-208-67.ngrok-free.app/api/linux/", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        const jsonData = response.data.data;
        const parsedLogs = jsonData.map((jsonString) => JSON.parse(jsonString));

        let errorCount = 0;
        let warningCount = 0;
        let infoCount = 0;

        parsedLogs.forEach((log) => {
          const priority = log.PRIORITY;
          if (priority >= 0 && priority <= 3) {
            errorCount++;
          } else if (priority == 4) {
            warningCount++;
          } else if (priority >= 5 && priority <= 7) {
            infoCount++;
          }
        });

        setErrorCount(errorCount);
        setWarningCount(warningCount);
        setInfoCount(infoCount);

        let systemdC = 0;
        let appimageC = 0;

        parsedLogs.forEach((log) => {
          const logIdentifier = log.SYSLOG_IDENTIFIER;
          if (logIdentifier == "systemd") {
            systemdC++;
          } else {
            appimageC++;
          }
        });

        setSystemdCount(systemdC);
        setAppimageCount(appimageC);

        // console.log(parsedLogs);
        setLogs(parsedLogs);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const logTypesChartData = [
    {
      id: "info",
      label: "Info",
      value: infoCount,
      color: "hsl(210, 70%, 50%)",
    },
    {
      id: "warning",
      label: "Warning",
      value: warningCount,
      color: "hsl(40, 70%, 50%)",
    },
    {
      id: "error",
      label: "Error",
      value: errorCount,
      color: "hsl(0, 70%, 50%)",
    },
  ];

  const systemIdentifierChartData = [
    {
      id: "systemd",
      label: "systemd",
      value: systemdCount,
      color: "hsl(210, 70%, 50%)",
    },
    {
      id: "(AppImage)",
      label: "(AppImage)",
      value: appimageCount,
      color: "hsl(40, 70%, 50%)",
    },
  ];

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
    console.log(chartElement);
    if (chartElement) {
      const svg = chartElement.querySelector("svg");
      console.log(svg);
      if (svg) {
        const serializer = new XMLSerializer();
        let source = serializer.serializeToString(svg);
        if (
          !source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)
        ) {
          source = source.replace(
            /^<svg/,
            '<svg xmlns="http://www.w3.org/2000/svg"'
          );
        }
        if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
          source = source.replace(
            /^<svg/,
            '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
          );
        }
        source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
        const url =
          "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
        const link = document.createElement("a");
        link.download = `${chartId}.svg`;
        link.href = url;
        link.click();
      }
    }
  };

  const convertToTimestamp = (datetimeStr) => {
    
    return {
      date: new Date(datetimeStr/1000).toLocaleDateString("en-US"),
      time: new Date(datetimeStr/1000).toLocaleTimeString("en-US"),
    };
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const getColorByPriority = (priority) => {
    if (priority >= 5) {
      return "#beebca";
    } else if (priority == 4) {
      return "#feed79";
    } else if (priority <= 3) {
      return "#ffb1ce";
    }
    return "";
  };

  const widthValues = screenWidth < 968 ? "80%" : "95%";

  return (
    <div style={{ width: widthValues }}>
      <div style={{ display: "flex", height: "auto" }}>
        <Sidebar collapsed={!collapsed} style={{ height: "auto" }}>
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
          <Grid item xs={12} sm={6} md={6}>
            <Kpi title="Total Logs" value="30" description="This Month" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Kpi title="CPU Usage" value="23.7% ￪" description="This Month" />
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
              id="system-identifier-chart"
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
                  System Identifier Chart
                </Typography>
                <div>
                  <IconButton
                    color="#f75733"
                    onClick={() =>
                      handleDownloadClick("system-identifier-chart")
                    }
                  >
                    <DownloadIcon />
                  </IconButton>
                  <IconButton
                    color="#f75733"
                    onClick={() =>
                      handleFullScreenClick("system-identifier-chart")
                    }
                  >
                    {isFullScreen ? <CloseIcon /> : <FullscreenIcon />}
                  </IconButton>
                </div>
              </CardContent>
              <div style={{ height: "400px" }}>
                <MySyslogIdentifierChart data={systemIdentifierChartData} />
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <br />
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <TableContainer component={Paper}>
                <Table
                  aria-label="simple table"
                  style={{ border: "1px solid #f5f5f5" }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Log ID</TableCell>
                      <TableCell align="right">Message ID</TableCell>
                      <TableCell align="right">Date</TableCell>
                      <TableCell align="right">Time</TableCell>
                      <TableCell align="right">Priority</TableCell>
                      <TableCell align="right">Syslog Identifier</TableCell>
                      <TableCell align="right">Message</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {logs.map((log, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        style={{ background: getColorByPriority(log.PRIORITY) }}
                      >
                        <TableCell component="th" scope="row">
                          {log._PID}
                        </TableCell>
                        <TableCell align="right">{log.MESSAGE_ID}</TableCell>
                        <TableCell align="right">
                          {
                            convertToTimestamp(log._SOURCE_REALTIME_TIMESTAMP)
                              .date
                          }
                        </TableCell>
                        <TableCell align="right">
                          {
                            convertToTimestamp(log._SOURCE_REALTIME_TIMESTAMP)
                              .time
                          }
                        </TableCell>
                        <TableCell align="right">{log.PRIORITY}</TableCell>
                        <TableCell align="right">
                          {log.SYSLOG_IDENTIFIER}
                        </TableCell>
                        <TableCell align="right">{log.MESSAGE}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            <br />
          </Grid>
        </Grid>
        <br />
      </div>
    </div>
  );
}

export default Dashboard;
