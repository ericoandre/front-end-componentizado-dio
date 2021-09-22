import React, {useState} from "react";
import * as S from "./styled";

import { useGithub } from "../../hooks/githubHooks";

export default function Header() {
    const { getUser } =  useGithub();
    const [buscaState, setBuscaState] = useState();

    const submitGetUser = () =>{
        if (!buscaState) return;
        return getUser(buscaState)
    }
    return (
        <S.Conteiner>
            <input 
                type="text"
                placeholder="Pesquisa de user git..."
                onChange={(event) => setBuscaState(event.target.value)}
            />
            <button type="submit" onClick={submitGetUser}>
            <span>Buscar</span>
            </button>
        </S.Conteiner>
    )
}
