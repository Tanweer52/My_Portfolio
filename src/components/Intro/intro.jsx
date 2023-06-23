import "./intro.css";
import Me from "../../img/me.png";
function intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tanweer Ansari</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">C++ Programmer</div>
              <div className="i-title-item"> Web Developer</div>
              <div className="i-title-item">Content Writer </div>
              <div className="i-title-item">Photographer </div>
              {/* <div className="i-title-item">Let Me Show My Code</div> */}
            </div>
          </div>

          <p className="i-desc">
            Incoming graduate student at the BIT Sindri, Dhanbad
            pursuing a B.Tech in Electronics and Communication with
            career interests in tech, sports, and music.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
}

export default intro;
