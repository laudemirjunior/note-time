import * as C from "./styles";
import { HiHeart } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { FiPlay, FiSquare } from "react-icons/fi";
import { useUserContext } from "../../context/userContext";
import useTimer from "easytimer-react-hook";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import moment from "moment";

function DashboardCards({ activity }) {
  const { favoriteActivity, deleteActivity, pauseTimer, startTimer } =
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
          <FiSquare
            onClick={() => {
              pauseTimer(activity.id);
              timer.reset();
              timer.stop();
            }}
          />
          <FiPlay
            onClick={() => {
              startTimer(activity.id);
              timer.start();
            }}
          />
        </div>
        <p>{timer.getTimeValues().toString()}</p>
      </C.Timer>
    </C.Container>
  );
}

export default DashboardCards;
