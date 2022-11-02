import React, { useState } from "react";
import Data from "./Data";
import List from "./List";

const Question = (props) => {
  // const [show, setshow] = useState(false);

  const clickhandler = (event) => {
    // console.log(event.target);
    // setshow(true);
  };

  return (
    <div className="bg-gray-300 max-w-lg px-10 rounded-md ">
      <h2 className="text-2xl font-bold text-center py-5">Question and Answer</h2>
      {props.data.map((ele) => {
        return (
          <List
            key={ele.id}
            id={ele.id}
            title={ele.title}
            info={ele.info}
            onclick={clickhandler}
          />
        );
      })}
    </div>
  );
};

export default Question;
