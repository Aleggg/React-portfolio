import React, { Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Plane = React.forwardRef((props, ref) => {
	const z = props.z;
	const y = props.y;
	const x = props.x;
	const rotationX = props.rotationX;
	const textureMap = useLoader(TextureLoader, 'grid.png');
	return (
		<mesh ref={ref} rotation={[rotationX, 0, 0]} position={[x, y, z]}>
			<planeBufferGeometry arrach='geometry' args={[1, 2, 24, 24]} />
			<meshStandardMaterial map={textureMap} />
		</mesh>
	);
});

const Light = () => {
	return (
		<>
			<ambientLight intensity={5} />
		</>
	);
};
const Landscape = () => {
	const speed = 0.1;

	const planeRef1 = React.useRef();
	const planeRef2 = React.useRef();
	const planeRightRef1 = React.useRef();
	const planeRightRef2 = React.useRef();
	const planeRefTop1 = React.useRef();
	const planeRefTop2 = React.useRef();
	const planeTopRightRef1 = React.useRef();
	const planeTopRightRef2 = React.useRef();
	const planeLeftRef1 = React.useRef();
	const planeLeftRef2 = React.useRef();
	const planeTopLeftRef1 = React.useRef();
	const planeTopLeftRef2 = React.useRef();

	useFrame((state) => {
		// Update plane position
		planeRef1.current.position.z = (state.clock.elapsedTime * speed) % 2;
		planeRef2.current.position.z = ((state.clock.elapsedTime * speed) % 2) - 2;
		planeRefTop1.current.position.z = (state.clock.elapsedTime * speed) % 2;
		planeRefTop2.current.position.z =
			((state.clock.elapsedTime * speed) % 2) - 2;
		planeRightRef1.current.position.z = (state.clock.elapsedTime * speed) % 2;
		planeRightRef2.current.position.z =
			((state.clock.elapsedTime * speed) % 2) - 2;
		planeTopRightRef1.current.position.z =
			(state.clock.elapsedTime * speed) % 2;
		planeTopRightRef2.current.position.z =
			((state.clock.elapsedTime * speed) % 2) - 2;
		planeLeftRef1.current.position.z = (state.clock.elapsedTime * speed) % 2;
		planeLeftRef2.current.position.z =
			((state.clock.elapsedTime * speed) % 2) - 2;
		planeTopLeftRef1.current.position.z = (state.clock.elapsedTime * speed) % 2;
		planeTopLeftRef2.current.position.z =
			((state.clock.elapsedTime * speed) % 2) - 2;
	});

	return (
		<>
			<Plane ref={planeRef1} z={0.15} rotationX={-Math.PI * 0.5} y={0} x={0} />
			<Plane ref={planeRef2} z={-1.85} rotationX={-Math.PI * 0.5} y={0} x={0} />
			<Plane
				ref={planeRefTop1}
				z={0.15}
				rotationX={Math.PI * 0.5}
				y={0.2}
				x={0}
			/>
			<Plane
				ref={planeRefTop2}
				z={-1.85}
				rotationX={Math.PI * 0.5}
				y={0.2}
				x={0}
			/>
			<Plane
				ref={planeRightRef1}
				z={0.15}
				rotationX={-Math.PI * 0.5}
				y={0}
				x={1}
			/>
			<Plane
				ref={planeRightRef2}
				z={-1.85}
				rotationX={-Math.PI * 0.5}
				y={0}
				x={1}
			/>
			<Plane
				ref={planeTopRightRef1}
				z={0.15}
				rotationX={Math.PI * 0.5}
				y={0.2}
				x={1}
			/>
			<Plane
				ref={planeTopRightRef2}
				z={-1.85}
				rotationX={Math.PI * 0.5}
				y={0.2}
				x={1}
			/>
			<Plane
				ref={planeLeftRef1}
				z={0.15}
				rotationX={-Math.PI * 0.5}
				y={0}
				x={-1}
			/>
			<Plane
				ref={planeLeftRef2}
				z={-1.85}
				rotationX={-Math.PI * 0.5}
				y={0}
				x={-1}
			/>
			<Plane
				ref={planeTopLeftRef1}
				z={0.15}
				rotationX={Math.PI * 0.5}
				y={0.2}
				x={-1}
			/>
			<Plane
				ref={planeTopLeftRef2}
				z={-1.85}
				rotationX={Math.PI * 0.5}
				y={0.2}
				x={-1}
			/>
		</>
	);
};

const Linear = () => {
	return (
		<Suspense>
			<Canvas
				style={{
					position: 'absolute',
					display: 'block',
					top: 0,
					left: 0,
					zIndex: -1,
					outline: 'none',
				}}
				camera={{ fov: 75, near: 0.01, far: 20, position: [0, 0.08, 1.1] }}
			>
				<color attach='background' args={['#000000']} />
				<fog attach='fog' args={['#000000', 1, 2.5]} />
				<Light />
				{/* <Plane z={0.15} /> */}
				<Landscape />
			</Canvas>
		</Suspense>
	);
};

export default Linear;
