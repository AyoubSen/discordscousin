import { Flex, Input, Button } from "@chakra-ui/react";
function MessageInput({ sendMessages, setInput, input }) {
  return (
    <Flex justifyContent='center'>
      <form>
        <Input
          bg='#40444B'
          w='50rem'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Message in...'
          border='none'
          color='white'
          height='44px'
          _focus={{ outline: "none" }}
        />
        <Button type='submit' onClick={sendMessages} display='none'></Button>
      </form>
    </Flex>
  );
}

export default MessageInput;
