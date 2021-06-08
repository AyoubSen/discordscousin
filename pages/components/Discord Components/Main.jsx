import { Grid, Image, Flex, Text } from "@chakra-ui/react";
import Header from "../MeMainComps/Header";
import { useRouter } from "next/router";
import ChatOnline from "./ChatOnline";
function Main({
  currentChannel,
  channels,
  messages,
  sendMessages,
  setInput,
  input,
  users,
}) {
  const router = useRouter();
  let servId = router.query.id;
  return (
    <Grid bg='#36393F' templateRows='48px auto'>
      <Header currentChannel={currentChannel} channels={channels} />
      {servId ? (
        <ChatOnline
          currentChannel={currentChannel}
          channels={channels}
          messages={messages}
          sendMessages={sendMessages}
          setInput={setInput}
          input={input}
          users={users}
        />
      ) : (
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Image src='https://svgshare.com/i/Xji.svg' w='500px' />
          <Text color='#72767D'>Oops.. seems like you have no friends</Text>
        </Flex>
      )}
    </Grid>
  );
}

export default Main;
