import { Button, FormControl, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const QuizAdd = () => {
  const [data, setData] = useState({});

  const navigate = useNavigate();
  const hndlechange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    var answer = [];
    answer.push(data.option1);
    answer.push(data.option2);
    answer.push(data.option3);
    answer.push(data.option4);

    var sendobj = {
      question: data.question,
      answer: answer,
      rightanwser: data.RightAnswer,
    };

    console.log(sendobj);
    axios
      .post("http://localhost:8080/quiz/create", sendobj)
      .then((res) => console.log("res",res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div
        style={{
          width: "60%",
          margin: "auto",
          marginTop: "20px",
          border: "1px solid black",
          padding: "15px",
        }}
      >
        <h1>
          {" "}
          <strong>
            <u>Setup Your Quiz</u>
          </strong>{" "}
        </h1>{" "}
        <br />
        <form onSubmit={handlesubmit}>
          <FormControl>
            <Input
              type="text"
              placeholder="Enter The Question"
              name="question"
              onChange={hndlechange}
            />
          </FormControl>
          <br />

          <FormControl>
            <Input
              type="text"
              placeholder="Options 1"
              name="option1"
              onChange={hndlechange}
            />
          </FormControl>

          <br />
          <FormControl>
            <Input
              type="text"
              placeholder="Options 2"
              name="option2"
              onChange={hndlechange}
            />
          </FormControl>

          <br />
          <FormControl>
            <Input
              type="text"
              placeholder="Options 3"
              name="option3"
              onChange={hndlechange}
            />
          </FormControl>

          <br />
          <FormControl>
            <Input
              type="text"
              placeholder="Options 4"
              name="option4"
              onChange={hndlechange}
            />
          </FormControl>

          <br />
          <FormControl>
            <Select
              placeholder="Select Right Answer "
              name="RightAnswer"
              onChange={hndlechange}
            >
              <option value="1">Options 1</option>
              <option value="2">Options 2</option>
              <option value="3">Options 3</option>
              <option value="4">Options 4</option>
            </Select>
          </FormControl>
          <br />

          <br />

          <Button
            bg="aqua"
            border="1px solid black"
            color="black"
            type="submit"
            width="100%"
          >
            Add Question
          </Button>
          <br />
        </form>
      </div>
    </div>
  );
};
