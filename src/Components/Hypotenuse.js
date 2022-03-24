import React, {useState} from "react"
import '../App';
export default function Hypotenuse() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [resultValue, setResultValue] = useState("");
    function input1(e){
       setValue1(e.target.value);
    }
    function input2(e){
        setValue2(e.target.value);
    }
    function result(){

        var length =  (((value1 * value1) + (value2 * value2))**(1/2));
        setResultValue(length);
    }

    return(
        <div>
           <h1>Check Hypotenuse</h1>
           <div className="heading">
                <h4>Length of Hypotenuse = sqrt(a² + b²)</h4>
           </div>
           <div className="inputs">
                <label> a =
                    <input type="number" name="name" value={value1}  onChange={(e)=>input1(e)}/>
                </label> 
                <label> b = 
                    <input type="number" name="name" value={value2}  onChange={(e)=>input2(e)}/>
                </label> 
           </div>
           <button onClick={result} type="submit"> Check Hypotenuse </button>
           <h3>The length of Hypotenuse: {resultValue}</h3>
        </div>
    )
}