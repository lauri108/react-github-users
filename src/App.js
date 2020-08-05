import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CardList from "./components/CardList";
import PositionFetcher from "./components/PositionFetcher";
import DragDropArea from "./components/DragDropArea";

function App() {
  const [cards, setCards] = useState([]);
  const addNewCard = (card) => {
    setCards([...cards, card]);
  };
  return (
    <div>
      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Search a GitHub User
      </h1>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
      <PositionFetcher />

      <h1 className="pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900">
        Upload your CSV
      </h1>
      <DragDropArea />
    </div>
  );
}

export default App;
