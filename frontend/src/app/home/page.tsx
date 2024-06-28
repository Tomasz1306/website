
import {Image} from "@nextui-org/react";

import HackerImage from '../public/images/image_hacker.png'

export default function Home() {
    return (
      <div className="h-screen bg-gradient-to-b from-gradientGreen to-black">
        <div className="flex flex-row justify-center space-x-40">

        <div className="blur-lg mt-10">
        <Image className="" isZoomed isBlurred width={340} src={HackerImage.src} />
        </div>     
        <div className=" mt-20">
        <p className="text-white text-4xl">HELLO, I'M TOMASZ</p>
        <p className="text-white text-1xl ">I am passionate programmer interested in not</p>
        <p className="text-white text-1xl ">only web development but also computer network</p>
        <p className="text-white text-1xl ">embedded systems, game programming and</p>
        <p className="text-white text-1xl ">everything related to IT. </p>
        </div>
        </div>
      </div>
      
    );
  }
  