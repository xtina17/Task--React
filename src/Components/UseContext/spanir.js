import React, {createContext, useEffect, useContext, useState} from 'react';

const DataContext = createContext()



const DataProvider = ({children}) => {

    const [state,setState] = useState([
        {id:1 , name:'Mercedes'},
        {id:2 , name:'Audi'},
        {id:3 , name:'Rolls-Royce'},
    ])

    const newId = (skill) =>{
        setState([...state , skill])
    }
    const deleteSkills = (id) => {
        setState(state.filter(s => s.id !== id
        ))
    }

    return <DataContext.Provider value= {{state , newId ,deleteSkills  }} >
        {children}
    </DataContext.Provider>
};

const useData = () => {
    return useContext(DataContext)
}

export {useData, DataProvider, };

