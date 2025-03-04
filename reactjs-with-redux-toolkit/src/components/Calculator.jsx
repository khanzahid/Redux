import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/store.js";

export const Calculator = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    const handleIncrement = () => {
        dispatch(counterActions.increment())
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement())
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
                        <div className="col-2">
                            <button id="increment" className="btn btn-success btn-block" onClick={handleIncrement}>+</button>
                        </div>
                        <div className="col-2">
                            <button id="decrement" className="btn btn-danger btn-block" onClick={handleDecrement}>−</button>
                        </div>
                        <div className="col-2">
                            <button id="add" className="btn btn-primary btn-block">Add</button>
                        </div>
                        <div className="col-2">
                            <button id="subtract" className="btn btn-warning btn-block">Subtract</button>
                        </div>
                        <div className="col-2 mt-2">
                            <button id="divide" className="btn btn-info btn-block">Divide</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
