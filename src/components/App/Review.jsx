import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Review() {
  const { feeling, understanding, support, comments } = useSelector(
    (s) => s.feedback
  );
  const history = useHistory();
  const handleSubmit = () => {
    axios
      .post("/api/feedback", { feeling, understanding, support, comments })
      .then((_) => history.push("/success"))
      .catch((e) => console.error(e));
  };
  return (
    <div>
      <p>Feelings: {feeling}</p>
      <p>Understanding: {understanding}</p>
      <p>Support: {support}</p>
      <p>Comments: {comments}</p>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
