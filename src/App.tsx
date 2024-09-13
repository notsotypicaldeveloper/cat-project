import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import "./App.css";


function App() {
  const [cardData, setCardData] = useState([]);
  const [isCardDataChanged, setIsCardDataChanged] = useState(false);

  useState(()=>{
    if(!window.localStorage.getItem('CAT_APP_CARD_DATA') || (
        JSON.parse(window.localStorage.getItem('CAT_APP_CARD_DATA') || "")?.length == 0
      )  
    )
    {
      fetch("/api/cats")
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data);
        setCardData(data);
      })
    }
    else {
      setCardData(JSON.parse(window.localStorage.getItem('CAT_APP_CARD_DATA') as any));
    }
  })

    
  
  // Here, we will hit backend server, for getting data
  // right now, we are hitting our mock service worker
  useEffect(()=>{
    window.localStorage.setItem('CAT_APP_CARD_DATA', JSON.stringify(cardData));
  }, cardData);

  const dragCat = useRef<number>(0);
  // cat with which we are swapping
  const draggedOverCat = useRef<number>(0);

function array_move(arr:any[], old_index: number, new_index: number) {
  const temp = arr[old_index];
  arr.splice(old_index,1);
  arr.splice(new_index, 0, temp);
}

  function handleSort() {
    const cardDataClone = [...cardData];
    array_move(cardDataClone, dragCat.current, draggedOverCat.current);
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
