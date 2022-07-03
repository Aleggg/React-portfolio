import React from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const TEXTURE_PATH =
	'https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657168/blog/vaporwave-threejs-textures/grid.png';

const Plane = React.forwardRef((props, ref) => {
	const z = props.z;
	const textureMap = useLoader(TextureLoader, 'grid.png');
	return (
		<mesh ref={ref} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 0, z]}>
			<planeBufferGeometry arrach='geometry' args={[1, 2, 24, 24]} />
			<meshStandardMaterial map={textureMap} />
		</mesh>
	);
});

const Light = () => {
	const spotlight1Ref = React.useRef();
	const spotlight2Ref = React.useRef();

	spotlight1Ref.current?.target.position.set([-0.25, 0.25, 0.25]);
	spotlight2Ref.current?.target.position.set([0.25, 0.25, 0.25]);

	return (
		<>
			<ambientLight intensity={5} />
		</>
	);
};
const Landscape = () => {
	const terrain1Ref = React.useRef();
	const terrain2Ref = React.useRef();

	useFrame((state) => {
		// Update plane position
		terrain1Ref.current.position.z = (state.clock.elapsedTime * 0.15) % 2;
		terrain2Ref.current.position.z = ((state.clock.elapsedTime * 0.15) % 2) - 2;
	});

	return (
		<>
			<Plane ref={terrain1Ref} z={0.15} />
			<Plane ref={terrain2Ref} z={-2} />
		</>
	);
};
const Linear = () => {
	return (
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
	);
};

export default Linear;
