import { Grid } from "@chakra-ui/react";
import Chat from "./Chat";
import Online from "./Online";

function ChatOnline({ messages, sendMessages, setInput, input, users }) {
  return (
    <Grid templateColumns='888px auto'>
      <Chat
        messages={messages}
        sendMessages={sendMessages}
        setInput={setInput}
        input={input}
        users={users}
      />
      <Online users={users} />
    </Grid>
  );
}

export default ChatOnline;
