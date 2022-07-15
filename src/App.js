import React, {useState} from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Skills from "./components/HeadersComponents/Skills/skills";
import Instructions from "./components/Instructions/instructions";
import {useSkills} from "./components/Providers/skillsProvider";

function App() {

    const {skills} = useSkills()

    return (
        <div className="App">
            <Header/>
            <main className='main'>
                <Skills array={skills}/>
                <Instructions/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
