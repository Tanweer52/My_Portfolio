import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/Email.png";
import Address from "../../img/Address.png";
import { useRef,useState } from "react";
import emailjs from "emailjs-com";
import { useContext } from "react";
import { ThemeContext } from "../../context";
const Contact = () => {
  const Ref = useRef();

  const [Done , setDone]=useState(false);
  const theme=useContext(ThemeContext);
const darkMode= theme.state.darkMode;

  const HandleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_czaidkw",
        "template_qu3je1u",
        Ref.current,
        "IUgHBO-lvQZSigLIw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7004682672
            </div>

            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              tanweer@gmail.com
            </div>

            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Lohardaga
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            Discuss with Me. I am Here to Discuss Your Idea.
          </p>

          <form ref={Ref} onSubmit={HandleSubmit}>
            <input style={{backgroundColor:darkMode&& "#333"}} type="text" placeholder="Name" name="user_name" />
            <input  style={{backgroundColor:darkMode&& "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input  style={{backgroundColor:darkMode&& "#333"}}type="text" placeholder="Email" name="user_email" />

            <textarea  style={{backgroundColor:darkMode&& "#333"}} rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            
            {Done && "Thank you."}

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
