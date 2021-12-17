import React, {  useState } from 'react'

export function FruitsList({fruits,setFruits}) {
    const del = (index) => {
        const temp = [...fruits];
        temp.splice(index, 1)
        setFruits(temp)
    }
    return (
        <div>
            <ul>
                {
                    fruits.map((item, index) => {
                        return <li key={index} onClick={() => { del(index) }}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
export function FruitAdd({addFruit}) {
    const [name, setName] = useState(""); 
    return (
        <div>      
            <input type="text" value={name} onChange={e => setName(e.target.value)} />      
            <button onClick={() => addFruit(name)}>add</button>
        </div>);
}