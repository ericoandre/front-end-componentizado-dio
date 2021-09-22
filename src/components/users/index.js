import React from "react";
import * as S from "./styled";

import { useGithub } from "../../hooks/githubHooks";

export default function User() {
    const { githubState } = useGithub();
    return(
        <S.Conteiner>
            <S.ImageConteiner src={githubState.user.avatar} alt='Avatar image' />
            <S.InfoUserConteiner>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.UserNameConteiner>
                        <h3>Username:</h3>
                        <a href={githubState.user.html_url} target="_blank" rel="noreferrer" >{githubState.user.login} </a>
                    </S.UserNameConteiner>
                    <S.UserGenericConteiner>
                        <h3>Company:</h3>
                        <span>{githubState.user.company} </span>
                    </S.UserGenericConteiner>
                    <S.UserGenericConteiner>
                        <h3>Location:</h3>
                        <span>{githubState.user.location} </span>
                    </S.UserGenericConteiner>
                    <S.UserGenericConteiner>
                        <h3>Blog:</h3>
                        <a href={githubState.user.blog} target="_blank" rel="noreferrer" >{githubState.user.blog}</a>
                    </S.UserGenericConteiner>
                </div>
                <S.StatusConteiner>
                    <div>
                        <h4>followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>following</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.StatusConteiner>
            </S.InfoUserConteiner>
        </S.Conteiner>
    );
};