import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(10),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  TextField: {
    width: "25ch",
    marginBottom: "1em",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.body}>
          <div className={classes.container}>
            <Paper elevation={3}>
              <h1>Login Form</h1>
              <form noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  className={classes.TextField}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="Password"
                  variant="outlined"
                  className={classes.TextField}
                />
              </form>
              <Button variant="outlined" color="primary">
                Login
              </Button>
            </Paper>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
