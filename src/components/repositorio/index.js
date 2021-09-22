import React, { useState, useEffect } from "react";
import * as S from "./styled";

import ItemRepositorio from "../itemRepositorio";

import { useGithub } from "../../hooks/githubHooks";

export default function Repositorio(){
    const { githubState, getUserRepo, getUserEstrlas } = useGithub();
    const [temRepositorios, setRepositorios] = useState(false);

    useEffect(() => {
        if(githubState.user.login){
            getUserRepo(githubState.user.login);
            getUserEstrlas(githubState.user.login);
        }
        setRepositorios(githubState.repositorios);
    }, [githubState.user.login])

    return (
        <>
            {temRepositorios ? (
                <S.TabsConteiner
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <S.TabListConteiner>
                        <S.TabConteiner>Repositores</S.TabConteiner>
                        <S.TabConteiner>Starred</S.TabConteiner>
                    </S.TabListConteiner>
                    <S.TabPanelConteiner>
                        <S.ListaConteiner>
                            {githubState.repositorios.map(item =>(
                                <ItemRepositorio key={item.id} name={item.name} linkToRepo={item.full_name} fullname={item.full_name} />
                            ))}
                        </S.ListaConteiner>
                    </S.TabPanelConteiner>
                    <S.TabPanelConteiner>
                        <S.ListaConteiner>
                            {githubState.starred.map(item =>(
                                <ItemRepositorio key={item.id} name={item.name} linkToRepo={item.full_name} fullname={item.full_name} />
                            ))}
                        </S.ListaConteiner>
                    </S.TabPanelConteiner>
                </S.TabsConteiner>
            ) : (
                <></>
            )}
        </>
    );
}