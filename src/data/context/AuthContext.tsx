import { createContext } from 'vm';
import firebase from '../../firebase/config';
import { useState } from 'react';
import { promises } from 'dns';
import Usuario from '../../model/Usuario';

interface AuthContextProps {
    usuario?: Usuario 
    loginGoogle?: () => Promise<void>
}


const AuthContext =  createContext<AuthContextProps>({any})

/*
    async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    
    return {
        uid: usuarioFirebase.uid ,
        nome: usuarioFirebase.displayName ,
        email:usuarioFirebase.email ,
        token ,
        provedor: usuarioFirebase.providerData[0].providerId ,
        imagemUrl: usuarioFirebase.photoURL
    }
}
*/

export function AuthProvider(props: any) {
    const [usuario, SetUsuario] = useState<Usuario>(null)
    
    async function loginGoogle(){

    }

    return (
        <AuthContext.Provider value={{
            usuario,
            loginGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext