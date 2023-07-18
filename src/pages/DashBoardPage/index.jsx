import { CreateModal } from "../../components/CreateModal";
import { Header } from "../../components/Header";
import "../DashBoardPage/index.css";
import { useState } from "react";

export function DashBoardPage({ setStart }) {
  const [techCreateModal, setTechCreateModal] = useState(false);

  return (
    <>
      {techCreateModal ? (
        <CreateModal setTechCreateModal={setTechCreateModal} />
      ) : null}
      <Header setStart={setStart} />
      <main>
        <div className="technologyContainer">
          <h2>Technologies</h2>
          <button
            className="createButton"
            onClick={() => setTechCreateModal(true)}
          >
            +
          </button>
        </div>
      </main>
    </>
  );
}
