
import { useState } from 'react';
import './App.css';


const foodData = {
  Indian: [
    { name: "Chhole Bhature", rating: "4/5" },
    { name: "Kulche", rating: "3.5/5" },
    {
      name: "Pav Bhaji",
      rating: "5/5"
    },
    {
      name: "Masala Dosa",
      rating: "4.5/5"
    }
  ],

  Italian: [
    {
      name: "Pizza",
      rating: "5/5"
    },
    {
      name: "Pasta",
      rating: "4.5/5"
    }
  ],
  Chinese: [
    {
      name: "Hakka Noodles",
      rating: "3.5/5"
    },
    {
      name: "Spring Rolls",
      rating: "5/5"
    }
  ]
};


function App() {
const[food, setFood]=useState("Indian");
  const inputData = foodData[food];

  const foodList = Object.keys(foodData);

  const clickVariety = (food) => {
    setFood(food);
  };



  return (
    <div className="App">
            <h1>
        <span style={{ fontSize: "2rem" }}>🍔 </span>Delicious Food
      </h1>
      <p>Checkout my favourite food. Select a variety to get started</p>

      <div>
        {foodList.map((food) => (
          <button
            style={{
              margin: "1rem 0.5rem",
              cursor: "pointer",
              padding: "0.5rem 1rem ",
              borderRadius: "1rem",
              border: "1px solid black",
              background: "#cbd5e1"
            }}
            onClick={() => clickVariety(food)}
          >
            {food}
          </button>
        ))}
      </div>
      <hr />
      <div >
        <ul >
          {inputData.map((dish) => (
            <li
              key={dish.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #9ca3af",
               // width: "70%",
                margin: "1rem ",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "large" }}> {dish.name} </div>
              <div style={{ fontSize: "medium" }}> {dish.rating} </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
