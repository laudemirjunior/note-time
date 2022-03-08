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

export default function Dashboard() {
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
            <DashboardCards />
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
            <DashboardActivities />
          </C.Activities>
        </section>
      </C.Container>

      <div id="mobilebar">
        <MobileBar />
      </div>
    </C.MainContainer>
  );
}
