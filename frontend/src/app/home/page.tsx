
import {Image} from "@nextui-org/react";

import HackerImage from '../public/images/image_hacker.png'

export default function Home() {
    return (
      <div className="h-screen bg-gradient-to-b from-gradientGreen to-black">
        <div className="blur-lg">
        <Image className="" isZoomed isBlurred width={240} src={HackerImage.src} />
        </div>
        
      </div>
      
    );
  }
  