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
      "heroImage": "https://drive.google.com/uc?export=download&id=1UFbqy05vxey-_1fjxjSELY5dwqk7m5pP", //College image
      //"heroImage":"https://drive.google.com/uc?export=download&id=1cvnJ9dRI3j9vBSv2Mht5xqJFjxUHtVdq", //chitti eluka
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
      "resumeUrl": "https://drive.google.com/file/d/1jnPy6hzq7JN3f9_HvdQL1PISiPW-vd0f/view?usp=sharing"
    },


    /******************************SOCIAL LINKS************************************************/
    "socials": [
      {
        "name": "likedIn",
        "icon": "FaLinkedin",
        "link": "https://www.linkedin.com/in/deepika-redrouthu-17ba04197"
      },
      {
        "name": "Github",
        "icon": "FaGithub",
        "link": "https://github.com/deepikaredrouthu"
      },
      // {
      //   "name": "Insta",
      //   "icon": "FaInstagram",
      //   "link": "https://www.instagram.com/jhondoe"
      // },
      // {
      //   "name": "Twitter",
      //   "icon": "FaTwitter",
      //   "link": "https://twitter.com/jhondoe"
      // }
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
      // {
      //   "name": "MySQL",
      //   "image": "https://img.icons8.com/fluency/480/mysql-logo.png",
      //   "category": "Backend"
      // },
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
          "video": "",
          "visit": "https://mlstest.dosystemsinc.com/"
        }
      },
      {
        "name": "DMS: Document Management System",
        "techstack": "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS,Redux Toolkit",
        "category": "MERN Stack",
        "image": "https://drive.google.com/uc?export=download&id=1uP9ominJ4MxSy_JztaIV2aENyjr25OgX",
        "links": {
          "code": "",
          "video": "",
          "visit": "https://dmsdev.dosystemsinc.com/"
        }
      },

      // {
      //   "name": "School",
      //   "techstack": "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS",
      //   "category": "MERN Stack",
      //   "image": "https://drive.google.com/uc?export=download&id=1Pjas1frOxwGfhUaQt8RbH67RvJ1ATcbn",
      //   "links": {
      //     "code": "",
      //     "video": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //     "visit": "https://mlstest.dosystemsinc.com/"
      //   }
      // },

      {
        "name": "Crash Cart",
        "techstack": "ReactJS, NodeJS, ExpressJS, MongoDB, TailwindCSS",
        "category": "MERN Stack",
        "image": "https://drive.google.com/uc?export=download&id=1z0Qi9tPAJX5anDPajfY322I-wbPiIUYJ",
        "links": {
          "code": "",
          "video": "",
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
          "video": "",
          "visit": "https://play.google.com/store/apps/details?id=com.mlsapp.mobileApp&hl=en_IN&pli=1"
        }
      },
    ],

    "educations": [
      {
        "institute": "Sri Chaitanya Junior College | SSC",
        "degree": "MPC",
        "duration": "2016 - 2018",
        "startDate": "01/04/2016",
        "endDate": "01/04/2018",
        "desc": []
      },
      {
        "institute": "ASN Women's Engineering College",
        "degree": "B.Tech ECE",
        "duration": "2018 - 2022",
        "startDate": "01/04/2018",
        "endDate": "01/04/2022",
       "desc": [
        "Graduated with a B.Tech in Electronics and Communication Engineering.",
        "Gained practical experience in web development through academic projects.",
        "Developed interactive web pages using HTML, CSS, and JavaScript.",
        "Collaborated with a small team to plan and build web features effectively.",
        "Took initiative in leading project tasks and coordinating with peers."
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
          "Contributed to the overall design and development of the project.",
          "Played a key role in building the product from scratch, including multiple interactive dashboards.",
          "Technical skills include ReactJS, HTML, CSS, Flutter, Dart, JavaScript, and NodeJS.",
          "Built a responsive web application using React.js and Tailwind CSS, increasing user engagement by 15%.",
          "Collaborated with a team of four to develop RESTful APIs using Node.js and Express for smooth frontend-backend integration.",
          "Optimized MongoDB queries, reducing response times by 20% and enhancing backend performance.",
          "Developed reusable React components to streamline code maintenance and accelerate development.",
          "Implemented efficient state management using React Hooks and the Context API.",
          "Enhanced frontend performance by reducing re-renders and integrating lazy loading techniques.",
          "Applied modern JavaScript practices (ES6+), including async/await, arrow functions, and destructuring for cleaner, maintainable code."
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