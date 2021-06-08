import { Grid } from "@chakra-ui/react";
import Navbar from "./components/Landing Components/Navbar";
import Main from "./components/Landing Components/Main";

function Landing() {
  return (
    <Grid h='100vh' templateRows='80px auto' bg='#404EED'>
      <Navbar />
      <Main />
    </Grid>
  );
}

export default Landing;
