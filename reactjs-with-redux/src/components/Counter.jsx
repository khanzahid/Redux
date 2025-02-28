import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    const state = useSelector((state) => state.count);
    console.log("state is", state)
    const dispatch = useDispatch();

    const handleDispatch = () => {
        dispatch({type: "INCREMENT"})
    }
    return (
        <>
            <button className="btn" style={{backgroundColor: "skyblue", color: "white"}} onClick={handleDispatch}>
                {state}
            </button>
        </>
    )
}
