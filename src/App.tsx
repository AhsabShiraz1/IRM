import './App.css'
import { Canvas } from '@react-three/fiber'



import XRScene from './XRScene'


function App() {

  return (
    <>
      <Canvas camera={{ position: [0, 1, 5] }} shadows dpr={[1, 1.5]} gl={{antialias : true}}>
        <XRScene/>
      </Canvas>
    </>
  )
}

export default App
