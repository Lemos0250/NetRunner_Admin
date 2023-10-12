import AuthInput from "../components/auth/AuthInput"
import { IconeWarning } from "../components/icons"
import { SetStateAction, useState } from "react"
import Image from "next/image"
import Fundo from '../../public/V_Cyberpunk.png'
import Logo from '../../public/Logo.png'
import useAuth from "../data/hook/useAuth"

export default function Autenticacao() {
    
    const { usuario, loginGoogle} = useAuth()

    async function loginGoogle() {
        console.log('Login google...')
    }
    
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

    <div className="flex flex-rol h-screen items-center justify-center bg-black text-white">
        
        <div className="hidden md:block md:w-1/2 lg:w-2/3 h-full">
            <Image src={Fundo} alt="BackGround" width={1000} className="h-full object-cover"/>
        </div>
        
        <div className="m-10 mt-0 w-full md:w-1/2 lg:w-1/3">

        <div className="flex items-center justify-center m-[5%]">
            <Image src={Logo} alt="Logo" width={300} height={100}/>
        </div>

            <h1 className={`
            flex justify-center
            text-3xl font-bold mb-5
            `}>
                {modo === 'login' ? <a className="text-[#FCEE09] text-3xl">Bem Vindo NetRunner</a> : <a className="text-[#FCEE09] text-3xl">Cadastre-se na Plataforma</a>}
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

            {modo === 'login' ? (
            <div></div>
        ) : (
            <AuthInput
                label="Confirmação de Senha"
                tipo="email"
                valor={email}
                valorMudou={setEmail}
                naoRenderizarQuando ={false}
            />
        )
        } 

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
                <p className="mt-[3%] flex justify-center">
                    Não é de Night City ?...
                    <a onClick={() => setModo('cadastro')} className={`
                    text-[#00F0FF] hover-text-blue-700 font-semibold 
                    cursor-pointer
                    `}>  Embarque na cidade</a>
                </p>

            ) : (

                <p className="mt-[3%] flex justify-center">
                    Já Mora em Night City ?...
                    <a onClick={() => setModo('login')} className={`
                    text-blue-500 hover-text-blue-700 font-semibold 
                    cursor-pointer
                    `}> Então já entra </a>
                </p>
            )}
        </div>
    </div>
    )
}