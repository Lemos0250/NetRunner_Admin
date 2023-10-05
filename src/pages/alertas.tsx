import Layout from "@/components/template/Layout"; 
import useAppData from "@/data/hook/useAppData";

export default function Alertas() {

    const {alternarTema}  = useAppData()

    return (
        <Layout titulo="Alertas" 
        subtitulo="Aqui você irá gerenciar as suas notificações">
            <button onClick={alternarTema} >Alternar Tema</button>
        </Layout>
    )
}     