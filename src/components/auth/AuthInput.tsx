
interface AuthInputProps {
    label: string
    valor: any 
    obrigatorio?: boolean 
    naoRenderizarQuando?: boolean
    tipo?: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void
}


export default function AuthInput(props: AuthInputProps) {
    return props.naoRenderizarQuando? null :(
        <div className="flex flex-col mt-3 text-hite">
            <label>{props.label}</label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
                className={`
                    px-4 py-3 rounded-lg
                    bg-gray-200
                    border focus:border-blue-500
                    focus: outline-none focus:bg-white
                    text-black
                `}
            />
        </div>
    )
}