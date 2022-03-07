import React from "react";
import FormComponent from "../../components/form/index.jsx";
import { GeneralDiv } from "./style.js";
import { ImageDiv } from "./style.js";
import { FormDiv } from "./style.js";

export default function Login() {
  return (
    <GeneralDiv>
      <ImageDiv>
        <img src={require("../../assets/diary.png")} alt="" />
      </ImageDiv>
      <FormDiv>
        <FormComponent />
      </FormDiv>
    </GeneralDiv>
  );
}
