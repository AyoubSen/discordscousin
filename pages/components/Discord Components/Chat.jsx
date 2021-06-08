import { Grid, Flex, Box } from "@chakra-ui/react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
function Chat({
  currentChannel,
  channels,
  messages,
  sendMessages,
  setInput,
  input,
  users,
}) {
  return (
    <Grid color='white' templateRows='auto 70px'>
      <Messages
        currentChannel={currentChannel}
        channels={channels}
        messages={messages}
        users={users}
      />
      <MessageInput
        sendMessages={sendMessages}
        setInput={setInput}
        input={input}
      />
    </Grid>
  );
}

export default Chat;
