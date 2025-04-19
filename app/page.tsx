import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

import type { data as DataType } from "@/types/main"

async function getData(): Promise<DataType> {
  const staticData: DataType = {
    "main": {
      "name": "Deepika Redrouthu",
      "shortDesc": "I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.",
      "titles": [
        "Frontend Development",
        "App Development"
      ],
      "heroImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      "techStackImages": [
        "https://img.icons8.com/color/144/000000/material-ui.png",
        "https://img.icons8.com/color/144/000000/html-5--v1.png",
        "https://img.icons8.com/color/144/000000/redux.png",
        "https://img.icons8.com/color/144/000000/chakra-ui.png"
      ]
    },
    "about": {
      "aboutImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      "aboutImageCaption": "< I build stuff 🚀/>",
      "title": "Full Stack Developer",
      "about": "I am a Full-Stack developer based in Pune, India. I'm an Information Technology undergraduate from SPPU, and my journey in web development began during my first year of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.",
      "callUrl": "",
      "resumeUrl": ""
    },
    "socials": [
      {
        "name":"likedIn",
        "icon": "FaLinkedin",
        "link": "https://www.linkedin.com/in/jhon-doe"
      },
      {
        "name": "Github",
        "icon": "FaGithub",
        "link": "https://github.com/jhon-doe"
      },
      {
        "name": "Insta",
        "icon": "FaInstagram",
        "link": "https://www.instagram.com/jhondoe"
      },
      {
        "name": "Twitter",
        "icon": "FaTwitter",
        "link": "https://twitter.com/jhondoe"
      }
    ],
    "skills": [
      {
        "name": "JavaScript",
        "image": "https://img.icons8.com/color/144/null/javascript--v1.png",
        "category": "Frontend"
      },
      {
        "name": "Firebase",
        "image": "https://img.icons8.com/color/144/null/firebase.png",
        "category": "Backend"
      },
      {
        "name": "GitHub",
        "image": "https://img.icons8.com/material-outlined/96/null/github.png",
        "category": "Tools"
      }
    ],
    "projects": [
      {
        "name": "Project Title",
        "techstack": "HTML5, CSS3, JavaScript, jQuery",
        "category": "MERN Stack",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        "links": {
          "code": "",
          "video": "https://www.youtube.com/watch?v=JWFQYw9t5bM",
          "visit": "https://instagramweb-mern.vercel.app/"
        }
      },
      {
        "name": "Project Title",
        "techstack": "Flutter, Dart, Firebase",
        "category": "Flutter",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        "links": {
          "code": "",
         "video": "https://www.youtube.com/watch?v=JWFQYw9t5bM",
          "visit": "https://instagramweb-mern.vercel.app/"
        }
      },
      {
        "name": "Project Title",
        "techstack": "PHP, MySQL, HTML5, CSS3, Bootstrap, JavaScript",
        "category": "LAMP Stack",
        "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
        "links": {
          "code": "",
          "video": "https://www.youtube.com/watch?v=JWFQYw9t5bM",
          "visit": "https://instagramweb-mern.vercel.app/"
        }
      }
    ],
    "educations": [
      {
        "institute": "XYZ School | SSC",
        "degree": "HSC Science",
        "duration": "2014 - 2016",
        "startDate": "01/01/2001",
        "endDate":"01/01/2025",
        "desc": ["CHeck"]
      },
      {
        "institute": "XYZ College Of Engineering",
        "degree": "B.Tech CSE",
        "duration": "2016 - 2020",
        "startDate": "01/01/2001",
        "endDate":"01/01/2025",
        "desc": [
          "Pursuing IT Engineering course from ABC University",
          "Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL",
          "Familiar with software development methodologies and project management practices, including Agile and Waterfall methodologies."
        ]
      }
    ],
    "experiences": [
      {
        "company": "ABC Tech Solutions",
        "position": "Web Developer",
        "duration": "2020 -2022",
        "startDate": "01/01/2001",
        "endDate":"01/01/2025",
        "desc": [
          "Assisted with design and development of project.",
          "Worked on building the product from scratch and built multiple dashboards.",
          "Skills: HTML · CSS · JavaScript · TailwindCSS · ReactJS · NodeJS · MySQL · REST APIs"
        ]
      },
      {
        "company": "XYZ Tech Solutions",
        "position": "Web Developer",
        "duration": "2022 - present",
        "startDate": "01/01/2001",
        "endDate":"01/01/2025",
        "desc": [
          "Assisted with design and development of project.",
          "Worked on building the product from scratch and built multiple dashboards.",
          "Skills: HTML · CSS · JavaScript · TailwindCSS · ReactJS · NodeJS · MySQL · REST APIs"
        ]
      }
    ]
  }
  
  return staticData
}


export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}