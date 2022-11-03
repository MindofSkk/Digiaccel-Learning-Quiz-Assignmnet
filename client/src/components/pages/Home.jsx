import {
  Box,
  Button,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
      <Box width="80%">
        Work in progress
        <Button bg="teal" onClick={abc}>
          lets start
        </Button>
      </Box>
    </div>
  );
};
