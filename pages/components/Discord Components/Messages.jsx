import { useState, useEffect } from "react";
import { Grid, Flex, Box, Image, Text, Center } from "@chakra-ui/react";

function Messages({ currentChannel, channels, messages, users }) {
  const getColor = (username) => {
    let colorMessage;
    users.map((user) => {
      if (user.name === username) {
        colorMessage = user.color;
      }
    });
    return colorMessage;
  };

  return (
    <>
      <Flex
        flexDirection='column-reverse'
        marginBottom='20px'
        h='80vh'
        overflowY='scroll'
      >
        {messages.map((item) => {
          return (
            <Flex margin='20px 0 0 20px'>
              <Box>
                <Center
                  bg={getColor(item.Username)}
                  w='40px'
                  color='#000'
                  h='40px'
                  borderRadius='50px'
                  marginRight='10px'
                  fontWeight='bold'
                >
                  {item.Username.slice(0, 1)}
                </Center>
              </Box>
              <Box>
                <Flex alignItems='center'>
                  <Text
                    marginLeft='10px'
                    fontWeight='bold'
                    cursor='pointer'
                    fontSize='15px'
                    _hover={{ textDecoration: "underline" }}
                  >
                    {item.Username}
                  </Text>
                  <Text marginLeft='5px' fontSize='12px' color='gray'>
                    {item.Timestamp
                      ? new Date(item.Timestamp.toDate()).toUTCString()
                      : "..."}
                  </Text>
                </Flex>
                <Text marginLeft='10px'>{item.Message}</Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
}

export default Messages;
