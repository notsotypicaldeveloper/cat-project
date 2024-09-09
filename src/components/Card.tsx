import Overlay from "./Overlay";
import { useEffect, useRef, useState } from "react";

type CardProps = {
  title: string;
  imgUrl: string;
  imgAlt: string;
  position: number;
};
const Card = (props: CardProps) => {
  const cardClassName = "card card-" + props.position;
  const cardImage = "card-image-" + props.position;

  console.log("cardClassName=::", cardClassName);
  console.log("cardImage=::", cardImage);

  const [openOverlay, setOpenOverlay] = useState(false);

  // let menuRef = useRef(); 
  useEffect(()=>{
    let handler = (e:any) =>{
      if(e.target)
      {
        setOpenOverlay(true);
      }
      else {
        setOpenOverlay(false);
      }
    }
    document.addEventListener("click",handler)
  })
  return (
    <>
      <div className={cardClassName} >
        <p>{props.title}</p>
        <img className={cardImage} src={props.imgUrl} alt={props.imgAlt} />
        <button >Open Overlay</button>
      </div>

      <Overlay openOverlay={openOverlay} title={props.title} imgUrl={props.imgUrl} imgAlt={props.imgAlt}/>
    </>
  );
};

export default Card;
