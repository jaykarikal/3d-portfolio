import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Environment, Float, MeshDistortMaterial, ContactShadows,
} from '@react-three/drei'
import { MathUtils } from 'three'

function Blob() {
  const ref = useRef()
  const { viewport } = useThree()
  // Shrink a little on narrow (phone) screens
  const scale = Math.min(1, viewport.width / 5.5)

  // Gently turn the blob toward the mouse / finger
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, state.pointer.x * 0.8, 3, delta)
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, -state.pointer.y * 0.5, 3, delta)
  })

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.5}>
      <mesh ref={ref} scale={scale} position={[viewport.width > 7 ? 1.6 : 0, 0.3, 0]}>
        <icosahedronGeometry args={[1.4, 64]} />
        <MeshDistortMaterial
          color="#7c3aed" distort={0.35} speed={2}
          roughness={0.1} metalness={0.6}
        />
      </mesh>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 40 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <Blob />
      <ContactShadows position={[0, -2, 0]} opacity={0.35} blur={2.5} scale={10} />
      <Environment preset="city" />
    </Canvas>
  )
}
