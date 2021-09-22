import { useContext } from "react";
import { GithubContext } from "../provider/githubProvider";

export function  useGithub() {
    const {githubState, getUser, getUserRepo, getUserEstrlas} = useContext(GithubContext);
    return { githubState, getUser, getUserRepo, getUserEstrlas };
};