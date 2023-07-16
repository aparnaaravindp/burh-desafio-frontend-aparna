import burhImage from "../../assets/burhImage.svg"
import "../Header/index.css"


export function Header({setStart}) {
  return (
      <div className="headerContainer">
        <img src={burhImage} alt="burhImage" />
        <button onClick={() => setStart("HomePage")}>Back</button>
      </div>

  );
}
