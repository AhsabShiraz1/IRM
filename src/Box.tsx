import { useFrame } from "@react-three/fiber"
import { Interactive } from "@react-three/xr"
import { Dispatch, SetStateAction, useRef, useState } from "react"
import { Mesh } from "three";

interface BoxProps {
  position: [number, number, number];
  level: number;
  setCurrentLevel: Dispatch<SetStateAction<number>>;
  opacity: number;
}

export default function Box({ level, setCurrentLevel,opacity, ...props }: BoxProps) {
  const ref = useRef<Mesh | null>(null)
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame((_state, delta) => {
    if (ref?.current) {
      ref.current.rotation.y += delta;
    }
  });

  const handleSelectEnd = () => {
    click(!clicked);
    if (!clicked) {
      setCurrentLevel(level);
    }
  }

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <Interactive
      onHover={() => hover(true)}
      onBlur={() => hover(false)}
      onSelectEnd={handleSelectEnd}
    >
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1 : 0.5}
        onClick={handleSelectEnd}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        material-opacity={opacity}
        material-transparent={opacity < 1}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[1, 1, 1]}/>
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    </Interactive>
  )
}