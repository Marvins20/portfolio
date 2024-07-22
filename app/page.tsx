import Image from "next/image";
import bg from "../public/About-desktop-full.png"
import RenderModel from "@/components/RenderModel";
import DeskModel from "@/components/models/DeskModel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill className="w-full h=full object-cover object-center opacity-25"/>
      
      <div className="w-full h-screen">
        <RenderModel className={"opacity-100"}>
          <DeskModel />
        </RenderModel>
      </div>
    </main>
  );
}
