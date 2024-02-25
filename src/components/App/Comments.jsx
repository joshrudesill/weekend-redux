import { useDispatch, useSelector } from "react-redux";

export default function Comments() {
  const dispatch = useDispatch();
  const feedback = useSelector((s) => s.feedback.comments);
  return (
    <div>
      <h1>Any other comments?</h1>
      <textarea
        value={feedback}
        onChange={(e) =>
          dispatch({
            type: "SET_FEEDBACK",
            payload: { target: "comments", data: e.target.value },
          })
        }
      ></textarea>
    </div>
  );
}
