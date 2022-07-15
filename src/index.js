import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {SkillsProviders} from "./components/Providers/skillsProvider";


ReactDOM.render(
    <BrowserRouter>
        <SkillsProviders>
            <App/>
        </SkillsProviders>
    </BrowserRouter>,
    document.getElementById('root')
);

