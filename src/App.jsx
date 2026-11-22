import { Canvas } from '@react-three/fiber'
import {
  OrbitControls, Environment, Float,
  MeshDistortMaterial, ContactShadows,
} from '@react-three/drei'

function Blob() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh>
        <icosahedronGeometry args={[1.4, 64]} />
        <MeshDistortMaterial
          color="#7c3aed" distort={0.35} speed={2}
          roughness={0.1} metalness={0.6}
        />
      </mesh>
    </Float>
  )
}

export default function App() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 40 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Blob />
          <ContactShadows position={[0, -2, 0]} opacity={0.4} blur={2.5} scale={10} />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="pointer-events-none relative z-10 flex h-full flex-col justify-end p-8 text-white md:p-16">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-violet-300">
          Jay Karikal · 3D Web Studio
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-7xl">
          Websites your customers can touch.
        </h1>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="pointer-events-auto mt-8 w-fit rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
        >
          Get a free preview →
        </a>
      </div>
    </main>
  )
}