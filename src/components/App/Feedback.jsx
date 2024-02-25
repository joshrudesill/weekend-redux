import { useDispatch, useSelector } from "react-redux";

export default function Feedback({ message, inputMessage }) {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state[inputMessage]);
  return (
    <>
      <h1>{message}</h1>
      <label htmlFor='i'>{inputMessage}</label>
      <input id='i' type='number' />
    </>
  );
}
