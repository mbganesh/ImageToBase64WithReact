import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div
      style={{
        backgroundColor: "#333",
        width: "100vw",
        height: "93vh",
        display: "flex",
      }}
    >
      <Card
        elevation={5}
        style={{
          display: "block",
          margin: "auto",
          width: "35%",
          backgroundColor: "pink",
        }}
      >
        <Typography style={{ textAlign: "center", padding: "3%" ,backgroundColor: "#000",color:'white' }}>
          Login Page
        </Typography>
        <form
          style={{
              padding:'2%',
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField variant="outlined" label="UserName" />
          <br />
          <TextField variant="outlined" label="Mobile Number" />
          <br />
          <Button variant="contained">SignIn</Button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
