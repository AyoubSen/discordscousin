import { Box, Grid } from "@chakra-ui/layout";
import SearchInput from "../ChannelBarComps/SearchInput";
import Main from "../ChannelBarComps/Main";
import AccountInfo from "../ChannelBarComps/AccountInfo";
import db from "../../../firebase";
import firebase from "firebase";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function ChannelBar({ serverName, channels, setCurrentChannel }) {
  return (
    <>
      <Grid bg='#2F3136' templateRows='48px auto 52px'>
        <SearchInput serverName={serverName} />
        <Main channels={channels} setCurrentChannel={setCurrentChannel} />
        <AccountInfo />
      </Grid>
    </>
  );
}

export default ChannelBar;
