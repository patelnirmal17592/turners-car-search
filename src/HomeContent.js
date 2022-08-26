import React from "react";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Cars from "./Cars.jpg";
import Footer from "./HomeFooter";
import { FindACar } from "./components/findACar/FindACar";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

function HomeContent() {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        backgroundImage: `url(${Cars})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
        width: "100%",
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          fontFamily: "Nunito",
          color: "#FFFFFF",
          paddingTop: "100px",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        <strong>
          New Zealand's{" "}
          <span style={{ color: "#0076be" }}>
            <em>largest </em>
          </span>{" "}
          used car network for over 50 years
        </strong>
      </Typography>
      <br />
      <br />
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          fontFamily: "Nunito",
          color: "#0076be",
          paddingTop: "370px",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        <strong>Featured Vehicles</strong>
      </Typography>

      {/*  */}
      {/* ------- FEATURED VEHICLES SECTION 1 ------- */}

      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "flex",
          paddingTop: "10px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div class="container">
          <img
            id="1"
            src="/images/Car1.jpg"
            alt="Honda CRV"
            height="200px"
            width="300px"
            style={{ padding: "30px" }}
          />

          <img
            id="2"
            src="/images/Car2.jpg"
            alt="Toyota Fortuner"
            height="200px"
            width="300px"
            style={{ padding: "30px" }}
          />

          <img
            id="3"
            src="/images/Car3.jpg"
            alt="Mitsubishi Outlander"
            height="190px"
            width="290px"
            style={{ padding: "30px" }}
          />
        </div>
      </Container>

      {/* ------- FEATURED VEHICLES SECTION 2 ------- */}

      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div class="container">
          <img
            id="1"
            src="/images/Car4.jpg"
            alt="Mitsubishi Mirage"
            height="200px"
            width="300px"
            style={{ padding: "20px" }}
          />

          <img
            id="2"
            src="/images/Car5.jpg"
            alt="Mitsubishi ASX"
            height="200px"
            width="300px"
            style={{ padding: "20px" }}
          />

          <img
            id="3"
            src="/images/Car6.jpg"
            alt="Mitsubishi Triton"
            height="210px"
            width="300px"
            style={{ padding: "20px" }}
          />
        </div>
      </Container>

      {/* ---------- VEHICLE SEARCH SECTION ---------- */}

      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          fontFamily: "Nunito",
          color: "#0076be",
          paddingTop: "10px",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        <strong>Search our Vehicles</strong>
      </Typography>
      <br />
      <br />
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          display: "flex",
          paddingTop: "10px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <img
            id="coupe"
            src="/images/Coupe.jpg"
            alt="BMW 2 Coupe"
            height="100px"
            width="158px"
            label="COUPE"
            style={{ padding: "10px" }}
          />

          <img
            id="hatchback"
            src="/images/Hatchback.jpg"
            alt="Suzuki Celerio"
            height="100px"
            width="158px"
            style={{ padding: "10px" }}
          />

          <img
            id="sedan"
            src="/images/Sedan.jpg"
            alt="Honda Civic"
            height="100px"
            width="158px"
            style={{ padding: "10px" }}
          />

          <img
            id="suv"
            src="/images/SUV.jpg"
            alt="Hyundai Tucson"
            height="100px"
            width="150px"
            style={{ padding: "10px" }}
          />

          <img
            id="ute"
            src="/images/Hilux.jpg"
            alt="Toyota Hilux"
            height="90px"
            width="158px"
            style={{ padding: "10px" }}
          />

          <img
            id="van"
            src="/images/Van.jpg"
            alt="Toyota Hiace"
            height="90px"
            width="158px"
            style={{ padding: "10px" }}
          />
        </div>
      </Container>
      <br />
      <SearchBar></SearchBar>
      {/* Component exported from Nirmal's repo */}
      <FindACar></FindACar>
      <br />
      <br />

      {/* ---------- FOOTER ---------- */}
      <hr />
      <Footer />
      <Container
        disableGutters={true}
        maxWidth={false}
        sx={{
          height: "30px",
          marginTop: "20px",
          textAlign: "center",
          color: "#0076be",
          fontSize: "smaller",
        }}
      >
        <Typography>Copyright 2022 &copy; Turners Cars</Typography>
      </Container>
    </Box>
  );
}
export default HomeContent;
