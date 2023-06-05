import React, { useState } from 'react'
import Alert from './alert'

const InputForm = () => {
    const [text, setText] = useState('')
    const [charCounter, setCharCounter] = useState(0)
    const [wordCounter, setWordCounter] = useState(0)
    
    const [alert,setAlert] = useState(null)

    function hideAlert(){
        setTimeout(()=>{
            setAlert(null)
        },2000)
    }
    function checkCharCounter(){
        if(charCounter>0){
            return true
        }else{
            return false
        }
    }
    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);

        // Counting words and characters only when there is text
        if (newText.trim() === '') {
            setWordCounter(0);
            setCharCounter(0);
        } else {
            setWordCounter(newText.trim().split(/\s+/).length);
            setCharCounter(newText.length);
        }
        
    }
    const convertToUpper = () => {
       if(checkCharCounter()){

        setText(text.toUpperCase())
        setAlert('Text converted to Upper Case !')
       }else{
        setAlert('Textarea is empty !')
       }
        hideAlert()
    }
    const convertToLower = () => {
       if(checkCharCounter()){
        setText(text.toLowerCase())
        setAlert('Text Converted to Lower Case!')
       }else{
        setAlert('Textarea is empty !')
       }
       hideAlert()
    }
    const removeSpace = () => {
        if(checkCharCounter()){
        setText(text.replace(/\s+/g, ' ').trim())
        setAlert('Extra Spaces Removed !')
        }else{
            setAlert('There is nothing in the textarea!')
        }
        hideAlert()
    }
    const clearText = () => {
        if(checkCharCounter()){
            setText('')
            setAlert('Text Cleared !')
            setWordCounter(0);
            setCharCounter(0);
        }else{
            setAlert('Already Cleared!')

        }
       
        hideAlert()
    }
    const copyText = () => {
        if(checkCharCounter()){
            navigator.clipboard.writeText(text)
            setAlert('Text Copied to clipboard !')
           
        }else{
            setAlert('Text is empty!')
        }
        hideAlert()
    }
    
    return (
        <>
        <Alert alert={alert}/>
        <div className='container mt-5'>

<p className='fs-4'>Enter Text Here..</p>
<textarea  rows="5" className='form-control fs-5' onChange={handleChange} value={text}></textarea>
<div className="d-flex gap-2 mt-3 flex-wrap" >
    <button className='btn btn-primary' onClick={convertToUpper}>Convert To UpperCase</button>
    <button className='btn btn-primary' onClick={convertToLower}>Convert To LowerCase</button>
    <button className='btn btn-primary' onClick={removeSpace}>Remove Extra Space</button>
    <button className='btn btn-primary' onClick={clearText}>Clear Text</button>
    <button className='btn btn-primary' onClick={copyText}>Copy Text</button>

</div>
<p className='fs-4 my-3'>Your Text Summary</p>
<p className='fs-5'>Number of Characters : {charCounter}</p>
<p className='fs-5'>Number of Words : {wordCounter}</p>

</div>
        </>
        
    )
}

export default InputForm
