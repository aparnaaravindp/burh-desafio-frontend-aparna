import burhImage from "../../assets/burhImage.svg";

export function DashBoardPage({ setStart }) {
  return (
    <section className="userPage">
      <div className="headerContainer">
        <img src={burhImage} alt="burhImage" />
        <button onClick={() => setStart("HomePage")}>Inicio</button>
      </div>
    </section>
  );
}
