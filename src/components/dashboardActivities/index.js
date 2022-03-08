import * as C from "./styles";
import { BsThreeDots, BsSquareFill } from "react-icons/bs";
import { IoMdTrash } from "react-icons/io";
import { FiPlay, FiSquare } from "react-icons/fi";
import { GiSplitCross } from "react-icons/gi";
import { HiOutlineHeart } from "react-icons/hi";
import { useUserContext } from "../../context/userContext";
import { useState } from "react";

function DashboardActivities({ activity }) {
  const [show, setShow] = useState(false);
  const { favoriteActivity, deleteActivity, startTimer, pauseTimer } =
    useUserContext();

  return (
    <C.MainContainer>
      <C.Container>
        <C.Title>
          <BsSquareFill />
          <h3>{activity.category.name}</h3>
        </C.Title>
        <div>
          <HiOutlineHeart
            onClick={() => favoriteActivity(activity.id, { favorite: true })}
          />
          <p>{activity.timer_total}</p>
          {show ? (
            <GiSplitCross onClick={() => setShow(!show)} />
          ) : (
            <BsThreeDots onClick={() => setShow(!show)} />
          )}
        </div>
      </C.Container>
      {show && (
        <C.Controls>
          <FiSquare onClick={() => pauseTimer(activity.id)} />
          <FiPlay onClick={() => startTimer(activity.id)} />
          <p>
            {activity.timer_init === null ? "00:00:00" : activity.timer_init}
          </p>
          <IoMdTrash onClick={() => deleteActivity(activity.id)} />
        </C.Controls>
      )}
    </C.MainContainer>
  );
}

export default DashboardActivities;
