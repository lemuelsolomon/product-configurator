import { Canvas } from '@react-three/fiber'
import { Environment, Center, OrbitControls, useGLTF  } from '@react-three/drei'

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

function Shirt({ props }) {
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  )
}

useGLTF.preload('/shirt_baked_collapsed.glb')