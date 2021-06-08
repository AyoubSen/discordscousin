import { useState, useEffect } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

function Navbar() {
  const [doesUserExist, setDoesUserExist] = useState(false);
  useEffect(() => {
    localStorage.getItem("user")
      ? setDoesUserExist(true)
      : setDoesUserExist(false);
  }, []);
  return (
    <Flex
      justifyContent='space-around'
      alignItems='center'
      color='white'
      fontWeight='bold'
    >
      <Box fontSize='30px' cursor='pointer'>
        Discord
      </Box>
      <Flex justifyContent='space-between' w='380px'>
        <Box>
          <Link href='/'>
            <a>About me</a>
          </Link>
        </Box>
        <Box>
          <Link href='/'>
            <a>Why?</a>
          </Link>
        </Box>
        <Box>
          <Link href='/'>
            <a>How?</a>
          </Link>
        </Box>
        <Box>
          <Link href='/'>
            <a>Donate</a>
          </Link>
        </Box>
      </Flex>
      <Box>
        <Button
          borderRadius='20px'
          color='#000'
          _hover={{ color: "blue", boxShadow: "0 3px 10px rgba(0,0,0,0.5)" }}
        >
          <Link href={doesUserExist ? "/Channels/Me" : "/Login"}>
            <a>{doesUserExist ? "Open Discord" : "Login"}</a>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
