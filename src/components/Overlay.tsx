type OverlayProps = {
    openOverlay: boolean;
    title: string;
    imgUrl: string;
    imgAlt: string;
}
const Overlay = (props: OverlayProps) => {
  return (
    <>
    <div>
        {props.openOverlay? (
            <div className="overlay-container">
                  <p>{props.title}</p>
                  <img src={props.imgUrl} alt={props.imgAlt} />
                Hi from overlay
                
            </div>
            ):(<></>)}
    </div>
    </>
  )
}

export default Overlay