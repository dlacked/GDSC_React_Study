import React, { useEffect, useState } from "react"

const CounterA = React.memo(({count}) => {

    useEffect(()=>{
        console.log(`counterA update`)
    })
    return <div>{count}</div>
})

const CounterB = ({obj}) => {

    useEffect(()=>{
        console.log(`counterB update`)
    })

    return <div>{obj.count}</div>
}

const areEqual = (prevProps, nextProps) =>{
    return prevProps.obj.count === nextProps.obj.count
}

const MemorizedCounterB = React.memo(CounterB, areEqual)

const OptimizeTest = () =>{

    const [count, setCount] = useState(1)
    const [obj, setObj] = useState({
        count: 1
    })

    return (
        <div style={{ padding: 50 }}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemorizedCounterB obj={obj} />
                <button onClick={()=>setObj({
                    count: obj.count,
                })}>B Button</button>
            </div>
        </div>
    )
}

export default OptimizeTest