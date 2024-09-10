import Overlay from "./Overlay";
import { useEffect, useState } from "react";
import SpinnerLoader from "./SpinnerLoader";

type CardProps = {
  title: string;
  imgUrl: string;
  imgAlt: string;
  position: number;
};
const Card = (props: CardProps) => {
  const [loading, setLoading] = useState(true);
  const [openOverlay, setOpenOverlay] = useState(false);

  const handleLoading = () => {
    setLoading(false)
  }
  const cardClassName = "card card-" + props.position;
  const cardImage = "card-image-" + props.position;

 
  return (
    <>
      <div className={cardClassName}>
        {
          <>
            <p> {props.title}</p>
            <div style={{display: loading ? "block" : "none"}}>
              <SpinnerLoader />
            </div>
            <div style={{display: loading ? "none" : "block"}}>
              <img className={cardImage} src={props.imgUrl} alt={props.imgAlt} onLoad={handleLoading} />
            </div>
          </>
        }
      </div>  
    </>
  );
};

export default Card;
