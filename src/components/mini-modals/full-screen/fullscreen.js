function FullScreen(props){
    function toggleFullScreen() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
          document.exitFullscreen();
        }else if (document.mozRequestFullScreen) {
          document.mozRequestFullScreen();
        }
        
      }
    return(
        <>
         <center>
       <div className='icon-box' onClick={toggleFullScreen}>
          <img className="icon" src={props.image}  ></img>
          <p className='icon-name'>{props.name}</p>
      </div>
      </center>
      
        </>
    )
}
export default FullScreen;