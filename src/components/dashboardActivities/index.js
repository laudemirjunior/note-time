import * as C from "./styles";
import { BsThreeDots, BsSquareFill } from "react-icons/bs";
import { IoMdTrash } from "react-icons/io";
import { FiPlay, FiSquare } from "react-icons/fi";
import { GiSplitCross } from "react-icons/gi";
import { HiOutlineHeart } from "react-icons/hi";
import { useUserContext } from "../../context/userContext";
import { useEffect, useState } from "react";
import useTimer from "easytimer-react-hook";
import dayjs from "dayjs";
import moment from "moment";

function DashboardActivities({ activity }) {
  const [show, setShow] = useState(false);
  const { favoriteActivity, deleteActivity, startTimer, pauseTimer } =
    useUserContext();
  const [newTime, setNewTime] = useState("00:00:00");

  const now = dayjs().add(3, "hours").format("YYYY-MM-DD HH:mm:ss");

  useEffect(() => {
    if (activity.timer_init !== null) {
      let ms = moment(now, "YYYY-MM-DD HH:mm:ss").diff(
        moment(activity.timer_init, "YYYY-MM-DD HH:mm:ss")
      );
      let d = moment.duration(ms);
      let s =
        "0" +
        Math.floor(d.asHours()) +
        ":" +
        moment.utc(ms).format("mm") +
        ":" +
        moment.utc(ms).format("ss");
      setNewTime(s);
      timer.start();
    }
  }, []);

  const [timer, isTargetAchieved] = useTimer({
    startValues: {
      hours: Number(newTime.split(":")[0]),
      minutes: Number(newTime.split(":")[1]),
      seconds: Number(newTime.split(":")[2]),
    },
  });

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
          <FiSquare
            onClick={() => {
              pauseTimer(activity.id);
              timer.stop();
            }}
          />
          <FiPlay
            onClick={() => {
              startTimer(activity.id);
              timer.start();
            }}
          />
          <p>{timer.getTimeValues().toString()}</p>
          <IoMdTrash onClick={() => deleteActivity(activity.id)} />
        </C.Controls>
      )}
    </C.MainContainer>
  );
}

export default DashboardActivities;
