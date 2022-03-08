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

export default function Dashboard() {
  return (
    <C.MainContainer>
      <Sidebar />

      <C.Container>
        <section>
          <C.Search>
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
    </C.MainContainer>
  );
}
