import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import "./UseEffectAPI.css";
const UseEffectAPI = () => {
  const [gitUSERS, setGitUSERS] = useState([]);
  const [load, setLoad] = useState(true);
  const getUSERDATA = async () => {
    try {
      setLoad(false);
      const resposne = await fetch("https://api.github.com/users");
      // const userdata = await resposne.json();
      setGitUSERS(await resposne.json());
      // console.log(userdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUSERDATA();
  }, []);

  if (load) {
    return <LoadingPage />;
  }
  return (
    <div className="container">
      <h2>List of User Data using Git hub API</h2>
      <div className="row">
        {gitUSERS.map((curEle, key) => {
          return (
            <div className="col-sm-4 my-2" key={key}>
              <div className="cardWrapper d-flex justify-content-start align-items-center">
                <div className="userIMG">
                  <img src={curEle.avatar_url} alt="user Img" />
                </div>
                <div className="ms-2">
                  <h3 className="m-0">{curEle.login}</h3>
                  <p>Type:- {curEle.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectAPI;
