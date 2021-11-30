import React, {useState} from "react"



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Connverted to Uppercase","success");
    }
    const handleLowClick = ()=>{
        // console.log("Lowercase was clicked" +  text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Connverted to Lowercase","success");
    }

    const handleClearClick=()=>{
      let newText= '';
      setText(newText);
      props.showAlert("Messaeg box cleared","success");
    }
    const handleOnChange= (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

    const handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces removed","success");
    }

    const handleCopy=()=>{
      let text = document.getElementById("myBox");
      text.select();
      // text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied","success");
    }
const [text, setText] = useState('');

  return (
      <>
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{backgroundColor: props.mode === 'dark'?'grey': 'light'}}></textarea>
      </div>
      <button className={`btn btn-outline-warning bg-${props.mode === 'light'?'dark':'light'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
      <button className={`btn btn-outline-warning bg-${props.mode === 'light'?'dark':'light'} mx-2`} onClick={handleLowClick}>Convert to Lowercase</button>
      <button className={`btn btn-outline-warning bg-${props.mode === 'light'?'dark':'light'} mx-2`} onClick={handleClearClick}>Clear Text</button>
      <button className={`btn btn-outline-warning bg-${props.mode === 'light'?'dark':'light'} mx-2`} onClick={handleCopy}>Copy Text</button>
      <button className={`btn btn-outline-warning bg-${props.mode === 'light'?'dark':'light'} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minutes to read this!!!</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview it here"}</p>
    </div>
    </>
  );
}
