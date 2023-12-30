// import "./demo.css"
// import { useState } from "react";
// import Windows from "./windows";
// function RightMenu(){
//     const [val,setval]=useState('hide')
//     const [Xval,setXval]=useState('')
//     const [Yval,setYval]=useState('')
//     if (document.addEventListener) {
//         document.addEventListener('contextmenu', function(event) {
//           setval("show"); //here you draw your own menu
//           setXval(event.clientX)
//          setYval(event.clientY) 
//           event.preventDefault();
//         }, false);
//       } else {
//         document.attachEvent('oncontextmenu', function() {
//           alert("You've tried to open context menu");
//           window.event.returnValue = false;
//         });
//       }
//       function printMousePos(event) {
//         //   setXval(event.clientX)
//         //  setYval(event.clientY) 
//         //  setval('hide')
//       }
      
//       document.addEventListener("click", printMousePos);
//     return(
//         <>
        
//             {/* <h2 className="move" style={{position:"absolute",top:Yval,left:Xval}}>{val}</h2> */}
//             <div className={`menu ${val}`} style={{position:"absolute",top:Yval,left:Xval}}>
//                 <p>Change Background</p>
//                 <p>profile</p>
//                 <p>go</p>
//                 <p>about</p>
//                 <p onClick={()=>{
//                     setval('hide')
//                 }}>Close</p>
//             </div>
//             {/* <h2>{Xval}</h2>
//             <h2>{Yval}</h2> */}
//             {/* <Windows></Windows> */}
//         </>
//     )
// }
// export default RightMenu;