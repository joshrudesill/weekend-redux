import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Success() {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <h1>Success</h1>
      <button
        onClick={() => {
          dispatch({ type: "RESET_FEEDBACK" });
          history.push("/");
        }}
      >
        Start over
      </button>
    </>
  );
}
