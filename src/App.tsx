import { useEffect, useState } from "react";
import Card from "./components/Card";
import SpinnerLoader from "./components/SpinnerLoader";
import "./App.css";


function App() {
  const [showSpinner, setShowSpinner] = useState(true);
  const [cardData, setCardData] = useState([]);

  // Here, we will hit backend server, for getting data
  useEffect(() => {
    fetch("/api/cats")
    .then((res)=> res.json())
    .then((data)=>{
      console.log(data);
      setCardData(data);
      setShowSpinner(false);
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
