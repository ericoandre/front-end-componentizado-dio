import React from 'react'
import * as S from "./styled";

import Header from "../header";

export default function Layout({children}) {
    
    return (
        <S.Conteiner>
            <Header /> 
            {children}                    
        </S.Conteiner>
    )
}
