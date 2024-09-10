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
  useEffect(() => {
    console.log("openOverlay===:::", openOverlay);
  
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const [loading, setLoading] = useState(true);
  const [openOverlay, setOpenOverlay] = useState(false);

  

  const detectKeyDown = (e: any) => {
    console.log("cliked key==", e);
    if (e.key == "Escape") {
      console.log("User press escape key, close the overlay");
      setOpenOverlay(false);
    }
  };

  const handleLoading = () => {
    setLoading(false);
  };
  const handleClick = (e: any) => {
    console.log("e===:::", e);
    setOpenOverlay(!openOverlay);
  };

  return (
    <>
      <div className="card" draggable>
        {
          <>
            <p> {props.title}</p>
            <div style={{ display: loading ? "block" : "none" }}>
              <SpinnerLoader />
            </div>
            <div style={{ display: loading ? "none" : "block" }}>
              <img
                className="card-image"
                src={props.imgUrl}
                alt={props.imgAlt}
                onLoad={handleLoading}
                onClick={handleClick}
              />

              <div>
                {openOverlay && (
                  <Overlay
                    title={props.title}
                    imgUrl={props.imgUrl}
                    imgAlt={props.imgAlt}
                  />
                )}
              </div>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default Card;
