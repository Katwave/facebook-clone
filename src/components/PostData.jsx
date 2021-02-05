import React from "react";
import { useState } from "react";
import PostComp from "./PostComp";
import StatusComp from "./StatusComp";
import StoryComp from "./StoryComp";
import "../css/style.css";

// Importing images
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";

function PostData() {
  const [statusText, setStatusText] = useState("");
  const [inputValue, setInputValue] = useState(false);

  const [data, setData] = useState([
    {
      name: "Katlego",
      surname: "Me",
      img: img1,
      status: [
        {
          text: "Enjoying the best moments",
          statusTime: "4h",
          numOfComments: "0",
          numOfLikes: "99",
          comments: [
            {
              name: "Josh talks",
              comment: "When are you coming back Katlego?",
            },
            {
              name: "Katlego Me",
              comment: "I'll be back by the end of the year.",
            },
          ],
        },
      ],
    },
    {
      name: "Thabiso",
      surname: "Malema",
      img: img2,
      status: [
        {
          text: "I am moving back to my old place, this one is exhausting!",
          statusTime: "2d",
          numOfComments: "2",
          numOfLikes: "62k",
          comments: [],
        },
      ],
    },
    {
      name: "Drizzy",
      surname: "Jane",
      img: img3,
      status: [
        {
          text: "Life of a rapper, no capping",
          statusTime: "3w",
          numOfComments: "1",
          numOfLikes: "12",
          comments: [],
        },
      ],
    },
    {
      name: "Yun",
      surname: "Wi",
      img: img4,
      status: [
        {
          text:
            "I am selling this cup for only 30 dollars and you get another one for free.",
          img: img4,
          statusTime: "3w",
          numOfComments: "1",
          numOfLikes: "12",
          comments: [
            {
              name: "Katlego Me",
              comment:
                "I need this cup man, I hope you can tell me where you got it.",
            },
          ],
        },
      ],
    },
  ]);

  // Checking if the user is typing or not in order to display a button
  const checkInputValue = (e) => {
    if (e.target.value.trim() !== "") {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  };

  const addStatusInput = (e) => {
    checkInputValue(e);
    const value = e.target.value;
    setStatusText(value);
  };

  const addStatusButton = (e) => {
    data.unshift({
      name: "Katlego",
      img: img4,
      surname: "Man",
      status: [
        {
          text: statusText,
          statusTime: "Just now",
          numOfComments: "0",
          numOfLikes: "0",
          comments: [],
        },
      ],
    });

    console.log(data);

    e.preventDefault();
    setInputValue(false);
    setStatusText("");
  };

  return (
    <div className="card-container">
      <StoryComp data={data} />
      <StatusComp
        name={data[0].name}
        addStatusInput={addStatusInput}
        addStatusButton={addStatusButton}
        statusText={statusText}
        inputValue={inputValue}
      />
      {data.map((person) => (
        <PostComp
          name={person.name}
          img={person.img}
          surname={person.surname}
          status={person.status}
        />
      ))}
    </div>
  );
}

export default PostData;
