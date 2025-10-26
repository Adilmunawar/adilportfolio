"use client";
import React, { Suspense, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import './ReactiveTileBackground.css';

interface TileProps {
  position: [number, number, number];
  mouse: React.MutableRefObject<THREE.Vector2>;
}

const TILE_COLOR_DARK = "#0a0a0a";
const TILE_COLOR_HOVER = "#00ffff"; // cyber-cyan
const TILE_GAP = 0.15;
const TILE_SIZE = 1.0;

function Tile({ position, mouse }: TileProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const vec = new THREE.Vector3();
  const lightRef = useRef<THREE.PointLight>(null!);

  const posVec = useMemo(() => new THREE.Vector3(...position), [position]);
  const targetColor = useMemo(() => new THREE.Color(), []);
  const targetPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Calculate hover state
    const mousePos = new THREE.Vector3(mouse.current.x, mouse.current.y, 0);
    const dist = mousePos.distanceTo(posVec);
    const isHovered = dist < 1.25;
    setHovered(isHovered);

    // Animate Z position
    const targetZ = isHovered ? 0.5 : 0;
    targetPos.set(position[0], position[1], targetZ);
    meshRef.current.position.lerp(targetPos, 0.05);

    // Animate color
    targetColor.set(isHovered ? TILE_COLOR_HOVER : TILE_COLOR_DARK);
    (meshRef.current.material as THREE.MeshStandardMaterial).color.lerp(targetColor, 0.1);

    // Animate light
    if (lightRef.current) {
      lightRef.current.intensity = THREE.MathUtils.lerp(
        lightRef.current.intensity,
        isHovered ? 20.0 : 0.0,
        0.1
      );
      lightRef.current.position.z = meshRef.current.position.z + 0.5;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
    >
      <boxGeometry args={[TILE_SIZE, TILE_SIZE, 0.1]} />
      <meshStandardMaterial 
        color={TILE_COLOR_DARK} 
        metalness={0.9} 
        roughness={0.1} 
      />
      <pointLight 
        ref={lightRef} 
        color={TILE_COLOR_HOVER} 
        intensity={0.0} 
        distance={3} 
        decay={2}
      />
    </mesh>
  );
}

function Grid() {
  const { viewport } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));
  
  // Calculate grid count based on viewport
  const fullTileSize = TILE_SIZE + TILE_GAP;
  const cols = Math.ceil(viewport.width / fullTileSize) + 2;
  const rows = Math.ceil(viewport.height / fullTileSize) + 2;
  const startX = -((cols * fullTileSize) - TILE_GAP) / 2 + TILE_SIZE / 2;
  const startY = -((rows * fullTileSize) - TILE_GAP) / 2 + TILE_SIZE / 2;

  const tiles = useMemo(() => {
    const temp = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        temp.push(
          <Tile
            key={`${x}-${y}`}
            position={[startX + x * fullTileSize, startY + y * fullTileSize, 0]}
            mouse={mouse}
          />
        );
      }
    }
    return temp;
  }, [cols, rows, startX, startY, mouse]);
  
  const vec = new THREE.Vector3();

  return (
    <group
      onPointerMove={(e) => {
        // Project mouse screen-space coords to world-space
        mouse.current.set(
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1
        );
        vec.set(mouse.current.x, mouse.current.y, 0.5);
        vec.unproject(e.camera);
        vec.sub(e.camera.position).normalize();
        const distance = -e.camera.position.z / vec.z;
        const pos = e.camera.position.clone().add(vec.multiplyScalar(distance));
        mouse.current.set(pos.x, pos.y);
      }}
    >
      {tiles}
    </group>
  );
}

export default function ReactiveTileBackground() {
  return (
    <div className="reactive-tile-background">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 0, 5]} intensity={1.0} />
        <Suspense fallback={null}>
          <Grid />
        </Suspense>
      </Canvas>
    </div>
  );
}
