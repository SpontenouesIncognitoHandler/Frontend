import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "./../Assets/Logo.png";
import AvatarIcon from "./../Assets/Avatar.png";
import Banner from "./../Assets/Banner.png";
import CI1 from "./../Assets/CI1.png";
import CI2 from "./../Assets/CI2.png";
import { Link } from "react-router-dom";
import { Card, Grid } from "@mui/material";
import "./../Commons/Style.css";
import CodeIcon from "./../Assets/CodeIcon.jpg";

const pages = [];
const settings = ["Register", "Login"];

function Home() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const paddingValues = screenWidth < 968 ? "20% 3% 3% 3%" : "7% 3% 3% 3%";

  return (
    <div style={{ width: "auto" }}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#f8f9fa", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} style={{ width: "40%" }} />
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src={Logo} style={{ width: "30%" }} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <div style={{ display: "flex" }}>
                {settings.map((setting) => (
                  <Button
                    key={setting}
                    component={Link}
                    to={setting === "Register" ? "./signup" : "./login"}
                    style={{
                      color: "black",
                      borderRadius: "10px",
                      border: "1px solid #f75733",
                      fontSize: "13px",
                      margin: "3px",
                    }}
                  >
                    {setting}
                  </Button>
                ))}
              </div>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid
        container
        spacing={2}
        style={{
          padding: paddingValues,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6} style={{ padding: "3%" }}>
          <div className="typewriter" style={{ fontWeight: "normal" }}>
            <h2 style={{ color: "#f75733" }}>
              Unlock{" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Server Insights
              </a>
            </h2>
          </div>
          <p style={{ textAlign: "justify", paddingTop: "1%" }}>
            Empower your organization with our cutting-edge log management
            solution, the <b>Guardian of Governance</b>. Monitor server logs
            seamlessly, receive instant notifications for critical events, and
            optimize performance with insightful data visualization. Our robust
            system ensures data integrity and scalability, delivering peace of
            mind in the face of disasters.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: "3%", textAlign: "center" }}
        >
          <img
            src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt0ee60d54428ec0b2/614b1cea69b7947c1b3ae7c5/illustration-logstash-white-bg-608x404.png"
            style={{ width: "80%" }}
          />
        </Grid>
      </Grid>
      <h2 style={{ textAlign: "center", color: "#f75733" }}>
        Log Analysis, Security Alerting & Recovery Optimization
      </h2>
      <Grid
        container
        spacing={2}
        style={{
          padding: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={4} style={{ padding: "2%" }}>
          <p>
            Unlock server security insights with automated log analysis and
            visualization.
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            padding: "2%",
            borderLeft: "1px solid #dfdfdf",
            borderRight: "1px solid #dfdfdf",
          }}
        >
          <p>
            Integrate log monitoring, alerts, and recovery for disaster
            mitigation.
          </p>
        </Grid>
        <Grid item xs={12} md={4} style={{ padding: "2%" }}>
          <p>
            Elevate e-governance with tailor-made log intelligence and
            scalability.
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          padding: "3%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{ padding: "3%", textAlign: "center" }}
        >
          <img
            src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt5939ba2e40ba0790/5d0d59d096d2d1b65a98422c/diagram-logstash-inputs.svg"
            style={{ width: "80%" }}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "3%" }}>
          <div className="typewriter" style={{ fontWeight: "normal" }}>
            <h2 style={{ color: "#f75733" }}>
              Key{" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Features
              </a>
            </h2>
          </div>
          <p style={{ textAlign: "justify", paddingTop: "1%" }}>
            Our advanced log analysis solution offers a comprehensive suite of
            tools designed to enhance system performance and reliability. It
            combines powerful search, filtering, and querying capabilities for
            deep insights into system behavior, with intelligent alerting for
            real-time notifications on critical events.
            <ul>
              <li style={{ paddingTop: "1%" }}>Advanced Log Analysis</li>
              <li style={{ paddingTop: "1%" }}>Intelligent Alerting</li>
              <li style={{ paddingTop: "1%" }}>Visualization and Reporting</li>
              <li style={{ paddingTop: "1%" }}>Seamless Integration</li>
              <li style={{ paddingTop: "1%" }}>
                Robust Backup and Disaster Recovery
              </li>
            </ul>
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{ padding: "3%", textAlign: "center" }}
        >
          <h2 style={{ color: "#f75733" }}>Dashboard Insights</h2>
          <p>
            With a focus on user-friendly interfaces, our dashboard provides
            real-time visualization of key metrics from diverse data sources,
            ensuring an intuitive and efficient analysis platform that
            simplifies complex data interpretation and enhances decision-making
            processes.
          </p>
          <br />
          <br />
          <img
            src="https://images.klipfolio.com/website/public/5a275fee-d42b-4f31-91f6-8148d4d729af/executive dashboard.png"
            style={{ width: "70%" }}
          />
          <br />
          <br />
        </Grid>
      </Grid>
      <br/>
      <Grid
        container
        spacing={2}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          style={{ padding: "3%", textAlign: "center" }}
        >
          <div className="typewriter" style={{ fontWeight: "normal" }}>
            <h2 style={{ color: "#f75733" }}>
              Primary{" "}
              <a href="#" style={{ textDecoration: "none", color: "black" }}>
                Tech Stacks
              </a>
            </h2>
          </div>
          <img src={CodeIcon} style={{ width: "70%" }} />
        </Grid>
      </Grid>
      <div
        style={{
          padding: "2%",
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>© 2023. console_log. All Rights Reserved</p>
      </div>
    </div>
  );
}
export default Home;
