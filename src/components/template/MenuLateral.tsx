import { IconeBell, IconeCasa, IconeExit, IconeSettings } from "../icons"
import MenuItem from "./Menuitem"
import Logo from "./Logo"

export default function MenuLateral() {
    return (
        <aside className={`
        flex flex-col
        dark:bg-gray-900
        bg-gray-200 text-gray-700
        `}>
            <div className={`
                flex flex-col items-center justify-center
                h-20 w-20
                bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo/>
            </div>

            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeSettings}/>
                <MenuItem url="/alertas" texto="Alertas" icone={IconeBell}/>
            </ul>
            <ul>
                <MenuItem onClick={() => console.log('logout')} texto="Sair" icone={IconeExit}
                className={`
                    text-red-600 dark:text-red-400
                    hover:bg-red-400 hover:text-white
                    dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
            
            
       
    )
}