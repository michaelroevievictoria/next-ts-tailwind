import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, selectValue } from "../../../redux/slices/counter"

const ReduxTestRun = () => {
    const count = useSelector(selectValue)
    const dispatch = useDispatch()

    return (
        <>
            <main className="flex w-full flex-1 flex-col items-col items-center justify-center px-20 text-center">
                <h1>The Value of count is {count} </h1>
                <button onClick={() => dispatch(increment())} className="w-full h-10 bg-green-400/50" > Increment</button>
                <button onClick={() => dispatch(decrement())} className="w-full h-10 bg-red-400/50" > Decrement</button>
            </main>
        </>
    )
}

export default ReduxTestRun