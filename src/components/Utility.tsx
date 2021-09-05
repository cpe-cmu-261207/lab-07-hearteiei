import {clearcolor, randomColor } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick = {() => clearcolor()}>Clear</button>
      <button className="w-36" onClick = {() => randomColor()}>Random color</button>
    </div>
  )
}

export default Utility