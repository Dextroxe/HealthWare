import "../../css/LoginPage.css"
import DoctorLogin from "./doctor_login"
import PatientLogin from "./patient_login"
import HospitalLogin from "./hospital_login"
import { useState } from "react"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
const LoginPage = () => {

    const [value, setValue] = useState();
    const [content, setContent] = useState();
    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => {
    
        if (val ===1) {
     
            setValue(<DoctorLogin/>)
            setContent("Doctor's")
        } 
        else if (val === 2){
         
            setValue(<PatientLogin/>)
            setContent("Patient's")
        }
        else if (val === 3){
           
            setValue(<HospitalLogin/>)
            setContent("Hospital's")
        }
        
    };




    return (
        <>
            <div className="loginBody">
            <h1>Login : {!content ? "Doctor's" : content}</h1>

                <section className="navbody">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}  className="toggle" onChange={handleChange} >
                        <ToggleButton id="tbg-radio-1" value={1}>
                            Doctor Login 
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-2"  value={2}>
                            Patient Login
                        </ToggleButton>
                        <ToggleButton id="tbg-radio-3" value={3}>
                            hospital Login
                        </ToggleButton>
                    </ToggleButtonGroup>
                </section>
                <br/>
                <section className="loginBox">
                {!value ? <DoctorLogin/> : value} 
                {/* {value} */}
                </section>
            </div>
        </>
    );
}

export default LoginPage;