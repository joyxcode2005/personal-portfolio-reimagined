import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Individual cube component with proper Rubik's cube face colors
function RubiksCubePiece({ position, faceColors }) {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation
      meshRef.current.position.y =
        position[1] +
        Math.sin(state.clock.elapsedTime * 0.5 + position[0] + position[2]) *
          0.02;
    }
  });

  // Create materials for each face
  const materials = useMemo(() => {
    return [
      new THREE.MeshPhysicalMaterial({
        color: faceColors.right,
        roughness: 0.5,
        metalness: 0.4,
        clearcoat: 1.0,
        clearcoatRoughness: 0.2,
      }),
      new THREE.MeshPhysicalMaterial({
        color: faceColors.left,
        roughness: 0.5,
        metalness: 0.4,
        clearcoat: 1.0,
        clearcoatRoughness: 0.2,
      }),
      new THREE.MeshPhysicalMaterial({
        color: faceColors.top,
        roughness: 0.5,
        metalness: 0.4,
        clearcoat: 1.0,
        clearcoatRoughness: 0.2,
      }),
      new THREE.MeshPhysicalMaterial({
        color: faceColors.bottom,
        roughness: 0.5,
        metalness: 0.4,
        clearcoat: 1.0,
        clearcoatRoughness: 0.2,
      }),
      new THREE.MeshPhysicalMaterial({
        color: faceColors.front,
        roughness: 0.5,
        metalness: 0.4,
        clearcoat: 1.0,
        clearcoatRoughness: 0.2,
      }),
      new THREE.MeshPhysicalMaterial({
        color: faceColors.back,
        roughness: 0.5,
        metalness: 0.4,
        clearcoat: 1.0,
        clearcoatRoughness: 0.2,
      }),
    ];
  }, [faceColors]);

  return (
    <mesh ref={meshRef} position={position} material={materials}>
      <boxGeometry args={[0.32, 0.32, 0.32]} />
    </mesh>
  );
}

// Main Rubik's cube structure
interface CubePiece {
  key: string;
  position: number[];
  faceColors: {
    right: string;
    left: string;
    top: string;
    bottom: string;
    front: string;
    back: string;
  };
}

function RubiksCube({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate 3x3x3 Rubik's cube with proper face colors
  const cubes = useMemo(() => {
    const cubeArray: CubePiece[] = [];
    const size = 5; // Correct size for authentic 3x3x3 Rubik's cube
    const spacing = 0.35;
    const offset = ((size - 1) * spacing) / 2;

    // Theme-specific face colors
    const lightModeColorA = "#111111"; // dark face
    const lightModeColorB = "#dddddd"; // light face

    const darkModeColorA = "#ffffff"; // bright face
    const darkModeColorB = "#444444"; // dark grey face

    const getColor = (isBlackCube: boolean) => {
      if (isDark) {
        return isBlackCube ? darkModeColorA : darkModeColorB;
      } else {
        return isBlackCube ? lightModeColorA : lightModeColorB;
      }
    };

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          const position = [
            x * spacing - offset,
            y * spacing - offset,
            z * spacing - offset,
          ];

          const isBlackCube = (x + y + z) % 2 === 0;
          const cubeColor = getColor(isBlackCube);

          const faceColors = {
            right: cubeColor,
            left: cubeColor,
            top: cubeColor,
            bottom: cubeColor,
            front: cubeColor,
            back: cubeColor,
          };

          cubeArray.push({
            key: `${x}-${y}-${z}`,
            position,
            faceColors,
          });
        }
      }
    }

    return cubeArray;
  }, [isDark]);

  // Smooth rotation animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.y += 0.0005;
      groupRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.15) * 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube) => (
        <RubiksCubePiece
          key={cube.key}
          position={cube.position}
          faceColors={cube.faceColors}
        />
      ))}
    </group>
  );
}

const ThreeDModal = ({ isDark }: { isDark: boolean }) => {
  return (
    <div className="absolute inset-0 mx-auto pointer-events-none flex items-center">
      {/* Left side cube container */}
      <div className="w-full h-full absolute inset-0 mx-auto">
        <Canvas
          camera={{
            position: [2.5, 2.5, 2.5],
            fov: 45,
          }}
          gl={{
            antialias: true,
            alpha: true,
            premultipliedAlpha: false,
          }}
        >
          {/* Subtle lighting for background effect */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 3]} intensity={0.8} />
          <pointLight position={[-2, 2, -2]} intensity={0.3} />

          {/* Main Rubik's Cube */}
          <RubiksCube isDark={isDark} />

          {/* Subtle camera controls */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default ThreeDModal;
