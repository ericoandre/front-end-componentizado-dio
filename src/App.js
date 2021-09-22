import React from "react";

import Layout from "./components/layout";
import User from "./components/users";
import Repositorio from "./components/repositorio";
import NoSearch from "./components/noSearch";

import { useGithub } from "./hooks/githubHooks";

export default function App() {
  const { githubState } = useGithub();
   
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading ... </p> 
          ) : ( 
            <>
              <User/>
              <Repositorio/>
            </>
          )}
        </> 
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}