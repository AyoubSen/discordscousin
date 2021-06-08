import { Flex, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

function SearchInput(props) {
  const router = useRouter();
  let servId = router.query.id;
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      boxShadow='0 1px 10px #222427'
    >
      {servId ? (
        <Text color='white' fontWeight='bold'>
          {props.serverName}
        </Text>
      ) : (
        <Input
          bg='#202225'
          placeholder='Find or start conversation'
          outline='none'
          border='none'
          w='220px'
          h='30px'
          color='white'
        />
      )}
    </Flex>
  );
}

export default SearchInput;
