import React, {useState} from "react"
import '../App';
export default function Area() {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    function input1(e){
        setValue1(e.target.value);
     }
     function input2(e){
         setValue2(e.target.value);
     }
    return(
        <div> 
            <h1>Check Area of Triangle</h1>
            <div className="heading">
                <h4>Area of Triangle = 1/2(Base * Height)</h4>
            </div>
            <div>
            <label> Base(in cm)
                <input type="number" name="name" value={value1}  onChange={(e)=>input1(e)}/>
            </label>
            <label> Height(in cm)
                <input type="number" name="name" value={value1}  onChange={(e)=>input1(e)}/>
            </label>
            </div>
        </div>
        
    )
}