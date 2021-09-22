import React, { createContext , useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    loading:false,
    user:{},
    repositorios:[],
    starred:[]
});

export default function  GithubProvider ({children}) {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading:false,
        user:{
            id: undefined,
            login: undefined,
            name: undefined,
            avatar: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositorios:[],
        starred:[]
    });


    const getUser = (username) =>{
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get(`users/${username}`).then( ({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                hasUser: true,
                user: {
                    id: data.id,
                    avatar: data.avatar_url,
                    login: data.login,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                },
            }))
        }).finally(() => { 
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        });
    };
    const getUserRepo = (username) =>{
        api.get(`users/${username}/repos`).then( ({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                repositorios:data,
            }))
        });
    };

    const getUserEstrlas = (username) =>{
        api.get(`users/${username}/starred`).then( ({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                starred: data,
            }))
        });
    };
    const contextValue = {
        githubState,
        getUser: useCallback((username)=> getUser(username),[]),
        getUserRepo: useCallback((username) => getUserRepo(username),[]),
        getUserEstrlas: useCallback((username) => getUserEstrlas(username),[])
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};