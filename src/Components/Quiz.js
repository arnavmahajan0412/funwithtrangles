import React, {useState} from "react"
import '../App';
export default function Quiz() {
    
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    function question1Hit(event){
        setAnswer1(event.target.value);
    }
    function question2Hit(event){
        setAnswer2(event.target.value);
    }
    var [result, setResult] = useState(0);
    function score(){
        var count = 0;
        console.log(answer1);
        console.log(answer2);
        if(answer1 === "90°"){
            count++;
            setResult(count);
        }
        if(answer2 === "right angled"){
            count++;
            setResult(count);
        }
        console.log(result);
    }
    
    return(
        <div>
            <h1>Triangle Quiz</h1> 
            <div className="question1" onChange={question1Hit}>
                <p>What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?</p>
                <label > <input type="radio" value="45°" name="qustion1" id="" /> 45° </label>
                <label > <input type="radio" value="60°" name="qustion1" id="" /> 60° </label>
                <label > <input type="radio" value="90°" name="qustion1" id="" /> 90°</label>
            </div>
            <div className="question2" onChange={question2Hit}>
                <p>If a triangle has an angle of 90 degrees, what is it called?</p>
                <label > <input type="radio" name="qustion2" value="obtuse" id="" /> obtuse </label>
                <label > <input type="radio" name="qustion2" id="" value="acute"/> acute </label>
                <label > <input type="radio" name="qustion2" id="" value="right angled" /> right angled</label>
            </div>
            <button id="quizButton" onClick={score} type="submit"> Submit </button>
            <div className="score">
                <h3>Your score is: {result}</h3>
            </div>
        </div>
    )
}