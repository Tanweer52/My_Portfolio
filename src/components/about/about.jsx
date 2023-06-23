import "./about.css";
import me from "../../img/Ig.png";
function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={me} alt="" className="a-img" />
        </div>
      </div>

      <div className="a-right">
        <div className="a-title">
          <h1>About Me.</h1>
        </div>
        I was born and raised in Lohardaga, Jharkhand. I completed my
        Metriculation from
        <b> Netarhat Residential School </b>with 93.8% marks and got the 5th
        position on Jharkhand State. I completed my Intermediate from{" "}
        <b>Eima Inter Collage</b>, Lohardaga with 78.8% marks. I am currently
        doing Data Structure and Algorithm in C++. I am Interested in Web
        Development with MERN Stack.
        <p className="a-sub-desc"></p>
        <p className="a-desc">
          <h1>Coding Profile:</h1>
          <br></br>
          <a
            href="https://leetcode.com/Tanweer52/"
            style={{ textDecoration: "none", color: "white", font: "inherit" }}
          >
            Leetcode: 300+ question solved
          </a>
          <br></br>
          <a
            href="https://codeforces.com/profile/Tanweer_ansari"
            style={{ textDecoration: "none", color: "white", font: "inherit" }}
          >
            Codeforces: 150+ question solved
          </a>
          <br></br>
          <a
            href="https://auth.geeksforgeeks.org/user/tanweer205"
            style={{ textDecoration: "none", color: "white", font: "inherit" }}
          >
            Gfg:100+ question solved
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
