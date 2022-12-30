import React, { Component } from "react";
import { Link } from "react-router-dom";
import './keynotes.css'; 
import './../../App.css'; 

import person1 from './img/lady.jpg';
import person2 from './img/thomas.jpg';
import person3 from './img/Marc.jpg';

class keynotes extends Component {

  render() {

    return (
      <div className="fixed">


        
        <div className="row">
        <div className="divcenter1"><h4 className="PageTitles">KEY NOTE SPEAKERS</h4>
          <hr class="style2"></hr>
          </div>
         

          
        </div>

        <div className="divcenter"><h4 className="PageTitles">Prof. I.K.Loaff | Engineering Technology</h4>
          <hr class="hr-12"></hr>
          <img src={person2} alt="Avatar" />
          <p>In 2012,Prof. I.K.Loaff was the recipient of the Faculty of the Year Award at Lawrence Technological University.
             He is an internationally educated scholar with a PhD in Applied Mathematics from the Universite Catholique De Louvain of Belgium.
              He joined Lawrence Technological University in 1997 and currently serves as a professor in the Engineering Technology department.
               He is also the program manager for Focus: HOPE—a committee for manufacturing engineering education.
              Notably,Prof. I.K.Loaff is the director of the master’s program in engineering technology and actively holds various prestigious memberships, 
              including founder and president of the Mesopotamian American Graduate Association. </p>
          </div>


          <div className="divcenter"><h4 className="PageTitles">Prof. Amei Fross | Mobile Robotics Engineering</h4>
          <hr class="hr-12"></hr>
          <img src={person1} alt="Avatar" />
          <p>Since 2001, Dr. Amei Fross has served as a professor and Fulbright scholar in the Department of Technology at Northern Illinois University. 
            Prior to joining Northern Illinois University, Dr. Amei Fross joined the faculty at the University of Portsmouth and the University of Sheffield in the UK.
           Dr.Amei Fross has received millions of dollars in grants for his research and is the author of over 100 scholarly papers.
            She has also held various roles within professional membership societies, including serving as a program evaluator for the Accreditation Board for Engineering and Technology (ABET). Currently, he’s the editor-in-chief for the International Journal of Online Engineering. His teaching and research areas of expertise are related to the Internet of Things (IoT), focusing on cyberphysical systems, cyberlearning, embedded systems, and mobile robotics.</p>
          </div>

          <div className="divcenter"><h4 className="PageTitles">Prof. I.S. Jawahir | Computer Science</h4>
          <hr class="hr-12"></hr>
          <img src={person3} alt="Avatar" />
          <p>Prof. I.S. Jawahir,  was born April 19, 1931, in Durham, North Carolina. 
            Growing up in the Raleigh/Durham region, he earned his AB in physics at Duke University in 1953.
            Prof. I.S. Jawahirthen joined the pioneering degree program in computer science at Harvard University,
             where he earned his SM in 1955 and his PhD in 1956. At Harvard he was a student of Howard Aiken, who during World War II developed the Harvard Mark I, one of the largest electromechanical calculators ever built, and the first automatic digital calculator built in the United States.</p>
         
          </div>
      </div>

    );
  }
}

export default keynotes;
