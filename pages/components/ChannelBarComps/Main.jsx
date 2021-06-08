import { Flex, Text, Icon } from "@chakra-ui/react";
import { HiHashtag } from "react-icons/hi";
import { useRouter } from "next/router";

function Main({ channels, setCurrentChannel }) {
  const router = useRouter();
  let servId = router.query.id;

  return (
    <>
      {servId ? (
        <Flex
          alignItems='center'
          marginTop='20px'
          flexDirection='column'
          bg='#2F3136'
        >
          {channels.map((channel) => {
            return (
              <Flex
                color='white'
                cursor='pointer'
                w='85%'
                alignItems='center'
                justifyContent='flex-start'
                padding='3px 10px'
                onClick={() => setCurrentChannel(channel.id)}
                _hover={{ background: "#33363C", borderRadius: "5px" }}
              >
                <Icon as={HiHashtag} color='#72767D' w={5} h={5} />
                <Text marginLeft='5px'>{channel.ChannelName}</Text>
              </Flex>
            );
          })}
        </Flex>
      ) : (
        <Flex justifyContent='center' alignItems='center'>
          <Text color='whiteAlpha.500' fontWeight='bold'>
            You Have no friends to talk to
          </Text>
        </Flex>
      )}
    </>
  );
}

export default Main;
