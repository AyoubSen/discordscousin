import {
  Center,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

function Online({ users }) {
  return (
    <Flex bg='#2F3136' justifyContent='center' overflowY='scroll'>
      <Flex flexDirection='column' alignItems='center' fontWeight='bold'>
        {users.map((user) => {
          return (
            <Popover placement='left' outline='none' border='1px solid #33363C'>
              <PopoverTrigger>
                <Flex
                  marginTop='20px'
                  alignItems='center'
                  cursor='pointer'
                  padding='5px 5px'
                  w='180%'
                  _hover={{ background: "#33363C", borderRadius: "5px" }}
                >
                  <Center
                    bg={user.color}
                    w='40px'
                    h='40px'
                    borderRadius='50px'
                    marginRight='10px'
                  >
                    {user.name.slice(0, 1)}
                  </Center>
                  <Text color='white'>{user.name}</Text>
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverHeader bg={user.color} color='white'>
                  <Flex alignItems='center'>
                    <Center
                      bg={user.color}
                      border='5px solid #18191C'
                      w='40px'
                      h='40px'
                      borderRadius='50px'
                      marginRight='10px'
                    >
                      {user.name.slice(0, 1)}
                    </Center>
                    {user.name}
                  </Flex>
                </PopoverHeader>
                <PopoverBody bg='#18191C' color='white'>
                  <Text color='gray.200'>Ayoub's Discord User !</Text>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          );
        })}
      </Flex>
    </Flex>
  );
}

export default Online;
