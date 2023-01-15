import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
// import styles from './Counter.module.css'

export function Counter() {
    const count = useSelector((state) => state.counterApp.value);
    const dispatch = useDispatch();

    const [inputVal, setInputVal] = useState(5);

    return (
        <div className='container'>
            <div className='row'>
                <div className=' m-2 text-center'>{count}</div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                    className="btn btn-primary"
                >
                    Increment by 1
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                    className="btn btn-secondary"
                >
                    Decrement by 1
                </button>

                <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="form-control" />
                <button
                    onClick={() => dispatch(incrementByAmount(inputVal))}
                    className="btn btn-success">Add Input Value</button>
            </div>
        </div>
    )
}