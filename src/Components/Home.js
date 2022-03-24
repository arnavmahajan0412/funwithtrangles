import React,{useState} from "react"
import '../App';

export default function Home() {
    const [state , setState] = useState({
        value1: 0,
        value2: 0,
        value3: 0
    });
    const [message, setMessage] = useState("");
    // const [firstAngle,setFirstAngle]=useState();
    const handleChange1 = (e) => {
         setState({...state,value1: e.target.value})
        // setFirstAngle(e.target.value)
    }
    const handleChange2 = (e) => {
        setState({...state,value2: e.target.value})
    }
    const handleChange3 = (e) => {
        setState({...state,value3: e.target.value})
    }
    function result(){

        var angle1Value = parseInt(state.value1);
        var angle2Value = parseInt(state.value2);
        var angle3Value = parseInt(state.value3);
        var sumOfAngles =  angle1Value + angle2Value + angle3Value;

        if(sumOfAngles === 180){
            setMessage("Yay, the angles form a triangle");
        }
        else{
            setMessage("Oh OH ! the angles dont form a triangle");
        }
    }
    return(
        <div >
            <h1>Is Triangle ?</h1>
            <label> angle1:
                <input type="Number" name="name" value={state.value1} onChange={(e)=>handleChange1(e)}/>
            </label> 
            <label> angle2:
                <input type="Number" name="name" value={state.value2} onChange={(e)=>handleChange2(e)}/>
            </label> 
            <label> angle3:
                <input type="Number" name="name" value={state.value3} onChange={(e)=>handleChange3(e)}/>
            </label> 
            <div>
                <button onClick={result}>Is Triangle ?</button>
            </div>
            <div className="result">
                {message}
            </div>
        </div>
    )
}