import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id:0,
    title: "Countdown Timer",
    desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
    img: "/project_1.png",
    tags: ["Next.JS", "Node", "CSS", "Typescript"],
  },  
  {
    id:1,
    title: "Weather Widget",
    desc: "A Nextjs and TypeScript based tool for fetching and displaying real-time weather data.",
    img: "/project_2.png",
    tags: ["Next.js", "Node", "CSS", "Typescript"],
  },
  {
    id:2,
    title: "Currency Converter",
    desc: "A simple HTML and Typescript powered tool for converting with real-time rates.",
    img: "/project_3.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
       <Heading title='My Projects' />
       <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
         {data.map((el) => (<Card 
         key={el.id}
         title={el.title}
         desc={el.desc}
         img={el.img}
         tags={el.tags}
         />))}
       </div>
    </div>
  )
}

export default Projects