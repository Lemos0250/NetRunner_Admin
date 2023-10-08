import useAppData from "@/data/hook/useAppData"
import Image from "next/image"
import Logo_Main from "../../../public/Logo.Main-removebg-preview.png"


export default function Logo() {
    
    return (
        <div className={`
        flex flex-col items-center justify-center
        h-12 w-12 rounded-full
        bg-[#FCEE09]
        `}>

            <div>
                <Image src={Logo_Main} alt="Logo" width={200} height={200}/>
            </div>
        </div>
    )
}