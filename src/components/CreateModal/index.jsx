import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "../CreateModal/index.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
  })
  .required();

export function CreateModal({ setTechCreateModal }) {
  const [techData, setTechData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const techCreate = async (data) => {
    try {
      const response = await api.post(`/technologies`, data);

      console.log(techData);
      toast.success("Technology registered successfuly", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
      toast.error("Technology already registered", { autoClose: 2000 });
    }
  };

  const submit = async (data) => {
    await techCreate(data);
    setTechCreateModal(false);
  };

  return (
    <div className="modalContainer">
      <form onSubmit={handleSubmit(submit)}>
        <div className="techRegister">
          <h1 className="formTitle">Register Technology</h1>
          <button
            className="closeButton"
            type="button"
            onClick={() => setTechCreateModal(false)}
          >
            X
          </button>
        </div>
        <div className="inputData">
          <div className="titleInput">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Title" {...register("title")} />
            <p>{errors.title?.message}</p>
          </div>
          <div className="statusSelect">
            <label htmlFor="">Select status</label>
            <select {...register("status")}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <button className="techRegButton" type="submit">
            Register Technology
          </button>
        </div>
      </form>
    </div>
  );
}
