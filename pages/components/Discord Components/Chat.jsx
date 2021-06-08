import { Grid } from "@chakra-ui/react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
function Chat({ messages, sendMessages, setInput, input, users }) {
  return (
    <Grid color='white' templateRows='auto 70px'>
      <Messages messages={messages} users={users} />
      <MessageInput
        sendMessages={sendMessages}
        setInput={setInput}
        input={input}
      />
    </Grid>
  );
}

export default Chat;
