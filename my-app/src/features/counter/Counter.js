import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAsyncAmount, restAsyncAmount } from "./counterActions";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  // incrementAsync,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          id="add-button)"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(addAsyncAmount(incrementAmount))}
        >
          Add Async
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(restAsyncAmount(incrementAmount))}
        >
          Rest Async
        </button>
      </div>
      <button
        className={styles.button}
        aria-label="Reset"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
}
