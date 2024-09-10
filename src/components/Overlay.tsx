type OverlayProps = {
  title: string;
  imgUrl: string;
  imgAlt: string;
};
const Overlay = (props: OverlayProps) => {
  return (
    <>
      <div>
        <div className="overlay-container">
          <div className="overlay-content">
            <h2>{props.title}</h2>
            <img
              className="overlay-img"
              src={props.imgUrl}
              alt={props.imgAlt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
