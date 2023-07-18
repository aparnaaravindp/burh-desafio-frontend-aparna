import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "../UpdateModal/index.css";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
  })
  .required();

export function UpdateModal() {
  const { techUpdate, techDelete, editingStatus, setEditingStatus } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: editingStatus.title,
      status: editingStatus.status,
    },
  });

  const submit = async (data) => {
    await techUpdate(data, editingStatus._id);
    setEditingStatus(null);
  };

  return (
    <div className="updateModalContainer">
      <form onSubmit={handleSubmit(submit)}>
        <div className="techInfo">
          <h2 className="techInfoTitle">Technology Details</h2>
          <button className="closeBttn" onClick={() => setEditingStatus(null)}>
            X
          </button>
        </div>
        <div className="formData">
          <div className="inputInfo">
            <label htmlFor="">Name of project</label>
            <input type="text" placeholder="Title" {...register("title")} />
            <p>{errors.title?.message}</p>
          </div>
          <div className="updateSelect">
            <label htmlFor="">Status</label>
            <select {...register("status")}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="buttons">
            <button className="updateBttn" type="submit">
              Save Changes
            </button>
            <button
              className="deleteBttn"
              type="button"
              onClick={async () => {
                await techDelete(editingStatus._id);
                setEditingStatus(null);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
