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
import './../Commons/Style.css';

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [telephone, setTelephone] = useState("");

  async function register_user(e) {
    e.preventDefault();
    let data = {
      firstname: fname,
      lastname: lname,
      email: email,
      organization: organization,
      password: password,
      mobile: mobile,
      telephone: telephone,
    };
    console.log(data);
  }

  return (
    <div className="signup-container">
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
                Signup Here
              </Typography>
              <p style={{ marginTop: "0" }}>
                Please Fill The Requirements Below to
                <br />
                Get Connected
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
                        label="First Name"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          e.preventDefault();
                          setFname(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          e.preventDefault();
                          setLname(e.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} style={{ marginTop: "0.5%" }}>
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
                  <Grid container spacing={1} style={{ marginTop: "0.5%" }}>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Mobile Number"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          e.preventDefault();
                          setMobile(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        id="outlined-basic"
                        label="Telephone"
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          e.preventDefault();
                          setTelephone(e.target.value);
                        }}
                      />
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
