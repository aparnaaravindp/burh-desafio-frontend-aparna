import burhImage from "../../assets/burhImage.svg"
import technologyImage from "../../assets/technologyImage.svg"
import "../HomePage/index.css"



export function HomePage({ setStart }) {
    return (
      <section className="page">
        <div className="container">
          <div className="information">
            <h1 className="title">
              <img src = {burhImage} alt = "burhLogo"/>
            </h1>
            <p>Explore new technologies</p>
            <button onClick={() => setStart("DashBoardPage")}>Iniciar</button>
          </div>
          <div className="image">
            <img src={technologyImage} alt="technologyImage" />
          </div>
        </div>
      </section>
    );
  }
  