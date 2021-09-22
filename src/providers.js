import React from 'react';
import GithubProvider from "./provider/githubProvider";
import { ResetCSS } from "./global/reset-css";
import App from './App';

export default function Providers() {
    return (
        <main>
            <GithubProvider>
                <ResetCSS />
                <App />
            </GithubProvider>
        </main>
    )
}
