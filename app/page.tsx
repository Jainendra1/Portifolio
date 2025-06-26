import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"

import type { data as DataType } from "@/types/main"

async function getData(): Promise<DataType> {

  const staticData: DataType = {

    /****************************Basic Details******************************/
    "main": {
      "name": "Deepika Redrouthu",
      "shortDesc": "I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.",
      "titles": [
        "Frontend Development",
        "App Development"
      ],
      //"heroImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      //"heroImage": "https://drive.google.com/uc?export=download&id=1UQt7_B6QOWqz0MSFeQ7988nCs7ujU6Es", //emoji
      //"heroImage": "https://drive.google.com/uc?export=download&id=1cppRX0wwoJwvXmGE8ml-69peB6cqsUDc", //sample image
      //"heroImage": "https://drive.google.com/uc?export=download&id=1UFbqy05vxey-_1fjxjSELY5dwqk7m5pP", //College image
      "heroImage":"https://drive.google.com/uc?export=download&id=1cvnJ9dRI3j9vBSv2Mht5xqJFjxUHtVdq", //chitti
      "techStackImages": [
        "https://img.icons8.com/color/144/000000/material-ui.png",
        "https://img.icons8.com/color/144/000000/html-5--v1.png",
        "https://img.icons8.com/color/144/000000/redux.png",
        "https://img.icons8.com/color/144/000000/chakra-ui.png"
      ]
    },
    "about": {
      //"aboutImage": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
      "aboutImage": "https://drive.google.com/uc?export=download&id=1UQt7_B6QOWqz0MSFeQ7988nCs7ujU6Es",
      "aboutImageCaption": "< I build stuff 🚀/>",
      "title": "Full Stack Developer",
      "about": "I am a Full-Stack developer based in Hyderabad, India. I aspire to utilize my expertise in object oriented programming in an esteemed software organization that will enable me to use my strong organizational skills and educational background, where I can grow with the growth of the company.",
      "callUrl": "",
      "resumeUrl": "https://drive.google.com/file/d/1DylowhhoEE5zObn3zWF5WeG3y7Toiri8/view"
    },


    /******************************SOCIAL LINKS************************************************/
    "socials": [
      {
        "name": "likedIn",
        "icon": "FaLinkedin",
        "link": "https://www.linkedin.com/in/jhon-doe"
      },
      {
        "name": "Github",
        "icon": "FaGithub",
        "link": "https://github.com/deepikaredrouthu"
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
      /***************************FRONTEND ICONS***************************************************/
      {
        "name": "JavaScript",
        "image": "https://img.icons8.com/color/480/javascript.png",
        "category": "Frontend"
      },
      {
        "name": "NextJS",
        "image": "https://img.icons8.com/color/480/nextjs.png",
        "category": "Frontend"
      },
      {
        "name": "ReactJS",
        "image": "https://img.icons8.com/color/480/react-native.png",
        "category": "Frontend"
      },
      {
        "name": "Flutter",
        "image": "https://img.icons8.com/?size=100&id=IYQQHplg11Ie&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "App Development",
        "image": "https://img.icons8.com/?size=100&id=2wRCMlI8odhH&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "Dart",
        "image": "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000",
        "category": "Frontend"
      },
      {
        "name": "Redux",
        "image": "https://img.icons8.com/color/480/redux.png",
        "category": "Frontend"
      },
      {
        "name": "TypeScript",
        "image": "https://img.icons8.com/color/480/typescript.png",
        "category": "Frontend"
      },
      {
        "name": "HTML5",
        "image": "https://img.icons8.com/color/480/html-5--v1.png",
        "category": "Frontend"
      },
      {
        "name": "CSS3",
        "image": "https://img.icons8.com/color/480/css3.png",
        "category": "Frontend"
      },
      {
        "name": "Bootstrap",
        "image": "https://img.icons8.com/color/480/bootstrap.png",
        "category": "Frontend"
      },
      {
        "name": "Sass",
        "image": "https://img.icons8.com/color/480/sass.png",
        "category": "Frontend"
      },
      /************************BACKEND ICONS*******************************/
      {
        "name": "NodeJS",
        "image": "https://img.icons8.com/color/480/nodejs.png",
        "category": "Backend"
      },
      {
        "name": "ExpressJS",
        "image": "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
        "category": "Backend"
      },
      {
        "name": "MongoDB",
        "image": "https://img.icons8.com/color/480/mongodb.png",
        "category": "Backend"
      },
      {
        "name": "Firebase",
        "image": "https://img.icons8.com/color/480/firebase.png",
        "category": "Backend"
      },
      {
        "name": "MySQL",
        "image": "https://img.icons8.com/fluency/480/mysql-logo.png",
        "category": "Backend"
      },
      /******************TOOLS*****************************/
      {
        "name": "GitHub",
        "image": "https://img.icons8.com/material-outlined/96/null/github.png",
        "category": "Tools"
      },
      {
        "name": "Googling",
        "image": "https://img.icons8.com/color/512/google-logo.png",
        "category": "Tools"
      },
      {
        "name": "Git",
        "image": "https://img.icons8.com/color/512/git.png",
        "category": "Tools"
      },
      {
        "name": "Jira",
        "image": "https://img.icons8.com/ios-filled/512/jira.png",
        "category": "Tools"
      },
      {
        "name": "Vercel",
        "image": "https://cdn.worldvectorlogo.com/logos/vercel.svg",
        "category": "Tools"
      }
    ],


    /***************************************PROJECTS******************************************/
    "projects": [
      {
        "name": "MLS: Multiple Listing Service",
        "techstack": "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS",
        "category": "MERN Stack",
        "image": "https://drive.google.com/uc?export=download&id=1K93-T3pd6JMNz992W5brCDvQNBonE5Nn",
        "links": {
          "code": "",
          "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "visit": "https://mlstest.dosystemsinc.com/"
        }
      },

      {
        "name": "School",
        "techstack": "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS",
        "category": "MERN Stack",
        "image": "https://drive.google.com/uc?export=download&id=1Pjas1frOxwGfhUaQt8RbH67RvJ1ATcbn",
        "links": {
          "code": "",
          "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "visit": "https://mlstest.dosystemsinc.com/"
        }
      },

      {
        "name": "Crash Cart",
        "techstack": "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS",
        "category": "MERN Stack",
        "image": "https://drive.google.com/uc?export=download&id=1tnF2w9y265pWE7GfPU6axmrd3fO1rLix",
        "links": {
          "code": "",
          "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "visit": "https://cc.dosystemsinc.com/"
        }
      },

      {
        "name": "MLS: Multiple Listing Service",
        "techstack": "ReactJS, NodeJS, ExpressJS, MongoDB, Flutter, Dart",
        "category": "Mobile",
        "image": "https://drive.google.com/uc?export=download&id=1Tjob5A3HCk2TOHzkkTRN2NICMEX-smih",
        "links": {
          "code": "",
          "video": "https://www.youtube.com/watch?v=JWFQYw9t5bM",
          "visit": "https://play.google.com/store/apps/details?id=com.mlsapp.mobileApp&hl=en_IN&pli=1"
        }
      },
    ],

    "educations": [
      {
        "institute": "XYZ School | SSC",
        "degree": "HSC Science",
        "duration": "2014 - 2016",
        "startDate": "01/01/2001",
        "endDate": "01/01/2025",
        "desc": ["CHeck"]
      },
      {
        "institute": "XYZ College Of Engineering",
        "degree": "B.Tech CSE",
        "duration": "2016 - 2020",
        "startDate": "01/01/2001",
        "endDate": "01/01/2025",
        "desc": [
          "Pursuing IT Engineering course from ABC University",
          "Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL",
          "Familiar with software development methodologies and project management practices, including Agile and Waterfall methodologies."
        ]
      }
    ],


    /***************************************EXPERENCIES*******************************************************/
    "experiences": [
      {
        "company": "Jayeesha Software pvt",
        "position": "Web Developer",
        "duration": "2023 -2025",
        "startDate": "10/01/2023",
        "endDate": "17/04/2025",
        "desc": [
          "Assisted with design and development of project.",
          "Worked on building the product from scratch and built multiple dashboards.",
          "Skills: ReactJS . HTML · CSS · Flutter . Dart . JavaScript · NodeJS"
        ]
      },
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