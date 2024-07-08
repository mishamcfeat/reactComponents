import { useReducer } from 'react';
import { produce } from 'immer';
import Button from '../components/Button';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SET_VALUE_TO_ADD = 'SET_VALUE_TO_ADD';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            state.count = state.count + 1;
            return;
        case DECREMENT:
            state.count = state.count - 1;
            return;
        case ADD:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload
            return;
        default:
            return;
    }
};

function CounterPage() {
    const [state, dispatch] = useReducer(produce(reducer), { count: 0, valueToAdd: 0 });

    const handleChange = (e) => {
        dispatch({ type: SET_VALUE_TO_ADD, payload: parseInt(e.target.value || 0) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ADD });
    };

    return (
        <div className="m-3 border-2">
            <h1 className="text-lg p-2">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={() => dispatch({ type: INCREMENT })}>Increment</Button>
                <Button onClick={() => dispatch({ type: DECREMENT })}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="border-2 rounded m-2 p-2" type="number" value={state.valueToAdd || ''} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CounterPage;
