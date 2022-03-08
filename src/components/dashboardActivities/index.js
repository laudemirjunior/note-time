import * as C from "./styles";
import { BsThreeDots, BsSquareFill } from "react-icons/bs";
import { IoMdTrash } from "react-icons/io";
import { FiPlay, FiSquare } from "react-icons/fi";
import { GiSplitCross } from "react-icons/gi";
import { useState } from "react";

function DashboardActivities() {
  const [show, setShow] = useState(false);

  return (
    <C.MainContainer>
      <C.Container>
        <C.Title>
          <BsSquareFill />
          <h3>React Native - Hooks and usage</h3>
        </C.Title>
        <div>
          <p>00:00:00</p>
          {show ? (
            <GiSplitCross onClick={() => setShow(!show)} />
          ) : (
            <BsThreeDots onClick={() => setShow(!show)} />
          )}
        </div>
      </C.Container>
      {show && (
        <C.Controls>
          <FiSquare />
          <FiPlay />
          <p>00:00:00</p>
          <IoMdTrash />
        </C.Controls>
      )}
    </C.MainContainer>
  );
}

export default DashboardActivities;
