import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/slice/counterSlice";

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div style={{ marginBottom: "12px" }}>{count}</div>
      <div style={{ marginBottom: "12px" }}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button
          style={{ marginLeft: "12px" }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <button
        // style={{ marginLeft: "12px" }}
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment by 10
      </button>
    </div>
  );
};

export default Counter;
