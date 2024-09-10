import { useEffect, useState } from "react";
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

  return (
    <>
      <div className="home-page-container">
        {cardData.map((data, index) => {
          const { type, title, position } = data;
          const imgUrl = "./" + type + ".png";
          return (
            <div key={index}>
              <Card
                title={title}
                imgUrl={imgUrl}
                imgAlt={type}
                position={position}
              />
            </div>
          );
        })}
      </div>
      <div></div>
    </>
  );
}

export default App;
