import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar";
import { useUserContext } from "../../context/userContext";
import defaultImage from "../../assets/default-user.png";
export default function Hits() {
  const { scoreBoard, getScoreBoard } = useUserContext();
  useEffect(() => {
    getScoreBoard();
  }, []);

  console.log(scoreBoard);
  return (
    <Flex>
      <Sidebar />
      <Box w="85%">
        <Flex
          w="100%"
          h="100%"
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gridGap="30px"
        >
          <Heading>ScoreBoard</Heading>
          <VStack
            w="80%"
            h="70%"
            alignContent="start"
            alignItems="start"
            justifyContent="start"
            p="50px"
            boxShadow="xl"
            border="1px solid"
            borderColor="#CBD5E0"
            borderRadius="10px"
            overflow="auto"
          >
            {scoreBoard.map((item) => (
              <>
                <HStack
                  gridGap="10px"
                  borderBottom="1px solid"
                  borderColor="#CBD5E0"
                  w="100%"
                  pb="15px"
                  justifyContent="space-between"
                >
                  <HStack display="flex">
                    <Image
                      src={
                        item.image[0] ? item.image[0].url_image : defaultImage
                      }
                      w="60px"
                      h="60px"
                      borderRadius="10px"
                    />
                    <Text>{item.name}</Text>
                  </HStack>

                  <Text>Horas: {item.timer_general}</Text>
                </HStack>
              </>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
}
