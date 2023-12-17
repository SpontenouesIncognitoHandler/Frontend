import * as React from "react";
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

const pages = [];
const settings = ["Register", "Login"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <div>
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
              <img src={Logo} style={{ width: "30%" }} />
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
              <Tooltip title="">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={AvatarIcon}
                    style={{ width: "90%", height: "90%" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Button
                      key={setting}
                      component={Link}
                      to={setting === "Register" ? "./signup" : "./login"}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        textDecoration: "none",
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      {setting}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <br />
      <br />
      <br />
      <img src={Banner} style={{ width: "100%" }} />
      <div
        style={{
          backgroundColor: "#fff8ed",
          textAlign: "justify",
          padding: "4%",
        }}
      >
        <h2 style={{ color: "#213279" }}>WHAT’S OUR IDEA?</h2>
        <p>
          Our project aims to establish a log server for isolated storage and
          efficient log retrieval. We plan to utilize a high-performance
          database as a queue cache for rapid and scalable log retrieval,
          alongside a separate database for short-term storage. An independent
          server will employ clustering to filter out non-critical logs when
          specific log levels are unavailable. A classification algorithm will
          assess log severity, trigger notifications and identify
          vulnerabilities. Each system will host a Dockerized server agent,
          granting access to the logs, which will then be transmitted to the
          central server. Finally, the dashboard will provide authorized users
          with secure token-based access, ensuring robust data security and
          include a backup database to safeguard data integrity and longevity.
        </p>
      </div>
      <br />
      <br />
      <Grid
        container
        spacing={2}
        style={{
          padding: "4%",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="home-container"
      >
        <Grid item md={5} style={{ padding: "2%" }}>
          <br />
          <iframe
            title="YouTube Video"
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/GOK1LZLIx5M"
            frameborder="0"
            allowfullscreen
            style={{ borderRadius: "20px", borderBottom: "5px solid #f75733" }}
          ></iframe>
        </Grid>
        <Grid item md={7} style={{ padding: "3%", textAlign: "justify" }}>
          <Typography>
            <h4 style={{ color: "#f75733" }}>
              WHAT’S OUR PROBLEM IN SMART INDIA HACKATHON 2023
            </h4>
            Establishing a server log system for E-governance with appropriate
            notification and content-based classification of log for AICTE.
            <Grid container spacing={2} style={{ marginTop: "2%" }}>
              <Grid item md={6}>
                <Card
                  style={{
                    border: "1px solid #f75733",
                    borderRadius: "20px",
                    backgroundColor: "#fff8ed",
                    textAlign: "justify",
                    padding: "3%",
                    fontSize: "11.5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h4 style={{ color: "#213279", fontSize: "15px" }}>
                      PRIMARY STACK
                    </h4>
                    <img src={CI1} style={{ width: "12%" }} />
                  </div>
                  <p>
                    Our frontend is powered by ReactJS and Chart JS, while the
                    backend handles real-time data I/O through a Golang server,
                    caching with Redis or SQS, short-term data storage with RDS,
                    and backup data storage with S3. Additionally, our backend's
                    dashboard API is driven by a Flask server, with user data
                    stored in MySQL.
                  </p>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card
                  style={{
                    border: "1px solid #f75733",
                    borderRadius: "20px",
                    backgroundColor: "#fff8ed",
                    textAlign: "justify",
                    padding: "3%",
                    fontSize: "11.5px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h4 style={{ color: "#213279", fontSize: "15px" }}>
                      SECONDARY STACK
                    </h4>
                    <img src={CI2} style={{ width: "12%" }} />
                  </div>
                  <p>
                    For log analysis and notification, our stack includes Log
                    Bert, Numpy/Pandas, NLTK, Sendgrid for email notifications,
                    and Elasticsearch for efficient log storage and retrieval.
                    In addition, our server agent is built using Bash and Docker
                    for containerization, and we use JWT or OIDC for secure
                    authentication and authorization.
                  </p>
                </Card>
              </Grid>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "black", color: "white", padding: "2%" }}>
        <center>© 2023-24 console_log. All rights reserved</center>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;
