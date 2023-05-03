
import './poll.css';
function PollExample() {
    const options = [
        "Data Science",
        "Software Development",
        "Project Management",
        "User Experience & Design"
    ]
  return (
    <div className="poll-preview">
    <p className={"title"}>Informatics students, what branch of technology are you most interested in?</p>
        <>
        {options.map((option, index) => (
            <div key={index} className="poll-option">
            <input type="checkbox" disabled />
            <label>{option}</label>
            </div>
        ))}
        </>
    </div>
  );
}

export default PollExample;
