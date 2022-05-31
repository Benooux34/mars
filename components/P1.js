import React, { Suspense, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, useProgress } from '@react-three/drei'

import { 
    BsFillArrowRightCircleFill
 } from "react-icons/bs";

import { 
    AiOutlinePlayCircle
 } from "react-icons/ai";


function Model() {

    const gltf = useLoader(GLTFLoader, '/model/scene.gltf')

    useEffect(() => {
        gltf.scene.scale.set(0.026, 0.026, 0.026)
        gltf.scene.position.set(0, 0.3, 0)
    })

    useFrame(({ clock }) => {
        gltf.scene.rotation.y = -clock.getElapsedTime() * 0.3
    })

    return <primitive object={gltf.scene} />
}

function Loader() {
    const { progress } = useProgress()
    return <Html className="text-white" center>{progress} % loaded</Html>
  }

function P1() {
  return (
    <div className="lg:flex lg:justify-between lg:items-center h-screen">
        <div className="lg:w-[50%] h-[55%] lg:h-[75%] mx-[50px] lg:ml-[200px] text-white">
            <h2 className="text-5xl mb-5">Humans live on mars, is it possible ?</h2>
            <span className="font-light text-lg">Humans live on the planet Mars, is it possible ? To see the possibility of humans living on the planet Mars, is it important to know the facts of the planet Mars first.</span>
            <div className="ml-[10px] lg:ml-0 mt-10 md:flex space-y-5 md:space-y-0 md:space-x-20">
                <div className="flex items-center space-x-3 cursor-pointer">
                    <div className="iconHover">
                        <BsFillArrowRightCircleFill fontSize={50} onMouseOver={({target})=>target.style.color="#fe3842"} onMouseOut={({target})=>target.style.color="white"} />
                    </div>
                    <span className="text-xl tracking-widest hover:underline">EXPLORE MARS</span>
                </div>
                <div className="flex items-center space-x-3 cursor-pointer">
                    <div className="iconHover">
                        <AiOutlinePlayCircle fontSize={40} onMouseOver={({target})=>target.style.color="#fe3842"} onMouseOut={({target})=>target.style.color="white"} />
                    </div>
                    <span className="text-xl tracking-widest hover:underline">WATCH VIDEO</span>
                </div>
            </div>
            <div className="hidden lg:mt-[50px] lg:flex">
                <div className="flex flex-col">
                    <span className="text-white font-light tracking-widest mb-5">01</span>
                    <span className="text-[15px] font-semibold">China started the exploration of mars</span> 
                    <span className="font-light text-md mt-1">The remotely controlled Chinese cruiser Zhurong drove the capsule line</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-light tracking-widest mb-5">02</span> 
                    <span className="text-[15px] font-semibold">7 facts of mars</span> 
                    <span className="font-light text-md mt-1">Mars is the fourth planet from the Sun. Apart from that, Mars is also the second</span>
                </div>
            </div>
        </div>  
        <div className="h-screen w-full lg:w-[50%]">
            <Canvas>
                <pointLight position={[-10, 10, 10]} intensity={0.6} />
                <ambientLight intensity={0.02} />
                <Suspense fallback={<Loader />}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    </div>
  )
}

export default P1