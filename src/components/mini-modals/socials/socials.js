

function Socials(props){
    const Pc=()=>{
        window.open(props.link, "_blank")
    }

    return(
        <>
         <center>
        <div className='icon-box' href={props.link} onClick={Pc}>
            <img className="icon" src={props.image}></img>
            <p className='icon-name'>{props.name}</p>
        </div>
        </center>

        </>
    )
}
export default Socials;