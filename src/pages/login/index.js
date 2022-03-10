import React from "react";
import { FormLogin } from "../../components/formLogin/index.jsx";
import { GeneralDiv } from "./style.js";
import { ImageDiv } from "./style.js";
import { FormDiv } from "./style.js";

export default function Login() {
  return (
    <GeneralDiv>
      <FormDiv>
        <FormLogin />
      </FormDiv>
      <ImageDiv>
        <img src={require("../../assets/registerImage.png")} alt="" />
      </ImageDiv>
    </GeneralDiv>
  );
}
