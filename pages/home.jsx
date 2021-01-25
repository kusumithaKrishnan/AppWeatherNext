import {ActionTypes} from '../store/actions/actions'
import { useDispatch } from 'react-redux'

import WithProvider from '../src/HOC/withProvider'



const Home = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button className="bg-red-500 hover:bg-red-700 focus:outline-none" onClick={() => dispatch({ type: ActionTypes.INC_COUNTER })}>Click Me</button>
        </div>
    )
}

export default WithProvider(Home)