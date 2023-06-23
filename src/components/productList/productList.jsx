import "./productList.css";
import Product from "../product/product";
// import { products } from "../../Data";
import Utube from "../../img/Utube.png";
import Blog from "../../img/Blog.png";
import Log from "../../img/Log.png";

function productList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Works..</h1>
        <p className="pl-desc">
         These are some of my web development/ Coding Projects that is made during my 
         Academic Period.
        </p>
      </div>
      <div className="pl-list">
        <Product img={Utube} link={"https://github.com/Tanweer52/clone_utube"}/>
        <Product img={Log} link={"https://www.youtube.com/watch?v=AnCoGS93Og4"}/>
        <Product img={Blog} link={"https://github.com/Tanweer52/Blog_Website"}/>

      </div>
    </div>
  );
}

export default productList;
