import { useState } from "react";


function App() {
const [color, setColor] = useState("#252525")
  return (
    <div className="h-screen w-full duration=200"
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => {setColor("red")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => {setColor("green")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => {setColor("blue")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => {setColor("yellow")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button
          onClick={() => {setColor("limegreen")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "limegreen"}}
          >Lime Green</button>
          <button
          onClick={() => {setColor("orange")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
          <button
          onClick={() => {setColor("violet")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "violet"}}
          >Violet</button>
          <button
          onClick={() => {setColor("gray")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "gray"}}
          >Gray</button>
          <button
          onClick={() => {setColor("slateblue")}}
          className="outline-none font-serif px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "slateblue"}}
          >Slate Blue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
