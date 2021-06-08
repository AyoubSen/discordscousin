import { Image, Center, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

function HomeIcon(props) {
  const getBigger = (e) => {
    e.target.style.borderRadius = "35%";
    e.target.style.background = props.type == 1 ? "#5865F2" : "none";
    e.target.style.transition = "0.2s all ease";
  };

  const getSmaller = (e) => {
    e.target.style.borderRadius = "50%";
    e.target.style.background = "#2F3136";
    e.target.style.transition = "0.2s all ease";
  };

  const mouseDown = (e) => {
    e.target.style.transform = "translateY(0.5px)";
    e.target.style.transition = "0s";
  };
  return (
    <Tooltip
      label={props.tooltip}
      placement='right'
      bg='#171616'
      color='white'
      borderRadius='7px'
      fontWeight='bold'
      hasArrow
    >
      <Center
        marginTop='12px'
        h='50px'
        w='50px'
        bg={
          props.tooltip == "Home" && props.server != "server"
            ? "#5865F2"
            : "#2F3136"
        }
        borderRadius='50%'
        cursor='pointer'
        onMouseDown={mouseDown}
        onMouseUp={(e) => (e.target.style.transform = "translateY(-0.5px)")}
      >
        <Link href={props.href}>
          <a>
            <Image
              src={props.type == "1" ? props.pic : props.image}
              w={props.tooltip == "Home" ? "30px" : "100%"}
              borderRadius='50%'
            />
          </a>
        </Link>
      </Center>
    </Tooltip>
  );
}

export default HomeIcon;
