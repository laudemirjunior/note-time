import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import CreateActivity from "../../components/createActivity";
import * as C from "./styles";
import {
  HiOutlineLogout,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import DashboardCards from "../../components/dashboardCards";
import DashboardActivities from "../../components/dashboardActivities";
import MobileBar from "../../components/mobileBar";
import { useUserContext } from "../../context/userContext";
import { UseLogin } from "../../context/loginContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { activities, getUserActivities } = useUserContext();
  const { token } = UseLogin();
  const favorites = activities.filter((activity) => activity.favorite === true);
  const notFavorites = activities.filter(
    (activity) => activity.favorite === false
  );
  const [show, setShow] = useState(false);

  useEffect(() => {
    getUserActivities();
  }, []);

  return (
    <C.MainContainer>
      <div id="sidebar">
        <Sidebar />
      </div>

      <C.Container>
        <section>
          <C.Search>
            <h4>Logo</h4>
            <input placeholder="Realize sua busca..." />

            <div>
              <p>Sair</p>
              <HiOutlineLogout onClick={() => navigate("/login")} />
            </div>
          </C.Search>
        </section>

        <section>
          <C.Title>
            <h3>Atividades favoritas</h3>
            <div>
              <HiOutlineArrowLeft />
              <HiOutlineArrowRight />
            </div>
          </C.Title>
          <C.RecentActivities>
            {favorites.map((activity) => (
              <DashboardCards key={activity.id} activity={activity} />
            ))}
          </C.RecentActivities>
        </section>

        <section>
          <C.Title>
            <h3>Minhas Atividades</h3>
            <div>
              <button onClick={() => setShow(!show)}>Criar</button>
              <HiOutlineInformationCircle />
            </div>
            <div id="modal">{show && <CreateActivity />}</div>
          </C.Title>
          <C.Activities>
            {notFavorites.map((activity) => (
              <DashboardActivities key={activity.id} activity={activity} />
            ))}
          </C.Activities>
        </section>
      </C.Container>

      <div id="mobilebar">
        <MobileBar />
      </div>
    </C.MainContainer>
  );
}
