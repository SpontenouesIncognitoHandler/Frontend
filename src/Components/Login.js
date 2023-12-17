import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");

  async function register_user(e) {
    e.preventDefault();
    let data = {
      username: username,
      organization: organization,
      password: password,
    };
    console.log(data);
  }

  return (
    <div className="login-container">
      <div style={{ padding: "2%" }}>
        <center>
          <Card
            sx={{ maxWidth: 500 }}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5rem",
              padding: "2%",
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ marginBottoms: "0", fontWeight: "bold" }}
              >
                Login Here
              </Typography>
              <p style={{ marginTop: "0" }}>
                Please Fill The Requirements Below to
                <br />
                Move Forward
              </p>
              <br />
              <form onSubmit={register_user}>
                <Typography variant="body2" color="text.secondary">
                  <Grid container spacing={1} style={{ marginTop: "0.5%" }}>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Username"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          e.preventDefault();
                          setUsername(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Organization"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          e.preventDefault();
                          setOrganization(e.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} style={{ marginTop: "0.5%" }}>
                    <Grid item xs={12}>
                      <center>
                        <TextField
                          required
                          fullWidth
                          id="outlined-basic"
                          label="Password"
                          type="password"
                          variant="outlined"
                          size="small"
                          onChange={(e) => {
                            e.preventDefault();
                            setPassword(e.target.value);
                          }}
                        />
                      </center>
                    </Grid>
                  </Grid>
                  <br />
                  <br />
                  <br />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    style={{ backgroundColor: "#f75733", width: "50%" }}
                  >
                    Continue
                  </Button>
                </Typography>
              </form>
            </CardContent>
          </Card>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
