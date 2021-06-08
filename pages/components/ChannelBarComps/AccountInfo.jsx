import { Flex, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function AccountInfo() {
  const [currentuser, setCurrentUser] = useState("");
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const signout = () => {
    localStorage.removeItem("user");
    window.location.replace("ayoubsdiscord.vercel.app");
  };

  return (
    <Flex
      bg='#292B2F'
      justifyContent='space-around'
      alignItems='center'
      color='white'
      fontWeight='bold'
    >
      <Text color='white'>{currentuser.name}</Text>
      <Button onClick={signout} colorScheme='teal' h='35px'>
        Sign Out
      </Button>
    </Flex>
  );
}

export default AccountInfo;
