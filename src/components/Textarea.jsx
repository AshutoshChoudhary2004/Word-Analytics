import { useState} from "react";
import Warning from "./Warning";

export default function Textarea({text, setText}) {
  const handleChange = (event) => {
    let newText = event.target.value;
    if (newText.includes("@")) {
        newText = newText.replace("@", "");
        setWarningText("No @ symbol allowed!"); 
      } 
    else if (newText.includes("<script>")) {
      newText = newText.replace("<script>", "");
      setWarningText("No <script> tag allowed!"); 
    } 
    else setWarningText(""); 
    setText(newText);
  };
  
  const [warningText, setWarningText] = useState(""); 
  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        spellCheck="false"
        placeholder="Enter your text"
      ></textarea>
      <Warning warningText={warningText} />
    </div>
  );
}
