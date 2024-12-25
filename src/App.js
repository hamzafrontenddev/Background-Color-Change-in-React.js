import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState();

  // useEffect کا استعمال کرتے ہوئے body کا رنگ تبدیل کریں
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); // جب color تبدیل ہو تو یہ چلتا ہے

  return (
    <div>
      <nav>
        <button className="red" onClick={() => setColor("red")}>Red</button>
        <button className="green" onClick={() => setColor("green")}>Green</button>
        <button className="blue" onClick={() => setColor("blue")}>Blue</button>
        <button className="purple" onClick={() => setColor("purple")}>Purple</button>
        <button className="black" onClick={() => setColor("black")}>Black</button>
        <button className="orange" onClick={() => setColor("orange")}>Orange</button>
        <button className="pink" onClick={() => setColor("pink")}>Pink</button>
        <button className="brown" onClick={() => setColor("brown")}>Brown</button>
        <button className="navy" onClick={() => setColor("navy")}>Navy</button>
        <button className="white" onClick={() => setColor("white")}>White</button>
        <button className="yellow" onClick={() => setColor("yellow")}>Yellow</button>
      </nav>
    </div>
  );
}

export default App;