import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logo.png";
import logowhite from "../assets/logowhite.png";

import { client } from "../client";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();

  const responsGoogle = (response) => {
    let decodedHeader = jwt_decode(response.credential);
    localStorage.setItem("user", JSON.stringify(decodedHeader));

    console.log(decodedHeader);

    const { name, sub, picture } = decodedHeader;

    const doc = {
      _id: sub,
      _type: "user",
      userName: name,
      image: picture,
    };
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
    /*
        localStorage.setItem("user", JSON.stringify(response.profileObj));
        console.log(response.profileObj)
        const { name, googleId, imageUrl } = response.profileObj;

        const doc = {
            _id: googleId,
            _type:  "user",
            userName: name,
            image: imageUrl
        };
        

        client.createIfNotExists(doc)
            .then(() =>{
                navigate("/", {replace: true});
            })*/
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          controls={false}
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logowhite} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            <GoogleLogin
              text="signin_with"
              shape="circle"
              onSuccess={responsGoogle}
              onError={responsGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
