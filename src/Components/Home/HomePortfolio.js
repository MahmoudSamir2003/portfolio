import Typewriter from "react-typewriter-effect";
import "../../index.css";
import PortfolioImage from "../assets/img/me.jpg";

const HomePortfolio = () => {
  return (
    <section className="home-portfolio">
      <div className="portfolio-container">
        <div className="text-container d-block">
          <Typewriter
            text={"MAHMOUD SAMIR SALAMA Mohamed\nFront-end React Developer"}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={16000}
          />
        </div>

        <div className="image-container">
          <img
            src={PortfolioImage}
            alt="Mahmoud Samir Salama"
            className="animated-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
