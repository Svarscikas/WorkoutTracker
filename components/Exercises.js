import { useState } from "react";

const Exercises = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);

  return (
    <div>
      <ExerciseForm />
      <button onClick={toggleExpand}>Show More</button>
      {expand && (
        <div className="ExerciseWrapper">
          <div className="ExerciseItem">
            <div className="ExerciseImg"></div>
            <div className="ExerciseContent">
              <div className="ExerciseTitle">Exercise Title</div>
              <div className="ExerciseDescription">Description</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
const ExerciseForm = () => {
  return (
    <form className="ExerciseForm">
      <div className="FormName">Add New Exercise</div>
      <div className="ExerciseFormItem">Title:</div>
      <input className="FormInput" name="title" type="text"></input>
      <div className="ExerciseFormItem">Description:</div>
      <input className="FormInput" name="description" type="text"></input>
      <button type="submit">Add Exercise</button>
    </form>
  );
};
export default Exercises;
