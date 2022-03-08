import * as C from "./styles";
import {
  AiFillTrophy,
  AiFillFolder,
  AiOutlineGroup,
  AiOutlineUser,
} from "react-icons/ai";

function MobileBar() {
  return (
    <C.Container>
      <AiFillFolder />
      <AiFillTrophy />
      <AiOutlineGroup />
      <AiOutlineUser />
    </C.Container>
  );
}

export default MobileBar;
