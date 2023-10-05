import MenuLateral from "./MenuLateral"

interface ConteudoProps {
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`
        flex flex-col
        mt-7
        text-gray-700
        dark:text-white
        `}>
            {props.children}
        </div>
    )
}