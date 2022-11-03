import {
  Box,
  Button,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const abc = () => {
    navigate("/user");
  };
  return (
    <div>
      <Heading as="h2" size="xl">
        Digiaccel-Learning-Quiz-Assignmnet{" "}
      </Heading>
      <Box width="80%" >
        Rules for Quiz
        <UnorderedList>
          <ListItem>
             Each question should have a difficulty defined between 1–10.
          </ListItem>
          
          <ListItem>
             For every correct answer, the next question should be at the
            current level + 1 difficulty.
          </ListItem>
          <ListItem>
            For every incorrect answer, the next question should be at the
            current level - 1 difficulty -1
          </ListItem>
        </UnorderedList>
        <Button bg="teal" onClick={abc}>
          lets start
        </Button>
      </Box>
    </div>
  );
};
