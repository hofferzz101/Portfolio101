import "./SkillsBars.css"

  const SkillsBars =()=>{
      

     return(
       <div className="skills">
           <h1 style={{fontFamily:'monospace'}}>Skills</h1>
           <li>
           <h3 style={{fontFamily:'monospace'}}>HTML5</h3><span className="bar"><span className="html"></span></span>
           </li>

           <li>
           <h3 style={{fontFamily:'monospace'}}>CSS</h3><span className="bar"><span className="css"></span></span>
           </li>

           <li>
           <h3 style={{fontFamily:'monospace'}}>JQUERRY</h3><span className="bar"><span className="jquery"></span></span>
           </li>

           <li>
           <h3 style={{fontFamily:'monospace'}}>JAVASCRIPT</h3><span className="bar"><span className="javascript"></span></span>
           </li>
           
       </div>

        )
  
    }





  export default SkillsBars;