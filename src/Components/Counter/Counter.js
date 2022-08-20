import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./CounterReducer";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body bd-example">
          <h2>Count - {count}</h2>
          <button
            className="btn btn-primary mr-1"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="btn btn-warning"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button className="btn btn-danger" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
