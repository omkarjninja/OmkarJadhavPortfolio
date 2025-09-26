import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Pro from "./pro" // Individual project card
import ProComing from './projects/procoming'; // Upcoming project card

// --- Image Imports --- (Keeping your extensive list)
import netflix from "../../assets/images/netflix.png"
import netflixy from "../../assets/icons/netflix.png"
import sigdi from "../../assets/images/sigdi.jpeg";
import lucky from "../../assets/images/lucky.jpeg";
import todo from "../../assets/icons/todo.png";
import art from "../../assets/images/art.jpeg";
import blog from "../../assets/images/blog.jpeg";
import spot from "../../assets/icons/spotify-clone.png";
import notion from "../../assets/icons/notion.png";
import preview from "../../assets/images/preview.jpeg";
import net1 from "../../assets/images/net1.png";import net2 from "../../assets/images/net2.png";
import net3 from "../../assets/images/net3.png";import net4 from "../../assets/images/net4.png";
import sig1 from "../../assets/images/sig1.png";import sig2 from "../../assets/images/sig2.png";
import sig3 from "../../assets/images/sig3.png";import sig4 from "../../assets/images/sig4.png";
import egg1 from "../../assets/images/egg1.png";import egg2 from "../../assets/images/egg2.png";
import egg3 from "../../assets/images/egg3.png";import egg4 from "../../assets/images/egg4.png";
import todo1 from "../../assets/images/todo1.png";import todo2 from "../../assets/images/todo2.png";
import todo3 from "../../assets/images/todo3.png";
import spot1 from "../../assets/images/spot1.png";import spot2 from "../../assets/images/spot2.png";
import spot3 from "../../assets/images/spot3.png";import spot4 from "../../assets/images/spot4.png";
import apple1 from "../../assets/images/apple1.png";import apple2 from "../../assets/images/apple2.png";
import apple3 from "../../assets/images/apple3.png";import horeca from "../../assets/images/horeca.jpeg";
import hor1 from "../../assets/images/hor1.png";import hor2 from "../../assets/images/hor2.png";
import hor3 from "../../assets/images/hor3.png";import hor4 from "../../assets/images/hor4.png";
import nike1 from "../../assets/images/nike1.png";import nike2 from "../../assets/images/nike2.png";
import nike3 from "../../assets/images/nike3.png";import nike4 from "../../assets/images/nike5.png";
import play1 from "../../assets/images/play1.png";import play2 from "../../assets/images/play2.png";
import play3 from "../../assets/images/play3.png";import play4 from "../../assets/images/play4.png";
import nike from "../../assets/images/nike.jpg";import apple from "../../assets/images/apple.png";
import car1 from "../../assets/images/car1.png";import car2 from "../../assets/images/car2.png";
import car3 from "../../assets/images/car3.png";import car4 from "../../assets/images/car4.png";
import jup1 from "../../assets/images/jup1.png";import jup2 from "../../assets/images/jup2.png";
import jup3 from "../../assets/images/jup3.png";import india from "../../assets/images/india.png";
import car from "../../assets/images/car.png";import playlist from "../../assets/icons/Spotify.png";
import list from "../../assets/images/todolist.png"; // Re-importing missing image
import journal from "../../assets/images/blog.png"; // Re-importing missing image
import blog1 from "../../assets/images/public/b1.png";
import blog2 from "../../assets/images/public/b2.png";
import blog3 from "../../assets/images/public/b3.png";
import blog4 from "../../assets/images/public/b4.png";
import blog5 from "../../assets/images/public/b5.png";
import blog6 from "../../assets/images/public/b6.png";
import cafelogo from "../../assets/images/public/p0.png";
import cafe1 from "../../assets/images/public/p1.png";
import cafe2 from "../../assets/images/public/p2.png";
import cafe3 from "../../assets/images/public/p3.png";
import cafe4 from "../../assets/images/public/p4.png";
import cafe5 from "../../assets/images/public/p5.png";
import klogo from "../../assets/images/public/k0.webp";
import k01 from "../../assets/images/public/k01.webp";
import k1 from "../../assets/images/public/k1.png";
import k2 from "../../assets/images/public/k2.png";
import k3 from "../../assets/images/public/k3.png";
import k4 from "../../assets/images/public/k4.png";
import k5 from "../../assets/images/public/k5.png";
import um1 from "../../assets/images/public/u1.png";
import um2 from "../../assets/images/public/u2.png";
import um3 from "../../assets/images/public/u3.png";
import um4 from "../../assets/images/public/u4.png";
import um5 from "../../assets/images/public/u5.png";
import tdi1 from "../../assets/images/public/t1.png";
import tdi2 from "../../assets/images/public/t2.png";
import tdi3 from "../../assets/images/public/t3.png";
import tdi4 from "../../assets/images/public/t4.png";
import tdi5 from "../../assets/images/public/t5.png";
import lume1 from "../../assets/images/public/l1.png";
import lume2 from "../../assets/images/public/l2.png";
import lume3 from '../../assets/images/public/l0.jpg';
import lume4 from '../../assets/images/public/l3.jpg';
import lume5 from '../../assets/images/public/l4.jpg';
import llogo from "../../assets/images/public/llogo.jpg"



import "./projects.css"; 


// --- Project Info Data (Keep this structure) ---
const info=[
    {
  name: "Lume",
  category: "Entertainment / Social",
  type: "Mobile App + WebApp",
  about: "Lume is a mobile-first interactive app built with React Native that lets users play fun, random question games. With categories like Friends, Love, Date, or Yourself, users can swipe for a question or let the app randomly pick a participant in the group.",
  date: "2025",
  more: "Available as an Android APK and a web app for iOS, Lume is designed for social gatherings, icebreakers, or personal reflection. The app enhances group fun with gesture-based interactions and playful UI.",
  link: "https://omkarjninja.github.io/Lume-landing-page/", // add Play Store / WebApp link here
  tech: ["react-native", "javascript", "expo", "apk"],
  unique: "My first fully functional React Native project, where I learned debugging APK builds, handling cross-platform deployment, and creating interactive gesture-based UI."
},
{
  name: "UmNinja",
  category: "Education / Productivity",
  type: "WebApp",
  about: "UmNinja is an interactive speech training web app designed to help users improve their communication and public speaking skills. It generates random philosophical topics via an API and encourages practice through speaking, thinking, and debating.",
  date: "2025",
  more: "The app features a real-time speech recorder that transcribes speech, flags filler words like 'um' or 'like,' and provides structured tips and motivational prompts. With progress tracking and an engaging interface, UmNinja acts as a digital speech coach that builds clarity and confidence.",
  link: "https://umninja.vercel.app/", // add live demo / GitHub link
  tech: ["reactjs", "javascript", "speech-to-text API", "nodejs"],
  unique: "A digit,al trainer that combines random topic generation with real-time feedback, helping users practice fluency and reduce filler words in everyday and professional speaking."
},
{
  name: "OmkarBlog",
  category: "Content / Blogging",
  type: "WebApp",
  about: "OmkarBlog is a personal blogging platform inspired by Medium, where I write and publish articles on technology, projects, and personal thoughts. It replicates the clean, minimal reading experience of Medium while being customized for my own brand.",
  date: "2024",
  more: "The platform allows me to create, manage, and share blogs with a simple and distraction-free interface. It serves as both a personal journal and a space to document my journey in tech, startups, and design.",
  link: "https://omkarblog.vercel.app/", // add actual blog link
  tech: ["nextjs", "reactjs", "tailwindcss", "firebase"],
  unique: "A Medium-style blogging clone built from scratch, giving me full control over design, features, and content publishing."
},
    // IMPORTANT: To use the {...info[index]} spread operator, your info objects need NAME, CATEGORY, TYPE fields.
    { name: "Ninjafy", category: "Entertainment", type: "WebApp", 
        about:"Ninjafy, a bespoke creation crafted with ReactJS, mirrors the essence...",
        date:"August 2023 - Sept 2023",
        more:"Ninjafy stands as a testament to innovation and immersive entertainment...",
        link:"https://wonderful-peony-85ac00.netlify.app/",tech:["html","css","js","reactjs"],unique:"This was one of the biggest project i build while i was just learning Reactjs..."
    },
     {
    name: "Parallel Cafe",
    category: "Hospitality",
    type: "Website + Branding",
    about: "Parallel Cafe is a vibrant space in Kalaburagi that combines great food, coffee, and customized events. We built their digital identity through a visually rich website, branding, and social promotions.",
    date: "2025",
    more: "The website highlights events, menus, and booking options, helping the cafe reach a larger audience while showcasing its cozy yet lively vibe.",
    link: "https://parallel-cafe-trial.vercel.app/", // Add actual link if live
    tech: ["html", "css", "javascript", "reactjs"],
    unique: "This project brought a local café’s offline vibe into an engaging online experience, driving more inquiries and event bookings."
  },
  {
    name: "Kohinoor Watches",
    category: "Retail",
    type: "E-commerce Presence",
    about: "Kohinoor Watches is a trusted watch retailer in Kalaburagi. We created a sleek, premium online identity with product showcases and local SEO.",
    date: "2025",
    more: "The site improved visibility and positioned the brand as modern and premium, leading to more store visits and customer inquiries.",
    link: "https://www.kohinoorwatches.com/",
    tech: ["html", "css", "javascript", "reactjs"],
    unique: "Helped a traditional retailer expand their reach through digital branding and discoverability."
  },
  {
    name: "The Drone India",
    category: "Startup",
    type: "Web Platform + Branding",
    about: "The Drone India is a drone rental startup aiming to democratize drone usage across India. We designed their branding and built a simple rental platform.",
    date: "2025",
    more: "With a streamlined site and bold brand identity, they validated their idea, started building traction, and gained investor confidence.",
    link: "https://www.thedroneindia.com/",
    tech: ["html", "css", "javascript", "reactjs"],
    unique: "One of the earliest drone rental concepts in India with branding and platform built from scratch."
  },
  



]


function Projects(props){
    const [showProject, setShowProject] = useState(false);
    const handleClose = () => setShowProject(false);
    const handleShow = () => setShowProject(true);
    
    // --- Data Mapping (Simplified) ---
    // Now we can use array index and spread the matching info object

    return(
        <>
         {/* --- The Main Projects Window (Modal) --- */}
         <Modal 
            dialogClassName='os-window-modal' 
            size='xl' 
            show={showProject} 
            onHide={handleClose} 
            backdrop="static"
            keyboard={false}
         >
            {/* 1. OS-Style Window Header/Title Bar for MAIN PROJECTS */}
<div className='os-window-header'>
    <div className='hey'>
        <h2 className='os-window-title'>My Projects</h2> 
        <button className='btn-x' onClick={handleClose}>
             <p className='text-white x'>x</p> 
        </button>
    </div>
</div>

            {/* 2. Modal Body - Content Area (All content scrolls here) */}
            <Modal.Body className='os-window-body p-0'>
                {/* --- Content Scroll Wrapper (Allows scrolling of the entire body) --- */}
                <div className="p-4 h-full overflow-y-auto">
                    
                    {/* --- Section: Completed Projects --- */}
                    <h3 className="text-2xl font-semibold text-white mb-4 border-b border-gray-600 pb-2">Completed Projects</h3>
                    
                    <Container fluid>
                        {/* Responsive Grid Layout (Tailwind classes for 2 columns) */}
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                            
                            {/* Project 1: Ninjafy (Netflix Clone) */}
                            <div>
                                <Pro icon={blog1} screenshot={blog3} ss1={blog2} ss2={blog4} ss3={blog5} {...info[2]} />
                            </div>

                            <div>
                                <Pro icon={cafelogo} screenshot={cafe1} ss1={cafe1} ss2={cafe2} ss3={cafe3} ss4={cafe4} {...info[4]} />
                            </div>
                            
                            {/* Project 2: Sigdi */}
                            <div>
                                <Pro icon={klogo} screenshot={k1} ss1={k1} ss2={k2} ss3={k3} ss4={k4} {...info[5]} />
                            </div>
                            
                            {/* Project 3: Lucky Egg */}
                            <div>
                                <Pro icon={llogo} screenshot={lume1} ss1={lume1} ss2={lume2} ss3={lume4} ss4={lume5} {...info[0]} />
                            </div>
                            
                            {/* Project 4: To Do List */}
                            
                            {/* Project 5: ArtoGraphy (Spotify Covers) */}
                            
                            {/* Project 7: Apple Clone */}
                            <div>
                                <Pro icon={tdi1} screenshot={tdi5} ss1={tdi1} ss2={tdi2} ss3={tdi3} {...info[6]} />
                            </div>
                            
                            {/* Project 8: Horeca */}
                            <div>
                                <Pro icon={um1} screenshot={um1} ss1={um1} ss2={um4} ss3={um3} ss4={um4} {...info[1]} />
                            </div>

                            <div>
                                <Pro icon={netflixy} screenshot={net1} ss1={net1} ss2={net4} ss3={net3} ss4={net4} {...info[3]} />
                            </div>
                            

                        </div>
                    </Container>


                    {/* --- Section: Upcoming Projects --- */}
                    {/* <h3 className="text-2xl font-semibold text-white mt-8 mb-4 border-b border-gray-600 pb-2">Upcoming Projects</h3>
                    
                    <Container fluid>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                            <div>
                                <ProComing icon={spot} screenshot={preview} name={"Spotify-Clone"} category={"Music"} type={"WebApp"} tech={info[0].tech} unique={info[0].unique} />
                            </div>
                            <div>
                                <ProComing icon={notion} screenshot={preview} name={"Notion-Clone"} category={"Productivity"} type={"WebApp"} link={info[0].link} tech={info[0].tech} unique={info[0].unique} />
                            </div>
                        </div>
                    </Container> */}
                </div>
            </Modal.Body>
        </Modal>

        {/* --- Desktop Icon for Launching the Modal --- */}
        <center>
         <div className='icon-box' onClick={handleShow}>
            <img className="icon" src={props.image} alt={`${props.name} icon`} />
            <p className='icon-name'>{props.name}</p>
        </div>
        </center>
        </>
    )
}
export default Projects;