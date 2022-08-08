import React from "react";
import { useReducer } from "react";

const initial = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  return (
    <>
      <div className="container">
        <div className="warapper_content text-center">
          <h1 className="text-info">{state}</h1>
          <div className="btn_wrap d-flex justify-content-center text-center">
            <button
              className="btn btn-success"
              onClick={() => dispatch({ type: "INC" })}
            >
              +
            </button>
            <button
              className="btn btn-success ms-3"
              onClick={() => dispatch({ type: "DEC" })}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
