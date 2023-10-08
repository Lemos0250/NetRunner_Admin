import AuthInput from "@/components/auth/AuthInput"
import { IconeWarning } from "@/components/icons"
import { SetStateAction, useState } from "react"


export default function Autenticacao() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [erro, setErro] = useState(null)

    function exibirErro(msg: any, tempoEmSegundos = 5) {
        setErro(msg)
        setTimeout(() => setErro(null), tempoEmSegundos * 1000)
    }

    function submeter() {
        if(modo === 'login') {
            console.log('Login')
            exibirErro('Ocorreu um erro no Login!')
        } else {
            console.log('cadastrar')
            exibirErro('Ocorreu um erro no Cadastro!')
        }
    }

    return (

    <div className="flex flex-rol h-screen items-center justify-center bg-white text-black">
        
        <div className="hidden md:block md:w-1/2 lg:w-2/3">
            <img
                src="https://source.unsplash.com/random"
                alt="Imagem da Tela de Autenticação"
                className="h-screen w-full object-cover"
            />
        </div>
        
        <div className="m-10 w-full md:w-1/2 lg:w-1/3">
            <h1 className={`
            text-3xl font-bold mb-5
            `}>
                {modo === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
            </h1>

            {erro ? (
                <div className={`
                    flex item-center
                    bg-red-400 text-white 
                    py-3 px-5 my-2
                    border border-red-700 rounded-lg
                    `}>
                    {IconeWarning(6)}
                    <span className="ml-3">{erro}</span>
                </div>
            ) : false}

            <AuthInput
                label="Email"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
                obrigatorio
            />
            <AuthInput
                label="Senha"
                tipo="password"
                valor={senha}
                valorMudou={setSenha}
                obrigatorio
            />
            <AuthInput
                label="Confiramação de Senha"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
                naoRenderizarQuando ={false}
            />

            <button onClick={submeter} className={`
            w-full bg-indigo-500 hover:bg-indigo-400
            text-white rounded-lg px-4 py-3 mt-6
            `}>
                {modo === 'login' ? 'Entrar' : 'Cadastrar'}
            </button>

            <hr className="my-3 w-full border-gray-300 "></hr>

            <button onClick={submeter} className={`
            w-full bg-red-500 hover:bg-red-400
            text-white rounded-lg px-4 py-3 
            `}>
                Entrar com Google
            </button>

            {modo === 'login' ? (
                <p className="">
                    Novo por aqui ?
                    <a onClick={() => setModo('cadastro')} className={`
                    text-blue-500 hover-text-blue-700 font-semibold 
                    cursor-pointer
                    `}> Crie uma Conta gratuitamente</a>
                </p>

            ) : (

                <p className="">
                    Já faz parte da nossa comunidade ?
                    <a onClick={() => setModo('login')} className={`
                    text-blue-500 hover-text-blue-700 font-semibold 
                    cursor-pointer
                    `}> Entre com a sua credenciais</a>
                </p>
            )}
        </div>
    </div>
    )
}