import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./componets/Login";
import Home from "./componets/Home";
import Verify from "./componets/Verify";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" sx={{ flex: 1 }}>
            Page Title
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor:'red',
              color:'white'
            }}
          >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/verify" component={Verify} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
