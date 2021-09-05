import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] 
  selectedColor: string
}

const colorSet: string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E',]
//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectedColor: "#FFFFFF"
})

export const setSelectedColor = (color: string) => {
  PixelPainterStore.update(
    s => { s.selectedColor = color }
  )
}

export const clearcolor = () => {
  PixelPainterStore.update(
    s => {
      for (let i = 0; i < 16; i++) {
        s.canvas[i] = []
        for (let j = 0; j < 16; j++) {
          s.canvas[i].push('#FFFFFF');
        }
      }
    }
  )
}
export const randomColor = () => {
  PixelPainterStore.update(s => {
    for (let i = 0; i < 16; i++) {
      s.canvas[i] = []
      for (let j = 0; j < 16; j++) {
        s.canvas[i].push(colorSet[Math.floor(Math.random() * 12)]);
      }
    }
  })
}

export const setColor = (column: number, row: number) => {
  PixelPainterStore.update(s => {
    s.canvas[column][row] = s.selectedColor;
  })
}


