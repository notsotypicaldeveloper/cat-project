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

  function array_move(arr:any[], old_index: number, new_index: number) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    // return arr; // for testing purposes
};

  function handleSort() {
    const cardDataClone = [...cardData];
    let length = cardData.length;
    console.log("length===:::", length);
    console.log("dragCat.current===:::", dragCat.current);
    console.log("draggedOverCat.current===:::", draggedOverCat.current);

    array_move(cardDataClone, dragCat.current, draggedOverCat.current);
    // dragCat.current
    // // When we drag and drop something, complete array will rotate by 1
    // const cardDataCloneRotatedBy1 = [...cardData];
    // const lastElement = cardDataClone[cardData.length];
    // for(let i = cardData.length-1; i > 0; i--) {
      
    // }

    // // We have to move all element by 1 upto dragCat.current index
    // // Have to start draging
    // const temp = cardDataClone[dragCat.current];
    // cardDataClone[dragCat.current]= cardDataClone[draggedOverCat.current];
    // cardDataClone[draggedOverCat.current] = temp;
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
