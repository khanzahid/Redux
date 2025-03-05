import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counterSlice";
import {useRef} from "react";

export const Calculator = () => {
    const addElementVal = useRef();
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    const handleIncrement = () => {
        dispatch(counterActions.increment())
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement())
    }
    const handleAddition = () => {
        dispatch(counterActions.add(addElementVal.current.value))
        addElementVal.current.value = ""
    }
    const handleSubtraction = () => {
        dispatch(counterActions.subtract(addElementVal.current.value))
        addElementVal.current.value = ""
    }
    const handleDivision = () => {
        dispatch(counterActions.divide(addElementVal.current.value))
        addElementVal.current.value = ""
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Calculator</h1>
                    <hr/>
                    <div className="row">
                        <div className="col-3">
                            <input type="text" id="display" value={counter} disabled className="form-control text-end" readOnly/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-1">
                            <button id="increment" className="btn btn-success btn-block" onClick={handleIncrement}>+</button>
                        </div>
                        <div className="col-1">
                            <button id="decrement" className="btn btn-danger btn-block" onClick={handleDecrement}>−</button>
                        </div>
                        <div className="col-2 d-flex">
                            <input type="number" id="value" className="form-control" ref={addElementVal}/>
                            <button id="add" className="btn btn-primary btn-block" onClick={handleAddition}>Add</button>
                        </div>
                        <div className="col-1">
                            <button id="subtract" className="btn btn-warning btn-block" onClick={handleSubtraction}>Subtract</button>
                        </div>
                        <div className="col-1">
                            <button id="divide" className="btn btn-info btn-block" onClick={handleDivision}>Divide</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
