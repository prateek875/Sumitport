import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              PRATEEK
              <br />
              <span>BALARA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Senior</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Graphic Designer</div>
              <div className="landing-h2-2">Brand Specialist</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Motion Graphics</div>
              <div className="landing-h2-info-1">Visual Storytelling</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
