import { Center, Flex, Heading, Text, Button } from "@chakra-ui/react";

function Main() {
  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      color='white'
    >
      <Heading as='h1' size='4xl'>
        A Discord Clone !
      </Heading>
      <Text w='500px' marginTop='30px'>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </Text>
      <Center marginTop='30px'>
        <Button
          margin='30px'
          color='#000'
          borderRadius='20px'
          size='lg'
          _hover={{ bg: "#23272A", color: "#fff" }}
        >
          Download for Windows
        </Button>
        <Button
          borderRadius='20px'
          bg='#23272A'
          color='#fff'
          size='lg'
          _hover={{ bg: "#fff", color: "#000" }}
        >
          Open Discord in your browser
        </Button>
      </Center>
    </Flex>
  );
}

export default Main;
