import React,{useState} from 'react'

const CalculatorApp = ()=> {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    const handler = (e) => {
        setInput(e.target.value);
    }

    const calculate= ()=> {
        try{
            return eval(input) || "";
        }
        catch(error){
            return "Invalid Expression";
        }
    }
  return (
    <div>
        <input type="text" value={input} name="input" onChange={handler} /> <br />
        <button onClick={()=> setResult(eval(input))}>Result</button>
        <h4>Result is: {result}</h4>
    </div>
  )
}

export default CalculatorApp