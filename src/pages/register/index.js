import React from "react";
import { FormRegister } from "../../components/formRegister/index.jsx";
import { GeneralDiv } from "./style.js";
import { ImageDiv } from "./style.js";
import { FormDiv } from "./style.js";

export default function Register() {
  return (
    <GeneralDiv>
      <ImageDiv>
        <img src={require("../../assets/diary.png")} alt="" />
      </ImageDiv>
      <FormDiv>
        <FormRegister />
      </FormDiv>
    </GeneralDiv>
  );
}
