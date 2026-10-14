import childImg from "../assets/h7.png";
import checkbox from "../assets/Checkbox.png";
import "../styles/Benefits.css"
const Benefits = () => {
  return (
    <div className="benefits">
        <div className="benefits-image">
           <img src={childImg} alt="back to school" />
        </div>    

        <div className="benefits-text">
            <h2>What will your child <br />
                get after studying at <br /> 
                Edudu?
            </h2>
                <ul>
                    <li> <span className="chb">
                          <img src={checkbox} alt="checkbox" className="check" /> Master program knowledge at school
                        </span>
                    </li>
                    <li> 
                        <span className="chb">
                        <img src={checkbox} alt="checkbox" className="check" />The ability to criticize knowledge increases
                        </span>
                        
                    </li>
                    <li>
                        <span className="chb">
                        <img src={checkbox} alt="checkbox" className="check" />Respond confidently when encountering <br />
                        difficult situations
                    </span>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Benefits
