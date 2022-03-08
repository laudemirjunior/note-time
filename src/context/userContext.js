import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services";
import { useLoginContext } from "./loginContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const { token } = useLoginContext();

  function getUserActivities() {
    api
      .get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setActivities(res.data.activity))
      .catch((err) => console.log(err));
  }

  function favoriteActivity(activityId, update) {
    api
      .patch(`/activity/${activityId}`, update, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function deleteActivity(activityId) {
    api
      .delete(`/activity/${activityId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function startTimer(activityId) {
    api
      .post(`/activity/play/${activityId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function pauseTimer(activityId) {
    api
      .post(`/activity/pause/${activityId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (token) {
      getUserActivities();
    }
  }, [activities]);

  return (
    <UserContext.Provider
      value={{
        activities,
        favoriteActivity,
        deleteActivity,
        startTimer,
        pauseTimer,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);