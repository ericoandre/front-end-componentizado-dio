import React from "react";
import * as S from "./styled";

export default function ItemRepositorio({name, linkToRepo, fullname}) {
    return (
        <S.Conteiner>
            <S.TituloConteiner>{name}</S.TituloConteiner>
            <S.NomeConteiner>full name:</S.NomeConteiner>
            <S.LinkConteiner href={linkToRepo} target="_blank" rel="noreferrer">{fullname}</S.LinkConteiner>
        </S.Conteiner>
    )
}
