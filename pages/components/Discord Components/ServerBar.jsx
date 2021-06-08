import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import HomeIcon from "./ServerBarComps/HomeIcon";
import db from "../../../firebase";

function ServerBar(props) {
  const [servers, setServers] = useState([]);
  useEffect(() => {
    db.collection("Servers").onSnapshot((snapshot) => {
      setServers(
        snapshot.docs.map((doc) => ({
          server: doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);
  return (
    <Flex alignItems='center' bg='#202225' flexDirection='column'>
      <HomeIcon
        tooltip='Home'
        href='/Channels/Me'
        pic='https://i.ibb.co/ckM8Sgk/pngaaa-com-112194.png'
        type='1'
        server={props.type}
      />
      {servers.map(({ server, id }) => {
        return (
          <HomeIcon
            tooltip={server.Name}
            image={server.Picture}
            href={"/Channels/" + id}
            type='2'
            server={props.type}
          />
        );
      })}
    </Flex>
  );
}

export default ServerBar;
