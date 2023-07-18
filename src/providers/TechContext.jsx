import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techCreateModal, setTechCreateModal] = useState(false);
  const [techData, setTechData] = useState([]);
  const[techDataById, setTechDataById] = useState({})
  const [techUpdateModal, setTechUpdateModal] = useState(false);
  const [editingStatus, setEditingStatus] = useState(null);

  const techCreate = async (data) => {
    try {
      const response = await api.post(`/technologies`, data);

      console.log(response.data);
      toast.success("Technology registered successfuly", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
      toast.error("Technology already registered", { autoClose: 2000 });
    }
  };

  const techList = async () => {
    try {
      const response = await api.get(`/technologies`);

      setTechData(response.data);
      console.log(techData);
    } catch (error) {
      console.log(error);
    }
  }; 

  const techById = async (id) => {
    try {
      const response = await api.get(`/technologies/${id}`);

      setTechDataById(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const techUpdate = async (data, id) => {
    try {
      const response = await api.put(`/technologies/${id}`, data);

      toast.success("Technology updated successfully", { autoClose: 2000 });

      const newTechData = techData.map((tech) => {
        if (id === tech._id) {
          console.log(tech._id);
          return { ...tech, ...data };
        } else {
          return tech;
        }
      });

      setTechData(newTechData);
    } catch (error) {
      console.log(error);
    }
  };

  const techDelete = async (id) => {
    try {
      const response = await api.delete(`/technologies/${id}`);
      toast.success("Technology removed successfully", { autoClose: 2000 });

      const newTechData = techData.filter((tech) => tech._id !== id);
      setTechData(newTechData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techData,
        setTechData,
        techCreate,
        techList,
        techById,
        techCreateModal,
        setTechCreateModal,
        techUpdateModal,
        setTechUpdateModal,
        techUpdate,
        techDelete,
        editingStatus,
        setEditingStatus,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
