import React, {useState} from 'react'

export default function TextForm(props){
   
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Coverted to UpperCase","success ");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Coverted to LowerCase","success ");
    }
    const handleClearClick = () => {
        let newText ='';
        setText(newText);
        props.showAlert(" Text Cleared","success ");
    }
    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied","success ");
    }
    const handleSpaces = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Spaces Removed","success ");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
   
    const [text,setText] = useState('');
    return(
        <>
        <div className="container" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark' ? 'gray' : 'white', color:props.mode==='dark' ? 'white' : 'black'}}></textarea>
            </div>
            <button className ="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className ="btn btn-primary mx-2" onClick={handleLoClick} >Convert to LowerCase</button>
            <button className ="btn btn-primary mx-2" onClick={handleClearClick} >Clear Text</button>
            <button className ="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className ="btn btn-primary mx-2" onClick={handleSpaces}>Remove Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
            <h2>Your Text Summary : </h2>
            <p>{text.split(" ").length}words,{text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes used for read.</p>
            <h4>Preview : </h4>
            <p>{text.length>0?text:"Enter something in the textbox above to preview."}</p>
        </div>
        </>
    )
}