import Head from 'next/head'
import Image from 'next/image'
import loading  from '../../../public/CyberPunkLoading.gif'
import useAuth from '../../data/hook/useAuth'
import router from 'next/router'

export default function ForcarAutenticacao (props) {
    
    const { usuario , carregando } = useAuth()

    function rederizarConteudo() {
    return (
        <>
            <Head>
                <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                        if(!document.cookie?.includes("admin-Cyberpunk-auth")) {
                            window.location.href = "/autenticacao"
                        }

                        `
                    }}
                />
            </Head>
            {props.children}
        </>
    )
}

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center
                h-screen
            `}>
                <Image src={loading} alt="Loading" height={1000} width={1000} />
            </div>
        )
    }


    if (!carregando && usuario?.email) {
        return rederizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else { 
        router.push('/autenticacao')
        return null
    }
}