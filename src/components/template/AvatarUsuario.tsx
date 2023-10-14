import Link from "next/link"
import useAuth from "../../data/hook/useAuth"
import Image from "next/image"

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario(props:AvatarUsuarioProps) {
    
    const { usuario } = useAuth()
    
    return (
        <Link href="/perfil">
            <img 
                src={usuario?.imagemUrl ?? '../../../public/V_image.jpg'} 
                width={100} height={100}
                alt="Avatar Usuário"
                className={`h-10 w-10 rounded-full cursor-pointer
                ${props.className}
                `} 
            />
        </Link>
    ) 
}