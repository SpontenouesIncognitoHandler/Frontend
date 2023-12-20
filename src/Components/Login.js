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
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function register_user(e) {
    e.preventDefault();
    let data = {
      role: "user",
      user_name: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://3f30-14-139-208-67.ngrok-free.app/api/v1/user/getToken",
        data
      );
      const { org_id, token, user_id, user_name } = response.data.data;
      console.log(org_id);
      console.log(token);
      console.log(user_id);
      console.log(user_name);

      localStorage.setItem("org_id", org_id);
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", user_id);
      localStorage.setItem("user_name", user_name);

      window.location.href = "/dashboard";
    } catch (error) {
      console.error(error);
    }
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
                Join From Here
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
                        label="Email"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          e.preventDefault();
                          setEmail(e.target.value);
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
