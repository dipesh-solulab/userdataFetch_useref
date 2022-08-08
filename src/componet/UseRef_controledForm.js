import React from "react";
import { useRef, useState } from "react";

const UseRef_controledForm = () => {
  //useRef is same as usestate and its use to preserve value and its No rerender
  const nameText = useRef(null);
  const [showData, setShowData] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(nameText.current.value);
    const nameData = nameText.current.value;
    nameData === "" ? alert("Enter Filed") : setShowData(true);
  };
  return (
    <>
      <div className="container">
        <form action="/action_page.php" onSubmit={formSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              ref={nameText}
            />
          </div>

          git init         <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p>
          {showData ? `You Entered Name is :- ${nameText.current.value}` : ""}
        </p>
      </div>
    </>
  );
};

export default UseRef_controledForm;
