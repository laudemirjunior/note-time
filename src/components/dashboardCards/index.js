import * as C from "./styles";
import { HiHeart } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { FiPlay, FiSquare } from "react-icons/fi";
import { useUserContext } from "../../context/userContext";

function DashboardCards({ activity }) {
  const { favoriteActivity, deleteActivity, pauseTimer, startTimer } =
    useUserContext();

  return (
    <C.Container>
      <C.Title>
        <div>
          <h3>{activity.category.name}</h3>
          <HiHeart
            onClick={() => favoriteActivity(activity.id, { favorite: false })}
          />
        </div>

        <div>
          <p>Tempo de estudo</p>
          <p>{activity.timer_total}</p>
        </div>
      </C.Title>
      <C.Timer>
        <IoMdTrash onClick={() => deleteActivity(activity.id)} />
        <div>
          <FiSquare onClick={() => pauseTimer(activity.id)} />
          <FiPlay onClick={() => startTimer(activity.id)} />
        </div>
        <p>{activity.timer_init === null ? "00:00:00" : activity.timer_init}</p>
      </C.Timer>
    </C.Container>
  );
}

export default DashboardCards;
