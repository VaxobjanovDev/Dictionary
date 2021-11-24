import Input from "../UI/Input";
import "./FormInput.css";

const FormInput = ({ word, setWord }) => {
  return (
    <div className="form-input">
      <h1>{word ? word : "Search..."}</h1>
      <Input
        className="inputs"
        placeholder="Search..."
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
