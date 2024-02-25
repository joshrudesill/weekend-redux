import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Feedback({ message, inputMessage }) {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedback[inputMessage]);
  const history = useHistory();
  return (
    <form>
      <h1>{message}</h1>
      <button type='button' onClick={() => history.goBack()}>
        Back
      </button>
      <label htmlFor='i'>
        {inputMessage.charAt(0).toUpperCase() + inputMessage.slice(1)}
      </label>
      <input
        id='i'
        type='number'
        min={1}
        max={5}
        value={feedback}
        onChange={(e) =>
          dispatch({
            type: "SET_FEEDBACK",
            payload: { target: inputMessage, data: Number(e.target.value) },
          })
        }
      />
    </form>
  );
}
