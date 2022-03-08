import * as C from "./styles";
import { HiHeart } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { FiPlay, FiSquare } from "react-icons/fi";

function DashboardCards() {
  return (
    <C.Container>
      <C.Title>
        <div>
          <h3>React</h3>
          <HiHeart />
        </div>

        <div>
          <p>Tempo de estudo</p>
          <p>00:00:00</p>
        </div>
      </C.Title>
      <C.Timer>
        <IoMdTrash />
        <div>
          <FiPlay />
          <FiSquare />
        </div>
        <p>00:00:00</p>
      </C.Timer>
    </C.Container>
  );
}

export default DashboardCards;
