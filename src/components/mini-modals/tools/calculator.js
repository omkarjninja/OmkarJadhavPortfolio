import { Button } from "bootstrap";
import { useState } from "react";
import * as math from 'mathjs';
function Calci(){
    const [result, setResult] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');

// if (result==="") {
//     setResult('0');
// } else {
//     setResult("")
// }


  const handleClick = (e) => {
    const buttonName = e.target.name;
    if (isNaN(buttonName)) {
        // If an operator button is clicked
        if (selectedOperator && selectedOperator !== buttonName) {
          // If a different operator is already selected, update the selected operator
          setSelectedOperator(buttonName);
          setResult(result.slice(0, -1).concat(buttonName));
        } else if (!selectedOperator) {
          // Otherwise, select the operator and append it to the result
          setSelectedOperator(buttonName);
          setResult(result.concat(buttonName));
        }
      } else {
        // If a number button is clicked
        if (selectedOperator) {
          // If an operator is already selected, append the number to the result after the operator
          if (result.slice(-1) === selectedOperator) {
            setResult(result.concat(buttonName));
          } else {
            setResult(result + selectedOperator + buttonName);
          }
          setSelectedOperator('');
        } else {
          // Otherwise, simply append the number to the result
          setResult(result.concat(buttonName));
        }
      }
}
const clear = () => {
    setResult('');
    setSelectedOperator('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
    setSelectedOperator('');
  };

  const calculate = () => {
    try {
      setResult(math.evaluate(result).toString());
      setSelectedOperator('');
    } catch (err) {
      setResult('Error');
    }
  };
 
    return(
        <>
{/* <div className="container" >
      <form >
        <input type="text" value={result} />
      </form>
      <div className="keypad"> */}
      <div className="min-w-screen min-h-screen bg-transparent flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden" style={{maxWidth:"300px"}}>
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-3xl text-white font-thin">{result===""?"0"+result:result}</div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
        {/* <button className="highlight" onClick={clear} id="clear" >Clear</button> */}
        <div className="flex w-full">
        <div className="w-2/4 border-r border-b border-indigo-400">
                <button onClick={clear} className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light" id="clear">Clear</button>
        </div>

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name=""  onClick={backspace}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light" >
                        C</button>
                </div>

        {/* <button className="highlight" onClick={backspace} id="backspace" >C</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="/"  onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light">
                        ÷</button>
                </div>
                </div>
        {/* <button className="highlight" name="/" onClick={handleClick} >&divide;</button> */}
        <div className="flex w-full">
        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button onClick={handleClick} name="7" className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        7</button>
                </div>

        {/* <button name="7" onClick={handleClick} >7</button> */}
        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="8" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        8</button>
                </div>

        {/* <button name="8" onClick={handleClick} >8</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="9" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        9</button>
                </div>

        {/* <button name="9" onClick={handleClick} >9</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="*" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        &times;</button>
                </div>
            </div>
        {/* <button className="highlight" name="*" onClick={handleClick} >&times;</button> */}
        <div className="flex w-full">
        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="4" onClick={handleClick}
                    value={"4"} className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        4</button>
                </div>

        {/* <button name="4" onClick={handleClick} >4</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="5" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        5</button>
                </div>

        {/* <button name="5" onClick={handleClick} >5</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="6" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        6</button>
                </div>

        {/* <button name="6" onClick={handleClick} >6</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="-"  onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        -</button>
                </div>
                </div>
        {/* <button className="highlight" name="-" onClick={handleClick} >&ndash;</button> */}
        <div className="flex w-full">
        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="1" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        1</button>
                </div>

        {/* <button name="1" onClick={handleClick} >1</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="2" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        2</button>
                </div>

        {/* <button name="2" onClick={handleClick} >2</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="3" onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        3</button>
                </div>

        {/* <button name="3" onClick={handleClick} >3</button> */}

        <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="+"  onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        +</button>
                </div>
        </div>
        {/* <button className="highlight" name="+" onClick={handleClick} >+</button> */}
        <div className="flex w-full">
        <div className="w-1/4 border-r border-indigo-400">
                    <button name="0"  onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        0</button>
                </div>

        {/* <button name="0" onClick={handleClick} >0</button> */}

        <div className="w-1/4 border-r border-indigo-400">
                    <button name="."  onClick={handleClick}
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        .</button>
                </div>

        {/* <button className="highlight" name="." onClick={handleClick} >.</button> */}

        <div className="w-2/4 border-r border-indigo-400">
                    <button name="="  onClick={calculate}
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light">
                        =</button>
                </div>
      </div>
        {/* <button className="highlight" name="=" onClick={calculate} id="result" >=</button> */}

      </div>
    </div>
</div>

        </>
    )
}
export default Calci;

<div className="min-w-screen min-h-screen bg-transparent flex items-center justify-center px-5 py-5">
    <div className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden" style={{maxWidth:"300px"}}>
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
            <div className="w-full py-5 px-6 text-6xl text-white font-thin"></div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">


            
            {/* <div className="flex w-full"> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button  className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light" id="clear">Clear</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name=""  
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light" >
                        C</button>
                </div> */}
                {/*  */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name=""  
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">
                        %</button>
                </div> */}
                {/*  */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="/"  
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light">
                        ÷</button>
                </div> */}
            {/* </div> */}
            <div className="flex w-full">
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="7" lassName="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        7</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="8" 
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        8</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="9" 
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        9</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="*"  
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        ⨉</button>
                </div> */}
            </div>
            <div className="flex w-full">
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="4" 
                    value={"4"} className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        4</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="5" 
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        5</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="6" 
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        6</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="-"  
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        -</button>
                </div> */}
            </div>
            <div className="flex w-full">
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="1" 
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        1</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="2" 
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        2</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="3" 
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        3</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-b border-indigo-400">
                    <button name="+"  
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">
                        +</button>
                </div> */}
            </div>
            <div className="flex w-full">
                {/* <div className="w-1/4 border-r border-indigo-400">
                    <button name="0"  
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        0</button>
                </div> */}
                {/* <div className="w-1/4 border-r border-indigo-400">
                    <button name="."  
                    className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">
                        .</button>
                </div> */}
                {/* <div className="w-2/4 border-r border-indigo-400">
                    <button name="="  
                    className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light">
                        =</button>
                </div> */}
            </div>
       
       
       
        </div>
    </div>
</div>