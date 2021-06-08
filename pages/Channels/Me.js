import { Grid } from "@chakra-ui/react";
import Head from "next/head";
import ServerBar from "../components/Discord Components/ServerBar";
import ChannelBar from "../components/Discord Components/ChannelBar";
import Main from "../components/Discord Components/Main";
function Me() {
  return (
    <>
      <Head>
        <title>Discord | Me</title>
        <meta name='description' content='Generated by create next app' />
        <link
          rel='icon'
          href='https://japaniste.fr/wp-content/uploads/2019/12/discord-logo-logodownload-download-logotipos-1.png'
        />
      </Head>
      <Grid h='100vh' templateColumns='72px 240px auto'>
        <ServerBar type='home' />
        <ChannelBar />
        <Main />
      </Grid>
    </>
  );
}

export default Me;
