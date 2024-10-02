import { useEffect, useState } from "react";

const commonFruits = [
  '🍎 apple',
  '🍌 banana',
  '🍒 cherry',
  '🍈 date',
  '🥭 mango',
  '🍇 grape',
  '🥝 honeydew',
  '🥥 coconut',
  '🍋 kiwi',
  '🍊 lemon',
  '🍉 warter melon',
  '🍊 orange',
  '🍑 peach',
];

const App = () => {
  const [fruits, setFruits] = useState([])
  const addFruit = () => {
    const newFruit = commonFruits[Math.floor(Math.random() * commonFruits.length)];
    setFruits([...fruits, newFruit])
  };

  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  )
}

export default App