import React, { useEffect, useState } from 'react'

export default function HoocksPage() {
    // const date = new Date()
    const [date, setDate] = useState(new Date())
    const [fruits, setFruits] = useState(['apple', 'banana'])
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [date])
    const del = (index) => {
        const temp = [...fruits];
        temp.splice(index, 1)
        setFruits(temp)
    }
    return (
        <div>
            <h1>HoocksPage</h1>
            <p>{date.toLocaleTimeString()}</p>
            <FruitAdd onAdd={item => setFruits([...fruits, item])} />
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
function FruitAdd(props) {
    const [name, setName] = useState(""); return (
        <div>      
            <h2>增加⽔水果</h2>      
            <input type="text" value={name} onChange={e => setName(e.target.value)} />      
            <button onClick={() => props.onAdd(name)}>add</button>
        </div>);
}