type CardProps = {
    title: string,
    imgUrl: string,
    imgAlt: string,
    position: number
}
const Card = (props: CardProps) => {
    const className= "card-" + props.position;
    return (

    <div className={className}>
        <p>{props.title}</p>
        <img className="card-image" src= {props.imgUrl} alt= {props.imgAlt}/>
    </div>
  )
}

export default Card