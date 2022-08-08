import React from "react";
import UseEffectAPI from "./componet/UseEffectAPI";
import UseReducer from "./componet/UseReducer";
import UseRef_controledForm from "./componet/UseRef_controledForm";

const App = () => {
  return (
    <>
      {/* 1. fetch git user data with api  */}
      {/* <UseEffectAPI/> */}

      {/* 2. useRef hook used in uncontrolled form  */}
      {/* <UseRef_controledForm /> */}

      <UseReducer />
    </>
  );
};

export default App;
