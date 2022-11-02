import React, {useState} from "react";

const List = (props) => {

    const [show, setshow] = useState(false);
    const [symbol, setsymbol] = useState(true);

    const clickhandler = () =>{
        setshow((prev) => prev= !prev)
        setsymbol((prev) => !prev)
    }

  return (
    <div className="my-5 bg-white shadow-xl p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl mr-8">{props.title}</h2>
        <button
          className="text-2xl text-red-400 font-bold"
          onClick={clickhandler}
        >
          {symbol ? '+' : '-'}
        </button>
      </div>
      <p className={show ? "text-lg" : "text-lg hidden"}>{props.info}</p>
    </div>
  );
};

export default List;
