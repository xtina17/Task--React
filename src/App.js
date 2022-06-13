import './App.css';
import React, { useState, useEffect } from 'react';
import PageProvider, {useData} from './Components/UseContext/spanir'

function App() {

  const {state , newId , deleteSkills} =useData();

    const [hi, setHi] = useState [1]


    const [value , setValue] = useState("");

  const  changeId =(id) => {
      setHi(2)
      console.log(hi)
    }



    console.log(value)
  return (
      <div className="App">
        {state.map(({id,name})=>{
          return <div key={id} >
            {name}
              <button onClick={()=>changeId(id)}>change</button>
              <button onClick={()=>deleteSkills(id)} >delete</button>

          </div>
        })}
        <br/>

        <input value={value} type="text" onChange={(e) => {setValue(e.target.value)}}   />

        <button onClick={() => {
            let a = 3
          if(value) {
            newId({
              id: Math.random(),
              name: value
            })
          }
          setValue("")
        }
        }>
          ADD
        </button>

      </div>
  );
}


export default App;
