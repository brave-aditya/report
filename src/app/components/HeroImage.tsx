import Image from "next/image";

export default function HeroImage() {
    return( 
    <div className="relative w-[100%] h-[100%]">
     <Image
               src="/school.svg"
               alt="Background"
               layout="fill"
               objectFit="contain"
               className=" "
             />
    </div>);
  }