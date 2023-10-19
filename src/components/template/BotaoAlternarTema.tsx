import { IconeCyberpunkSun, IconeMoon, IconeSun } from "../icons"
interface BotaoAlternarTemaProps {
    tema: string | undefined
    alternarTema: (() => void) | undefined
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps) {
    
    return props.tema === 'dark' ? (

        <div onClick={props.alternarTema} className={`
        hidden sm:flex flex-row items-center cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-8 p-1 rounded-full gap-2
        `}>
            
            <div className={`
                flex items-center justify-center
                bg-white text-yellow-600
                w-6 border rounded-full 
                transition ease-in-out
            `}>
                {IconeCyberpunkSun()}
            </div>
            <div className={`
            hidden lg:flex items-center
            text-white
            `}>
                <span>Claro</span>
            </div>
            
        </div>
    ) : (
        
        <div onClick={props.alternarTema} className={`
        hidden sm:flex flex-row items-center justify-end cursor-pointer
        bg-gradient-to-r from-gray-500 to-yellow-900
        w-14 lg:w-24 h-8 p-1 rounded-full border gap-2
        `}>

        <div className={`
            hidden lg:flex items-center 
            text-gray-300
            `}>
            <span>Escuro</span>
        </div>
            
        <div className={`
            flex items-center justify-center
            bg-black text-yellow-300
            w-6 h-6 border rounded-full
            transition ease-in-out
            `}>
                {IconeMoon(4)}
            </div>
            
            
        </div>
    )
}