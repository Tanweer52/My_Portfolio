// import React from 'react'
import "./about2.css";
import U from "../../img/user.png";

function about2() {
  const f1 = () => {};
  const f2 = () => {};
  const f3 = () => {};
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-left">
            <img src={U} alt="" />
          </div>

          <div className="about-right">
            <h1 className="sub-title">About Me</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
              corrupti labore odit quisquam temporibus rerum ut perferendis ad,
              eligendi deleniti velit, tempora autem ex sequi cumque sint
              sapiente assumenda aliquid. Doloribus voluptate laboriosam
              repudiandae ab maxime hic assumenda amet, deleniti eius ducimus
              rerum temporibus? Minima odit non nihil molestiae dicta!
            </p>

            <div className="tab-titles">
              <p className="tab-links active-link" onClick={f1}>
                Skills
              </p>
              <p className="tab-links" onClick={f2}>
                Experience
              </p>
              <p className="tab-links" onClick={f3}>
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>C/C++</span>
                  <> Happy Coding</>
                </li>
                <li>
                  <span>Web Development</span> <>Happy Coding</>{" "}
                </li>
                <li>
                  <span>React.js</span>
                  <> Happy Coding</>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>LeetCode </span> <>250+ Problems</>{" "}
                </li>
                <li>
                  <span>Codeforces </span>
                  <> 200+ Problem </>
                </li>
                <li>
                  <span>Codechef</span>
                  <> 150+ Problems</>{" "}
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>Metriculation </span> <>Netarahat Residential School </>
                </li>
                <li>
                  <span>Intermediate </span>
                  <> Eima Inter College </>
                </li>
                <li>
                  <span>B.tech(Electronics & Communication)</span>
                  <> BIT Sindri</>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about2;
