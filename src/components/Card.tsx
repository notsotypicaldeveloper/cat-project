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


  return (
    <>
      <div className={cardClassName} draggable="true">
        <p>{props.title}</p>
        <img className={cardImage} src={props.imgUrl} alt={props.imgAlt} />
      </div>
    </>
  );
};

export default Card;
