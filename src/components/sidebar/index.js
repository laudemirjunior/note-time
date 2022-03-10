import { Container } from "./styles";
import {
  AiFillTrophy,
  AiFillFolder,
  AiOutlineGroup,
  AiOutlineTeam,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { user } = useUserContext();

  return (
    <Container>
      <div id="links">
        <div onClick={() => navigate("/dashboard")}>
          <AiFillFolder />
          <p>Atividades</p>
        </div>
        <div onClick={() => navigate("/hits")}>
          <AiFillTrophy />
          <p>Classificação</p>
        </div>
        <div onClick={() => navigate("/my-groups")}>
          <AiOutlineTeam />
          <p>Meus grupos</p>
        </div>
        <div onClick={() => navigate("/groups")}>
          <AiOutlineGroup />
          <p>Todos os grupos</p>
        </div>
      </div>
      <div id="user">
        <div>
          {/* <img src={user.image[0].url_image} alt={user.name} /> */}
          <p>{user.name}</p>
        </div>
      </div>
    </Container>
  );
}
