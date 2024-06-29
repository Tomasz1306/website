import C from '../public/icons/c.png'
import C__ from '../public/icons/c__.png'
import {Image} from "@nextui-org/react";


export default function AboutPage() {
    return (
      <div className="h-screen bg-gradient-to-b from-gradientGreen to-black">
        <div className="flex flex-row justify-center space-x-40">    
        <div className="mt-20">
          <Image className="" isZoomed  width={50} src={C.src} />
          <Image className="" isZoomed  width={50} src={C__.src} />
        </div>
        </div>
      </div>
    );
  }
  