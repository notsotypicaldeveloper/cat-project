import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import "./App.css";


function App() {
  const [cardData, setCardData] = useState([]);

  // Here, we will hit backend server, for getting data
  // right now, we are hitting our ock service worker
  useEffect(() => {
    fetch("/api/cats")
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data);
      setCardData(data);
    })
  }, []);

  const dragCat = useRef<number>(0);
  // cat with which we are swapping
  const draggedOverCat = useRef<number>(0);

  function handleSort() {
    const cardDataClone = [...cardData];
    const temp = cardDataClone[dragCat.current];
    cardDataClone[dragCat.current]= cardDataClone[draggedOverCat.current];
    cardDataClone[draggedOverCat.current] = temp;
    setCardData(cardDataClone);

  }
  return (
    <>
      <div className="home-page-container">

        {cardData.map((data, index) => {
          const { type, title, position } = data;
          const imgUrl = "./" + type + ".png";
          return (
            <div key={index} draggable="true"  
            onDragStart={() => (dragCat.current = index)}
            onDragEnter={() => (draggedOverCat.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            >
              <Card title={title} imgUrl={imgUrl} imgAlt={type} position={position}/>
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
}

export default App;
