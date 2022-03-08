import React from "react";
import Sidebar from "../../components/sidebar";
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

export default function Dashboard() {
  const { activities } = useUserContext();
  const favorites = activities.filter((activity) => activity.favorite === true);
  const notFavorites = activities.filter(
    (activity) => activity.favorite === false
  );

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
              <HiOutlineLogout />
            </div>
          </C.Search>
        </section>

        <section>
          <C.Title>
            <h3>Atividades recentes</h3>
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
              <button>Criar</button>
              <HiOutlineInformationCircle />
            </div>
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
