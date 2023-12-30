import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import "./projects.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Pro from "./pro"
import netflix from "../../assets/images/netflix.png"
import net from "../../assets/images/netflix.png";
import netflixy from "../../assets/icons/netflix.png"
import sigdi from "../../assets/images/sigdi.jpeg";import sig from "../../assets/images/sigdi.png"
import lucky from "../../assets/images/lucky.jpeg";import egg from "../../assets/images/lucky.png";
import todo from "../../assets/icons/todo.png";import list from "../../assets/images/todolist.png";
import art from "../../assets/images/art.jpeg";import artgallery from "../../assets/images/art.png"
import blog from "../../assets/images/blog.jpeg";import journal from "../../assets/images/blog.png";
import spot from "../../assets/icons/spotify-clone.png";import notion from "../../assets/icons/notion.png";
import preview from "../../assets/images/preview.jpeg";
import net1 from "../../assets/images/net1.png";import net2 from "../../assets/images/net2.png";
import net3 from "../../assets/images/net3.png";import net4 from "../../assets/images/net4.png";
import sig1 from "../../assets/images/sig1.png";import sig2 from "../../assets/images/sig2.png";
import sig3 from "../../assets/images/sig3.png";import sig4 from "../../assets/images/sig4.png";
import egg1 from "../../assets/images/egg1.png";import egg2 from "../../assets/images/egg2.png";
import egg3 from "../../assets/images/egg3.png";import egg4 from "../../assets/images/egg4.png";
import blog1 from "../../assets/images/blog1.png";import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
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
import ProComing from './projects/procoming';


const info=[
  {
    about:"Ninjafy, a bespoke creation crafted with ReactJS, mirrors the essence of the beloved streaming giant, Netflix. This dynamic website encapsulates the allure of entertainment, offering users a familiar yet personalized experience akin to the renowned platform. Employing the robustness of ReactJS, Ninjafy replicates Netflix's user interface, featuring a sleek design and intuitive navigation. The site presents a rich array of content, showcasing movies, series, and documentaries, meticulously arranged to evoke the Netflix streaming experience. Utilizing React's flexibility, Ninjafy delivers a seamless, responsive interface that mirrors the essence of effortless entertainment at your fingertips."
    ,date:"August 2023 - Sept 2023",
    more:"Ninjafy stands as a testament to innovation and immersive entertainment, a bespoke creation crafted meticulously using ReactJS to mirror the acclaimed streaming platform, Netflix. This dynamic website doesn't merely replicate Netflix's interface; it encapsulates its essence, delivering a captivating, user-friendly experience reminiscent of the beloved platform. Leveraging the versatility and agility of ReactJS, Ninjafy offers an intricately designed interface that mirrors Netflix's sleekness, allowing users to seamlessly navigate and explore a diverse library of movies, series, and documentaries.The site's architecture, ingeniously built with ReactJS components, ensures a responsive, engaging user experience across various devices. Users are greeted with an interface resembling Netflix's signature layout, with personalized recommendations, search functionalities, and categorizations akin to the original platform. The implementation of React's state management and component-based structure enables dynamic content updates and smooth interactions, elevating the user's streaming experience.Ninjafy isn't just a clone; it's a testament to the power of ReactJS in recreating seamless, immersive user experiences. By harnessing the capabilities of this cutting-edge technology, Ninjafy brings the magic of Netflix to users' screens, offering a glimpse into a world of limitless entertainment and a testament to the possibilities of modern web development."
  ,link:"https://wonderful-peony-85ac00.netlify.app/",tech:["html","css","js","reactjs"],unique:"This was one of the biggest project i build while i was just learning Reactjs It was damn Fun creating stuff by myself.I havent created this by watching any YT tuto and also this was my Final Year Project."
  },
  {
    about:"Sigdi, a culinary haven for food enthusiasts, welcomes visitors to indulge in a gastronomic journey that intertwines tradition with innovation. The website offers a captivating landing page, inviting guests to explore the tantalizing world of Sigdi. Providing essential information about the restaurant, including its menu offerings and ambiance, the site showcases an enticing gallery featuring delectable dishes and the restaurant's vibrant atmosphere. Additionally, a detailed 'About Us' section provides insight into Sigdi's rich history, passion for culinary excellence, and its commitment to delivering an unforgettable dining experience."
    ,date:"Oct 2023 - Oct 2023",
    more:`Sigdi, renowned for its culinary prowess, stands as a beacon of exceptional dining within the food and hospitality landscape. The website serves as a digital gateway into the soul of Sigdi, strategically crafted to captivate visitors with its seamless blend of tradition and modernity. The landing page serves as an inviting portal, adorned with elegant design elements that beckon guests to delve deeper. Beyond its aesthetic allure, this digital abode acts as an informative hub, detailing Sigdi's menu offerings, ranging from aromatic traditional dishes to innovative culinary creations that tantalize taste buds. The gallery section, a visual feast in itself, showcases an array of meticulously crafted dishes, each photograph intricately capturing the essence and artistry behind Sigdi's culinary creations. Furthermore, the 'About Us' segment narrates the enchanting story behind Sigdi, tracing its roots, celebrating its culinary heritage, and unveiling the passionate dedication that fuels its commitment to culinary excellence. From the moment visitors enter this digital space, they're enveloped in an immersive journey, not merely about food but about an unforgettable dining experience waiting to be savored at Sigdi.`
  ,link:"https://starlit-lokum-187d67.netlify.app/",tech:["html","css","js","reactjs"],unique:"This was one of my first project I created for a client but the client's Buisness was closing and when i went to apporach them to sell the website they were already leaving the buisness.Kinda waste of efforts but was a fun project anyway."
  },
  {
    about:"Lucky Egg, a haven for the young at heart, invites adults into a world of boundless amusement and playful revelry. The website serves as a vibrant gateway to this realm of entertainment, featuring a dynamic landing page meticulously designed to captivate visitors. Offering essential insights into our eclectic product range and brand essence, the landing page acts as a spirited introduction. It proudly showcases a lively gallery spotlighting an assortment of innovative and engaging party toys, each handpicked to ignite laughter and add a spark to any gathering. Complementing this showcase is our 'About Us' section, weaving a narrative that embodies our dedication to infusing celebrations with joy, laughter, and a touch of whimsical delight."
    ,date:"Sept 2023 - Oct 2023",
    more:`At Lucky Egg, we curate a world of entertainment tailored for the discerning adult seeking vibrant, laughter-filled celebrations. Our website serves as an enticing portal into this realm of fun and excitement, designed to captivate from the first click. The meticulously crafted landing page serves as a vibrant introduction, offering a tantalizing glimpse into our diverse lineup of party toys designed specifically for grown-up revelry. The gallery section, a visual feast of joy and innovation, proudly displays an array of quirky, engaging products meticulously designed to infuse gatherings with laughter and create unforgettable moments.

    Beyond the allure of our products, our 'About Us' segment narrates the spirited story behind Lucky Egg. It delves into our passion for injecting life into festivities, our commitment to crafting unique and entertaining toys, and our dedication to sparking joy in every celebration. Through our digital presence, we invite visitors to embrace a world where fun knows no age limit, where each product embodies our belief in the power of playfulness to unite, entertain, and create lasting memories. Lucky Egg isn't just about toys; it's about fostering connections, igniting laughter, and ensuring that every occasion becomes an extraordinary celebration.`
    ,link:"https://cheery-dusk-f66bd4.netlify.app/",tech:["html","css","js","reactjs"],unique:"This project was build like a fun little project for a page i follow on Instagram. They make fun party games.I learnt many things regarding layout and stuff and also proper use of coloring and etc."
  },{
    about:"My To-Do List web application, developed with Node.js, Express.js, and EJS, offers a streamlined approach to managing tasks efficiently. This intuitive platform provides users with a clean and user-friendly interface to create, organize, and track their tasks effortlessly. Leveraging the power of Node.js and Express.js, the app ensures smooth data handling and seamless communication between the server and client. EJS templates enhance the user experience, facilitating dynamic content rendering and allowing users to easily add, edit, or mark tasks as complete, fostering productivity with simplicity at its core."
    ,date:"",
    more:"Embodying simplicity and efficiency, my To-Do List web application is a testament to streamlined task management, built with Node.js, Express.js, and EJS. This platform epitomizes user convenience, offering an intuitive interface that empowers individuals to organize their tasks effortlessly. Leveraging the robust capabilities of Node.js and Express.js, the app ensures a robust backend infrastructure, facilitating seamless data handling and efficient communication between the server and client.The utilization of EJS templates elevates the user experience, enabling dynamic content rendering and interactive task management. Users are greeted with a clean and responsive interface, where they can easily create, modify, and categorize tasks according to their preferences. The application's fluidity lies in its ability to enable users to add new tasks, update existing ones, and mark completed tasks, all in a simple and intuitive manner."
    ,link:"https://to-do-list-54ey.onrender.com/",tech:["html","css","js","NodeJS","ExpressJS","EJS"],unique:"My First ever Full stack app i created using Node and Express and Body-parser. I created this while learning The full stack Development.Had lot of learning regarding BackEnd stuff and also finding a site to deploy Node apps was a hectic job too."
  },
  {
    about:"This Collecton Consists Of 31 Unique Spotify Cover Images . The Real Challange Here Was That I Put My Playlist On The Random And Started To Play It On Shuffle And Whichever Song Came On I Need To Make An Cover Image On That One ."
    ,date:"",
    more:"In this web project crafted with HTML, CSS, and JavaScript, I embarked on a unique endeavor to curate a collection comprising 31 distinct Spotify cover images. The creative challenge was as intriguing as it was spontaneous. I set my playlist on shuffle, embracing the uncertainty of the next song selection. With each track that played, I embraced the challenge of swiftly crafting a bespoke cover image inspired by the essence of that specific song.The process was a harmonious blend of creativity and spontaneity. As melodies unfolded, I translated their essence into visually captivating cover images, each encapsulating the mood, vibe, or spirit of the corresponding track. This project not only honed my design skills but also served as a testament to the fusion of music and visual artistry. Each image in this collection tells a story, mirroring the diversity and dynamism of the playlist, while also reflecting the spur-of-the-moment inspiration that guided its creation."
    ,link:"https://omkarjninja.github.io/spotify/",tech:["html","css","js","Bootstrap"],unique:"This was my one of the most unique project back in my early days of coding.One of the projects which i used to brag about around my friends.This project was created to mixture my coding and graphic design skills."
  },
  {
    about:"Ninjas Diary, my Blog web application crafted with Node.js, Express.js, and EJS, offers a personalized platform for sharing thoughts and experiences. This dynamic app empowers users to create, publish, and engage with content seamlessly. Leveraging the power of Node.js and Express.js, it ensures secure data handling and smooth communication between users. With the help of EJS templates, the platform offers a visually appealing interface, facilitating easy creation and management of blog posts while fostering an interactive environment for readers and writers alike.",
    date:"",
    more:"Ninjas Diary stands as an interactive and dynamic platform, meticulously crafted using Node.js, Express.js, and EJS, offering a personalized haven for bloggers and readers alike. This versatile application redefines the blogging experience, empowering users to effortlessly share their thoughts, stories, and insights with a global audience. Harnessing the robust capabilities of Node.js and Express.js, the app ensures a robust backend infrastructure, guaranteeing secure user authentication, data storage, and seamless communication between the server and client.The EJS templates play a pivotal role in enhancing user engagement, providing a visually immersive and intuitive interface for creating, managing, and browsing blog posts. Writers are welcomed into an environment where crafting and publishing content is streamlined and enjoyable, thanks to the intuitive editor and customizable features. Simultaneously, readers are immersed in an inviting space that encourages exploration, interaction, and feedback on published posts, fostering a sense of community"
    ,link:"https://blogging-p10v.onrender.com/",tech:["html","css","js","NodeJS","ExpressJS","EJS"],unique:"This was my another Full Stack app I created using the technolgies I was learning It was a multipage blog-site with seperate page for compose and results."
  },
  {
    about:"My Apple.com Clone project, developed while honing layout and design skills, showcases a meticulous replica of Apple's website. Created using ReactJS and Tailwind CSS, this project delves into the fundamentals of web layout and design principles. The clone features a striking resemblance to Apple's website, emphasizing responsiveness and visual fidelity. It serves as a testament to my learning journey, allowing me to delve into the intricacies of frontend development, including layout structuring, component design, and CSS styling using Tailwind CSS.",
    date:"",
    more:"The Apple.com Clone stands as a testament to my exploration of frontend development principles, crafted meticulously with ReactJS and Tailwind CSS. This project served as an invaluable learning experience, immersing me in the intricacies of web layout, design, and responsive development. Mirroring the acclaimed Apple website, this clone isn't just a visual replica but a deep dive into the foundational aspects of modern web design.Through the use of ReactJS, I grasped the significance of component-based architecture, fostering modularity and reusability in the codebase. Tailwind CSS, with its utility-first approach, empowered me to fine-tune the design intricacies, allowing for rapid prototyping and flexible styling choices. From mastering grid layouts to understanding responsive design principles, this project allowed me to experiment with various design elements present on the original Apple website."
    ,link:"https://stellar-taffy-cfa49f.netlify.app/",tech:["html","css","js","reactjs","tailwindCSS"],unique:"This was my Project i created When i was doing a challenge of 15 days 15 websites on linkedin . I learnt many things and stuff regarding tailwindcss while doing these projects."
  },
  {
    about:"Horeca's website serves as a tantalizing window into a world of culinary delights and exquisite hospitality. The landing page, thoughtfully crafted, offers a glimpse into the essence of Horeca, enticing visitors with basic yet enticing information about its gastronomic offerings and luxurious accommodations. This digital portal serves as an appetizer, inviting guests to explore further and experience the fusion of culinary artistry and top-tier hospitality awaiting them at Horeca.",
    date:"",
    more:"At the heart of Horeca's digital presence lies a meticulously designed website that beckons visitors into a realm of culinary excellence and premium hospitality. This virtual gateway, meticulously structured, offers more than just a landing page; it's a curated introduction to the exceptional experience awaiting patrons. Beyond its basic yet inviting information, the site encapsulates the essence of Horeca's culinary prowess and luxurious accommodations, skillfully enticing guests to embark on an unforgettable journey.The landing page acts as a tantalizing teaser, hinting at the diverse gastronomic offerings and the lavish amenities that define the Horeca experience. Through strategic design elements and concise content, it introduces guests to the ambiance, signature dishes, and comforts they can anticipate. The imagery and layout speak volumes, hinting at the sophistication and quality that permeate every aspect of the Horeca experience. From tantalizing menus to glimpses of elegant interiors, the landing page sets the stage for visitors, inviting them to delve deeper into the world of culinary innovation and refined hospitality that defines Horeca."
    ,link:"https://lucent-truffle-f3de7f.netlify.app/",tech:["html","css","js","reactjs"],unique:"Similiarly this was also a project i created when i was doing the challenge of 15 days 15 websites . This was rather simple project But learnt a lot regarding Fixed nav bar and sticky title section."
  },
  {
    about:"My project is a user-friendly website crafted with ReactJS, serving as a hub for discovering and exploring a curated collection of diverse Spotify playlists. It's designed to seamlessly connect music enthusiasts with an array of playlists, each handpicked to cater to various tastes and moods. This platform simplifies the search for new music by presenting an assortment of playlists, accompanied by links and embedded Spotify players, offering users an interactive and immersive way to discover fresh tracks across different genres and themes.",
    date:"",
    more:"Within the realm of my ReactJS-driven website lies a treasure trove of musical exploration. This platform transcends conventional playlist curation by presenting a diverse array of Spotify playlists meticulously curated to cater to varied tastes, preferences, and vibes. The essence of this project is to provide a user-friendly interface where music aficionados can seamlessly delve into an extensive collection of playlists, each carefully selected to evoke different emotions, accompany various activities, or suit diverse musical tastes.What sets this website apart is its intuitive design, ensuring effortless navigation through the assortment of playlists. Users can peruse through a spectrum of genres, from soothing melodies to heart-thumping beats, effortlessly accessing links and utilizing embedded Spotify players to sample tracks instantly. The interactive nature of the platform encourages music discovery, allowing users to explore new genres or rediscover familiar ones. It's not just about the playlists; it's a gateway to a world of musical exploration, connecting enthusiasts with curated sounds and fostering a community passionate about discovering new beats and melodies."
    ,link:"https://silly-khapse-67b05f.netlify.app/",tech:["html","css","js","reactjs","tailwindCSS"],unique:"This was also a project for that challenge . I was running out of ideas and so i opened spotify to listen to some music . But then i got 2 ideas but was confused on which one to work with so went to google and searched for random choice selector. and it landed on spotify playlists app. so ya i got playlists from reddit and other places sorted them on the basis of vibes. embed those playlists.Then boom it was done."
  },
  {
    about:"My Nike.com Clone project, developed while learning layout design techniques, mirrors the aesthetics and functionality of Nike's official website. Crafted using ReactJS and Tailwind CSS, this project served as an instrumental learning experience, allowing me to delve into layout structuring and frontend design principles. The clone emulates Nike's website, focusing on responsive design and visual fidelity. Through this endeavor, I honed my skills in frontend development, particularly in layout design and CSS styling, utilizing Tailwind CSS to create a visually compelling and responsive user interface.",
    date:"",
    more:"The Nike.com Clone project stands as a testament to my journey in mastering layout design and frontend development techniques. Crafted meticulously with ReactJS and Tailwind CSS, this endeavor was an immersive exploration into replicating the renowned aesthetics and functionalities of Nike's official website. The project served as an invaluable learning tool, allowing me to dissect and comprehend the intricate elements of modern web design.Throughout the development process, I focused on grasping responsive design principles, ensuring the clone's adaptability across various devices and screen sizes. Tailwind CSS became my cornerstone, enabling me to streamline CSS styling and rapidly prototype components, empowering me to fine-tune layouts and achieve pixel-perfect precision akin to the original Nike website. Beyond mere replication, this project was about delving into the nuances of frontend development, from structuring complex layouts to implementing interactive features that mirrored Nike's user experience."
    ,link:"https://resilient-klepon-5f5c75.netlify.app/",tech:["html","css","js","reactjs","tailwindCSS"],unique:"This was my first Project with tailwindcss had lot of fun ,lot of learnings regarding tailwind and came up with preety good UI and page everything was perfect. This was also Created for that Challenge."
  },
  {
    about:"My project is a humble tribute to Team India following their valiant efforts in the ICC Cricket World Cup 2023 final against Australia. This ReactJS-based website serves as a platform to honor the team's journey and express support and appreciation for their hard work and dedication throughout the tournament. It's a simple yet heartfelt gesture to convey admiration and solidarity to the players and the team, acknowledging their achievements and resilience on the cricketing stage",
    date:"",
    more:"The creation of this ReactJS-based website stemmed from a heartfelt desire to pay homage to Team India's remarkable journey in the ICC Cricket World Cup 2023, particularly after their spirited performance in the final against Australia. The platform was conceived as a space to extend support, appreciation, and gratitude to the team for their unwavering dedication and outstanding sportsmanship throughout the tournament. Beyond the game's outcome, this website aimed to celebrate the resilience, skill, and unity displayed by Team India, acknowledging their incredible efforts that captivated and inspired cricket enthusiasts worldwide.This online tribute sought to capture the emotions and sentiments of fans, offering a digital space where supporters could express their admiration, share messages of encouragement, and reminisce about memorable moments from the tournament. Through simple yet impactful design elements, the website conveyed a sense of unity and solidarity, reminding Team India that they were champions in the eyes of millions. It was more than a digital presence; it served as a collective voice echoing appreciation and respect for the team's unwavering commitment to the sport and their nation."
    ,link:"https://meek-sherbet-2a390d.netlify.app/",tech:["html","css","js","reactjs"],unique:"This post was like a sudden burst of ideas i took it out and planned and made a site for Team India after they lost the final against Austrailia , After performing damn good whole tournament it was a heartbreak for everyone supporting.So ya it was a fun little project."
  },
  {
      about:"My project is a Simple blog website centered around the exhilarating world of cars, meticulously crafted using ReactJS and Tailwind CSS. This platform is a haven for automotive enthusiasts, offering a curated space to delve into the latest trends, reviews, and captivating stories from the realm of automobiles. With a sleek and responsive design, this blog beckons readers to explore a wealth of articles, discussions, and insights that cater to their passion for cars, all presented through a user-friendly interface."
  ,date:"",
  more:"The creation of this blog website dedicated to cars was born out of a passion for automobiles and a desire to cultivate a community around this shared enthusiasm. Leveraging the flexibility and interactivity offered by ReactJS and the streamlined styling capabilities of Tailwind CSS, this platform serves as a digital hub for car aficionados. Its sleek, modern interface offers an inviting space where enthusiasts can immerse themselves in a plethora of content, ranging from in-depth vehicle reviews and discussions on automotive innovations to captivating stories and insights from the world of cars.The user experience takes center stage, with a design that's both visually appealing and highly functional. Tailwind CSS played a pivotal role in creating a responsive layout that adapts seamlessly to various devices, ensuring an optimal reading experience for visitors across desktops, tablets, and smartphones. Through intuitive navigation and well-organized categories, readers can easily explore a diverse array of articles, each meticulously crafted to cater to different aspects of the automotive world."
  ,link:"https://peppy-beijinho-f93e9c.netlify.app/",tech:["html","css","js","reactjs","tailwindCSS"],unique:"This was like my site for that challenge.Wanted to create something damn good looking and also something that has a functionality , Made a blog section which was good looking and everything is perfect."
    }

]

function Projects(props){
    const [showProject, setShowProject] = useState(false);
 
    const handleClose = () => setShowProject(false);
    const handleShow = () => setShowProject(true);
    return(
        <>
         <Modal dialogClassName='model' size='xl' show={showProject} onHide={handleClose} className='special_modal'>
         <Modal.Header >
           {/* <Modal.Title >My Projects</Modal.Title> */}
           <div className='hey'>
          <h2 className='spotify-title'>My Projects</h2><button className='btn-x' onClick={handleClose}>X</button>
          </div>
         </Modal.Header>
         <Modal.Body>
         <Container>
          <Row>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
             <Pro icon={netflixy} screenshot={net1} name={"Ninjafy"} category={"Entertainment"} type={"WebApp"}
             ss1={net1} ss2={net2} ss3={net3} ss4={net4} about={info[0].about} date={info[0].date} more={info[0].more}
             link={info[0].link} tech={info[0].tech} unique={info[0].unique}
             ></Pro>
              </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
           <Pro icon={sigdi} screenshot={sig} name={"Sigdi"} category={"Food"} type={"WebSite"}
           ss1={sig1} ss2={sig2} ss3={sig3} ss4={sig4} about={info[1].about} date={info[1].date} more={info[1].more}
           link={info[1].link} tech={info[1].tech} unique={info[1].unique}
           ></Pro>
            </Col>
          </Row>
          <Row>
          <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
          <Pro icon={lucky} screenshot={egg} name={"Lucky Egg"} category={"Games"} type={"WebSite"}
          ss1={egg1} ss2={egg2} ss3={egg3} ss4={egg4} about={info[2].about} date={info[2].date} more={info[2].more}
          link={info[2].link} tech={info[2].tech} unique={info[2].unique}
          ></Pro>
              </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
            <Pro icon={todo} screenshot={list} name={"To Do List"} category={"Productivity"} type={"WebApp"}
            ss1={todo1} ss2={todo2} ss3={todo3}  about={info[3].about} date={info[3].date} more={info[3].more}
            link={info[3].link} tech={info[3].tech} unique={info[3].unique}
            ></Pro>
            </Col>
          </Row>
          <Row>
          <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
          <Pro icon={art} screenshot={artgallery} name={"ArtoGraphy"} category={"Art"} type={"WebSite"}
          ss1={spot1} ss2={spot2} ss3={spot3} ss4={spot4} about={info[4].about} date={info[4].date} more={info[4].more}
          link={info[4].link} tech={info[4].tech} unique={info[4].unique}
          ></Pro>
            </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
            <Pro icon={blog} screenshot={journal} name={"Ninja's Diary"} category={"Blog"} type={"WebApp"}
            ss1={blog1} ss2={blog2} ss3={blog3} about={info[5].about} date={info[5].date} more={info[5].more}
            link={info[5].link} tech={info[5].tech} unique={info[5].unique}
            ></Pro>
              </Col>
          </Row>
          <Row>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
             <Pro icon={apple} screenshot={apple1} name={"Apple"} category={"E Commerce"} type={"WebSite"}
             ss1={apple1} ss2={apple2} ss3={apple3} about={info[6].about} date={info[6].date} more={info[6].more}
             link={info[6].link} tech={info[6].tech} unique={info[6].unique}
             ></Pro>
              </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
           <Pro icon={horeca} screenshot={hor1} name={"Horeca"} category={"Food"} type={"WebSite"}
           ss1={hor1} ss2={hor4} ss3={hor3} ss4={hor4} about={info[7].about} date={info[7].date} more={info[7].more}
           link={info[7].link} tech={info[7].tech} unique={info[7].unique}
           ></Pro>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
             <Pro icon={playlist} screenshot={play1} name={"Sp0tify-Playlists"} category={"Music"} type={"Webapp"}
             ss1={play1} ss2={play2} ss3={play3} ss4={play4} about={info[8].about} date={info[8].date} more={info[8].more}
             link={info[8].link} tech={info[8].tech} unique={info[8].unique}
             ></Pro>
              </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
           <Pro icon={nike} screenshot={nike1} name={"Nike"} category={"Fashion"} type={"WebApp"}
           ss1={nike1} ss2={nike2} ss3={nike3} ss4={nike4} about={info[9].about} date={info[9].date} more={info[9].more}
           link={info[9].link} tech={info[9].tech} unique={info[9].unique}
           ></Pro>
            </Col>
          </Row>
          <Row>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
             <Pro icon={india} screenshot={jup1} name={"Team India"} category={"Support"} type={"Website"}
             ss1={jup1} ss2={jup2} ss3={jup3}  about={info[10].about} date={info[10].date} more={info[10].more}
             link={info[10].link} tech={info[10].tech} unique={info[10].unique}
             ></Pro>
              </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
           <Pro icon={car} screenshot={car1} name={"Car's Blog"} category={"Car"} type={"WebApp"}
           ss1={car1} ss2={car2} ss3={car3} ss4={car4} about={info[11].about} date={info[11].date} more={info[11].more}
           link={info[11].link} tech={info[11].tech} unique={info[11].unique}
           ></Pro>
            </Col>
          </Row>
        </Container>
         </Modal.Body>
         <Modal.Header>
           <Modal.Title >Upcoming Projects</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         <Container>
          {/* <Row>
          <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
          <Pro icon={spot} screenshot={preview} name={"Spotify-Clone"} category={"Music"} type={"WebApp"}
           tech={info[0].tech} unique={info[0].unique}
          ></Pro>
              </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
            <Pro icon={notion} screenshot={preview} name={"Notion-Clone"} category={"Productivity"} type={"WebApp"}
            link={info[0].link} tech={info[0].tech} unique={info[0].unique}
            ></Pro>
            </Col>
          </Row> */}
          <Row>
          <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
          <ProComing icon={spot} screenshot={preview} name={"Spotify-Clone"} category={"Music"} type={"WebApp"}
           tech={info[0].tech} unique={info[0].unique}
          ></ProComing>
              </Col>
            <Col sm={12} xxl={6} md={12} lg={6} xl={6}>
            <ProComing icon={notion} screenshot={preview} name={"Notion-Clone"} category={"Productivity"} type={"WebApp"}
            link={info[0].link} tech={info[0].tech} unique={info[0].unique}
            ></ProComing>
            </Col>
          </Row>
         </Container>
         </Modal.Body>
       </Modal>
        <center>
         <div className='icon-box' onClick={handleShow}>
            <img className="icon" src={props.image}  ></img>
            <p className='icon-name'>{props.name}</p>
        </div>
        </center>
        </>
    )
}
export default Projects;