import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Input text give \"" + text+ "\"");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","success");
  };
  const handleLoClick = () => {   
    // console.log("Input text give \"" + text+ "\"");
    let newText = text.toLowerCase();
    setText(newText);   
    props.showAlert("Converted to Lower case","success");
  };
  
  const handleClearClick = () => {
    // console.log("Input text give \"" + text+ "\"");
    let newText = " ";
    setText(newText);
    props.showAlert("Text Area Cleared","success");
  };
  const handleCopyClick = () => {
	var text = document.getElementById('myBox');
	text.select();
	navigator.clipboard.writeText(text.value);
	props.showAlert("Text copied to Clipboard","success");
  };
  const handleOnChange = (event) => {
    // console.log("Output text give ");
    setText(event.target.value);
  };
  
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success");

  }


  //main
  const [text, setText] = useState("");
  // const [replace, setReplace] = useState("");
  // setText("New")
  return (
    <>
	<div className="container" style = {{color: props.mode==='dark'?'white':'black'}} >
		<h1>{props.heading}</h1>
		<div className="mb-3p" >
		   <textarea  className="form-control" id="myBox" style = {{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}}  value={text} onChange={handleOnChange} rows="8"></textarea>
		</div>
		{/* <span id="replace" className=" mx-3 my-5" value={replace}>anj</span><br/> */}
		<button className="btn btn-primary mx-1 my-3" id = "upper" onClick={handleUpClick}>Convert to UpperCase</button>
		<button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to LowerCase</button>
		<button className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text Area </button>
		<button className="btn btn-primary mx-3 my-3" onClick={handleCopyClick} >  Copy Text  </button>
		<button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces} >  Remove Extra Spaces  </button>
	</div>
	<div className="container my-4" style = {{color: props.mode==='dark'?'white':'black'}} >      
	   <h1>Your Summary</h1>
	   <p>{" "} {text.split(" ").length} Words,{text.length} charcters</p>
	   <p> {0.008 * text.split(" ").length} Minutes read</p>
	   <h3>Preview</h3>
	   <p>{text.length>0?text:"Enter something in the Text Area to Preview"}</p>
	 </div>
    </>
  );
}
