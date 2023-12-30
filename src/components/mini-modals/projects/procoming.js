import "../projects.css"
function ProComing(props){
    return(
        <>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className='whole'>
        <img className='whole-img' src={props.icon} width="80px" height="80px" 
        style={{borderRadius:"10px",marginRight:"10px",marginBottom:"10px"}}></img>
        <div>
          <h6>{props.name}</h6>
          <p className='whole-para'>{props.category}</p>
          <p className='whole-para'>{props.type}</p>
        </div>
       
        </div>
        <div className='screenshot'>
          
        <img className='whole-img' src={props.screenshot} 
        style={{borderRadius:"10px",width:"500px",height:"200px",backgroundPosition:"center"}} />
        </div>
      </div>
        </>
    )
}
export default ProComing;