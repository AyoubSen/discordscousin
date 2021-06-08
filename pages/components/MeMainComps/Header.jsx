import { Flex, Icon, Text, Button, Tooltip, Box } from "@chakra-ui/react";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiMessageAdd } from "react-icons/bi";
import { CgInbox } from "react-icons/cg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

function Header({ currentChannel, channels }) {
  const router = useRouter();
  let servId = router.query.id;

  const current = channels
    ? channels.find((channel) => channel.id === currentChannel)
    : null;

  return (
    <>
      <Flex
        boxShadow='0 1px 10px #222427'
        alignItems='center'
        justifyContent='space-between'
      >
        {servId ? (
          <Flex marginLeft='30px' fontWeight='bold'>
            <Text color='white'>{current ? current.ChannelName : "..."}</Text>
          </Flex>
        ) : (
          <Flex alignItems='center' marginRight='10px' marginLeft='10px'>
            <Icon
              as={BsFillPeopleFill}
              color='#72767D'
              marginRight='10px'
              w={5}
              h={5}
            />
            <Text
              color='white'
              fontWeight='bold'
              marginRight='10px'
              cursor='default'
            >
              Friends
            </Text>
            <Text fontSize='25px' color='#404348'>
              |
            </Text>
            <Button
              marginLeft='10px'
              bg='#3BA55C'
              color='white'
              h='25px'
              _hover={{ background: "#3BA55C" }}
            >
              Add a friend
            </Button>
          </Flex>
        )}

        <Flex w='200px' justifyContent='space-around'>
          <Tooltip
            label='New Group DM'
            bg='#171616'
            color='white'
            fontWeight='bold'
          >
            <Box w='min-content'>
              <Icon
                as={BiMessageAdd}
                color='#b0b4b8'
                marginRight='10px'
                w={6}
                h={6}
                _hover={{ color: "#DCDDDE" }}
                cursor='pointer'
              />
            </Box>
          </Tooltip>
          <Tooltip label='Inbox' bg='#171616' color='white' fontWeight='bold'>
            <Box w='min-content'>
              <Icon
                as={CgInbox}
                color='#b0b4b8'
                marginRight='10px'
                w={6}
                h={6}
                _hover={{ color: "#DCDDDE" }}
                cursor='pointer'
              />
            </Box>
          </Tooltip>
          <Tooltip label='Help' bg='#171616' color='white' fontWeight='bold'>
            <Box w='min-content'>
              <Icon
                as={BsFillQuestionCircleFill}
                color='#b0b4b8'
                marginRight='10px'
                w={6}
                h={6}
                _hover={{ color: "#DCDDDE" }}
                cursor='pointer'
              />
            </Box>
          </Tooltip>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
