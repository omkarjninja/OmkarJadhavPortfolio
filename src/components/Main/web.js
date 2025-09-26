import Feature from "./feature"
import "./layout.css"
import projects from '../../assets/icons/projects.png';import resume from '../../assets/icons/resume.png';
import github from '../../assets/icons/github.png';import coffee from '../../assets/icons/coffee.png';
import Insta from '../../assets/icons/Instagram.png';import spotify from '../../assets/icons/Spotify.png';
import twitter from '../../assets/icons/Twitter.png';import vs from '../../assets/icons/VS Code.png';
import mail from '../../assets/icons/mail.png';import term from '../../assets/icons/terminal.png';
import link from '../../assets/icons/linkedin.png'; import graphic from '../../assets/icons/graphic.ico';
import Projects from "../mini-modals/projects";import social from '../../assets/icons/socials.ico';
import tools from '../../assets/icons/Tools.ico';import games from '../../assets/icons/games.ico';
import Graphic from "../mini-modals/graphic design/graphic";
import pdfi from "../../assets/files/resumefinal2.pdf"
import VSModal from "../mini-modals/vs-code/vsmodal";
import Terminal from "../mini-modals/terminal/terminal";
import SpotifyModal from "../mini-modals/spotify/spotifymodal";
import SocialModal from "../mini-modals/socials/socialmodal";
import ToolsModal from "../mini-modals/tools/toolsmodal";
import GamesModal from "../mini-modals/games/gamesModal";
import full from "../../assets/icons/full.jpg"
import FullScreen from "../mini-modals/full-screen/fullscreen";

function AppLayout(props){
  
  const val1=props.lat;
  const val2=props.log;
    return (
        <>
       <div className="lg:w-1/2 sm:w-full">
       <div className="grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xs:grid-cols-3 lg:gap-2 pt-4">


    <Projects  className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0" 
    image={projects}
    name="Projects"
    >
    </Projects>

    <SpotifyModal className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={spotify}
  name="Spotify"
    >
    </SpotifyModal>


  <Graphic  className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={graphic}
  name="Graphics">
  </Graphic>

  <SocialModal className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={social}
  name="Social"
  >
  </SocialModal>
  <Feature className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={github}
  name="Github"
  link="https://github.com/omkarjninja">
  </Feature>
  <Feature className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={mail}
  name="Mail"
  link="mailto:ojadhav250@gmail.com">
  </Feature>
  <Feature className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={resume}
  name="Resume"
  link={pdfi}>
  </Feature>


  <Terminal className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={term}
  name="Terminal"
  >
  </Terminal>



  <VSModal  className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={vs}
  name="VS Code"
  > 
  </VSModal>

    <ToolsModal  className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={tools} lat={val1} log={val2}
  name="Tools">
      
    </ToolsModal>


  <GamesModal className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={games}
  name="Games">

  </GamesModal>
  <FullScreen className="lg:h-24 sm:h-8 md:h-12 rounded-lg bg-transparent p-0"
  image={full}
  name="FullScreen">

  </FullScreen>



</div>

       </div>
        </>
    )
}
export default AppLayout