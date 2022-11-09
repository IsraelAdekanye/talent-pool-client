import React, { useState } from 'react'
import "../SearchResult/SearchResult.css";
import { AiOutlineGithub,AiFillLinkedin} from "react-icons/ai";
import {SiGmail}  from "react-icons/si";
import face2 from "../Images/face2.jpg"
import face1 from "../Images/face1.jpg"
import face3 from "../Images/face3.webp"

const SearchResult = () => {

    const data = [
        {
            "name": "Ajayi Ayomide",
            "stack" : "Front-end Developer",
            "imageUrl": face2 ,
            "gitLink": "www.github.com",
            "linkedinLink" : "www.linkedin.com",
            "gmailLink" : "www.gmail.com"
        },
        {
            "name": "Lawal Adunola",
            "stack" : "Back-end Developer",
            "imageUrl" : face1 ,
            "gitLink": "www.github.com",
            "linkedinLink" : "www.linkedin.com",
            "gmailLink" : "www.gmail.com"
            
        },
        {
            "name": "Lateef Lamina",
            "stack" : "Full Stack Developer",
            "imageUrl": face3 ,
            "gitLink": "www.github.com",
            "linkedinLink" : "www.linkedin.com",
            "gmailLink" : "www.gmail.com"
        },
        {
            "name": "Ajayi Ayomide",
            "stack" : "Back-end Developer",
            "imageUrl": face2 ,
            "gitLink": "www.github.com",
            "linkedinLink" : "www.linkedin.com",
            "gmailLink" : "www.gmail.com"
        },
        {
            "name": "Ajayi Ayomide",
            "stack" : "Back-end Developer",
            "imageUrl": face2 ,
            "gitLink": "www.github.com",
            "linkedinLink" : "www.linkedin.com",
            "gmailLink" : "www.gmail.com"
        }

    ] 
    const [techies ] = useState(data);


  return (
    <>
        <input type="text" className='search-input'placeholder='Enter your Search' ></input>
        <div className='searchResult'>
            {techies.map( (techie, id) => {
                return (
                    <div className='about' key={id}>
                        <img src={techie.imageUrl} alt="Man" />
                        <p> {techie.name} </p>
                        <span className='stack-title'>{techie.stack}</span>
                        <div className='social-link'>
                            <a href={techie.gitLink} > <AiOutlineGithub/> </a>
                            <a href={techie.linkedinLink} > <AiFillLinkedin /> </a>
                            <a href={techie.gmailLink} > <SiGmail /> </a>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default SearchResult