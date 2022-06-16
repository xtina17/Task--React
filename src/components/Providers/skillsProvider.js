import React, {createContext, useContext, useState} from "react"

const SkillsContext = createContext({});

const SkillsProviders = ({children}) => {


    const [skills, setSkills] = useState([])
    const [sortSkills, setSortSkills] = useState([])

    const addSkills = (skill) => {
        setSkills([...skills, skill]);
    }
    const sortCards = (sort) => {
        setSortSkills(sort)
    }

    const deleteSkills = (id) => {
        setSkills(skills.filter(s => s.id !== id));
    }

    return (
        <SkillsContext.Provider
            value={{
                skills,
                sortSkills,
                addSkills,
                deleteSkills,
                sortCards
            }}>
            {children}
        </SkillsContext.Provider>
    )
}
const useSkills = () => {
    return useContext(SkillsContext);
}
export {SkillsProviders, useSkills};