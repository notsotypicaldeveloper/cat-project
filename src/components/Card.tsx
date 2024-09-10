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
  const handleClick = () => {
    setOpenOverlay(true);
  }

  return (
    <>
      <div className="card" draggable>
        {
          <>
            <p> {props.title}</p>
            <div style={{display: loading ? "block" : "none"}}>
              <SpinnerLoader />
            </div>
            <div style={{display: loading ? "none" : "block"}}>
              <img className="card-image" src={props.imgUrl} alt={props.imgAlt} onLoad={handleLoading} onClick={handleClick}/>

              {/* <Overlay openOverlay={openOverlay} title={props.title} imgUrl={props.imgUrl}imgAlt={props.imgAlt}  /> */}
            </div>
          </>
        }
      </div>  
    </>
  );
};

export default Card;
