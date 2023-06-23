import "./product.css";
// import x from "../../img/Utube.png"
const product=(props)=> {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <a href={props.link} target="_black" rel="noreferrer">
        <img src={props.img} alt="" className="p-img" />

      </a>
      
    

    </div>
  );
}

export default product;
