import React, { useState } from 'react';

export default function TextArea({ heading, mode, showAlert }) {
    const [text, setText] = useState("");

    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted to uppercase", "success");
    };

    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Converted to lowercase", "primary");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClear = () => {
        setText("");
        showAlert("Text is cleared", "primary");
    };

    const handleCapital = () => {
        const words = text.split(' ');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        const newText = capitalizedWords.join(' ');
        setText(newText);
        showAlert("Converted to Capitalize", "primary");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text copied to clipboard", "primary");
    };

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        showAlert("Extra spaces removed", "primary");
    };

    return (
        <>
            <div className="container" style={{ color: mode === "dark" ? "white" : "black" }}>
                <h1>{heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: mode === "light" ? "white" : "#042743", color: mode === "dark" ? "white" : "black" }} value={text} onChange={handleOnChange} id="my-box" rows="6" />
                    <button className="btn btn-primary m-2" onClick={handleUp}>Uppercase</button>
                    <button className="btn btn-primary m-2" onClick={handleLower}>Lowercase</button>
                    <button className="btn btn-danger m-2" onClick={handleClear}>Clear</button>
                    <button className="btn btn-primary m-2" onClick={handleCapital}>Capitalize</button>
                    <button className="btn btn-primary m-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary m-2" onClick={handleSpaces}>Remove Spaces</button>
                </div>
            </div>
            <div className="container my-3">
                <h3 style={{ color: mode === "dark" ? "white" : "black" }}>Your Text Summary</h3>
                <p style={{ color: mode === "dark" ? "white" : "black" }}>
                    {text.trim().split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters
                </p>
                <p style={{ color: mode === "dark" ? "white" : "black" }}>
                    {0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length} minutes to read
                </p>
            </div>
        </>
    );
}
