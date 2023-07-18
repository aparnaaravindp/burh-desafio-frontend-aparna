import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "../CreateModal/index.css";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
  })
  .required();

export function CreateModal() {
  const { techCreate, setTechCreateModal } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
