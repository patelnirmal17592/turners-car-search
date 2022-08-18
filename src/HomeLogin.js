import { useState, forwardRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500, 
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px", 
  boxShadow: 24,
  p: 4,
  display: "flex", 
  justifyContent: "space-around", 
};

const theme = createTheme({
  overrides: {
  MuiButton: {
    root: {backgroundColor:"#F91C85"}
  },
}
});

function LoginModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  
  const [loggedInUser, setLoggedInUser] = useState({});
  const [backDropOpen, setBackDropOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  // ---------------- MUI ALERT ---------------- //

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // ---------------- HANDLER FUNCTIONS ---------------- //

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleSnackClose = () => setSnackOpen(false);

  // ---------------- CLIENT HANDLER FUNCTION ---------------- //

  const handleClientEmailChange = (event) => {
    setClientEmail(event.target.value);

    setLoggedInUser({
      password: clientPassword,
      email: event.target.value,
    });
  };
 
  const handleClientPasswordChange = (event) => {
    setClientPassword(event.target.value);
    setLoggedInUser({ password: event.target.value, email: clientEmail });
  };


  // ---------------- CLIENT LOG IN BUTTON HANDLER FUNCTION ---------------- //

  const handleLogin = (e) => {
    if (e.target.name === "student") {
  fetch(`http://localhost:4000/loginClient`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(
    { 
      email: clientEmail,
      password: clientPassword,
      type: "client" }
  ),
})
.then(response => response.json())
.then(result => {
  if (result.length === 0) {
    console.log("Incorrect credentials");
    
  } else {
    console.log("You're logged in");
  }
})

    
.then(response => response.json())
.then(result => {
  if (result.length === 0) {
    console.log("Incorrect credentials");
    
  } else {
    console.log("You're logged in");
  
  } 
})

      console.log(loggedInUser);
    }
    setBackDropOpen(true);
    setTimeout(() => {
    setBackDropOpen(false);
    setSnackOpen(true);
    setModalOpen(false);
    }, 2000); 
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}>
      <button id="login-navbar"
      variant="outlined" onClick={handleModalOpen} 
      sx={{
        paddingRight: "5px"
        }}>
            LOGIN
      </button>

      <ThemeProvider theme={theme}>
        <Modal open={modalOpen} onClose={handleModalClose}>

          <Box sx={style}>
            <Stack spacing={2}>
              
              <img style={{height: "60px", width: "200px"}} 
              src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png" 
              alt="Turners Cars Login"/>
              
              <Typography 
                sx={{ 
                    fontFamily: "Nunito",
                    color: "#0076be"
                 }} 
                variant="h6"
                fontSize="35px"
                textAlign="center">Customer</Typography>

              <Typography
                sx={{ 
                    fontFamily: "Nunito",
                    color: "#0076be"
                 }}  
                variant="h6"
                fontSize="20px"
                textAlign="center"
                textDecoration="underline">Login</Typography>

              <TextField
                label="Email address"
                variant="outlined"
                size="small"
                sx={{ m: 1 }}
                onChange={handleClientEmailChange}
                name="email"
              />
              <TextField
                label="Password"
                variant="outlined"
                size="small"
                type="password"
                sx={{ m: 1 }}
                onChange={handleClientPasswordChange}
                name="password"
              />
              <Button
                style={{
                  backgroundColor: "#b71234"}}
                name="student"
                onClick={handleLogin}
                variant="contained"
                >
                Login
              </Button>

            </Stack>
          
            <Backdrop open={backDropOpen}>
              <CircularProgress />
            </Backdrop>
          </Box>
        </Modal>
      </ThemeProvider>
      <Snackbar
        open={snackOpen}
        autoHideDuration={5000}
        onClose={handleSnackClose}
      >
        <Alert
          onClose={handleSnackClose}
          severity="success"
          sx={{ width: "100%", backgroundColor: "#b71234" }}
        >
          Nice to see you, {loggedInUser.email}!
        </Alert>
      </Snackbar>
    </div>
  );
}
export default LoginModal;