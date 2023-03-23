import React from "react";
import { TfiHeart} from "react-icons/tfi";
import { Link } from "react-router-dom";

const ExploreCard = (props) => {
  return     <>
      
    <article className="list-card">
    <div>
    <h3>{props.data.course_title.toUpperCase()}</h3>
    <p>{props.data.course_description}</p>
    <button className="favorites"><TfiHeart /> Añadir</button>
    <Link to={'/courses/'+props.data.course_id}><button className="button-Input">Entrar al curso</button></Link>
    </div>
    <div>
    <img className="img-card" src={props.data.image_url} alt={props.data.course_title} style={{ width: "250px", height: "180px" }}/>
    </div>
    
    </article>
 
</>
};

export default ExploreCard;
