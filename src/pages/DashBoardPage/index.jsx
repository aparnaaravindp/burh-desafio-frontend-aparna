import { CreateModal } from "../../components/CreateModal";
import { Header } from "../../components/Header";
import { UpdateModal } from "../../components/UpdateModal";
import { TechContext } from "../../providers/TechContext";
import { api } from "../../services/api";
import "../DashBoardPage/index.css";
import { useContext, useEffect, useState } from "react";

export function DashBoardPage({ setStart }) {
  const [techData, setTechData] = useState([]);
  const {
    techCreateModal,
    setTechCreateModal,
    editingStatus,
    setEditingStatus,
  } = useContext(TechContext);

  const techList = async () => {
    try {
      const response = await api.get(`/technologies`);

      setTechData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    techList();
  }, []);

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
        <div className="techDetails">
          {techData.length > 0 ? (
            <ul>
              {techData.map((tech) => (
                <li
                  className="techList"
                  key={tech._id}
                  onClick={() => setEditingStatus(tech)}
                >
                  <h2 className="techName">{tech.title} </h2>
                  <p className="techStatus">{tech.status}</p>
                </li>
              ))}
            </ul>
          ) : null}
          {editingStatus ? <UpdateModal /> : null}
        </div>
      </main>
    </>
  );
}
