import { createContext, useContext, useEffect, useState } from "react";
import api from "../services";
import { UseLogin } from "./loginContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState([]);
  const { token } = UseLogin();

  function getUserActivities() {
    api
      .get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setActivities(res.data.activity);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }

  function favoriteActivity(activityId, update) {
    api
      .patch(`/activity/${activityId}`, update, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => getUserActivities())
      .catch((err) => console.log(err));
  }

  function deleteActivity(activityId) {
    api
      .delete(`/activity/${activityId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => getUserActivities()())
      .catch((err) => console.log(err));
  }

  function startTimer(activityId) {
    api
      .post(
        `/activity/play/${activityId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function pauseTimer(activityId) {
    api
      .post(
        `/activity/pause/${activityId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => getUserActivities())
      .catch((err) => console.log(err));
  }

  function createActivity(activityName) {
    api
      .post("/activity", activityName, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        getUserActivities();
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   if (user.length === 0) {
  //     getUserActivities();
  //   }
  // }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        activities,
        favoriteActivity,
        deleteActivity,
        startTimer,
        pauseTimer,
        getUserActivities,
        createActivity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
