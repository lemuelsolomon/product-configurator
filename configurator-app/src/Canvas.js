import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls } from '@react-three/drei'

export const App = ({ position = [-1, 0, 2.5], fov = 25 }) => (
  <Canvas
    shadows
    camera={{ position, fov }}
    eventSource={document.getElementById('root')}
    eventPrefix="client">
    <ambientLight intensity={0.5} />
    <Environment preset="city" />

    <Center>
      <Shirt />
    </Center>
    <OrbitControls />
  </Canvas>
)

function Shirt() {
  return (
    <mesh>
      <boxGeometry args={[1.0, 0.5, 0.5]} />
      <meshNormalMaterial />
    </mesh>
  )
}