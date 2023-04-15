// import '../../css/LoginPage.css'
import DoctorSignup from "./doctorSignup"
import PatientSignup from "./patientSignup"
import HospitalSignup from "./hospitalSignup"
import { useState } from "react"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import "../../css/signup.css"

const Signup = () => {
    const [value, setValue] = useState();
    const [content, setContent] = useState();
    /*
     * The second argument that will be passed to
     * `handleChange` from `ToggleButtonGroup`
     * is the SyntheticEvent object, but we are
     * not using it in this example so we will omit it.
     */
    const handleChange = (val) => {

        if (val === 1) {

            setValue(<DoctorSignup />)
            setContent("Doctor's")
        }
        else if (val === 2) {

            setValue(<PatientSignup />)
            setContent("Patient's")
        }
        else if (val === 3) {

            setValue(<HospitalSignup />)
            setContent("Hospital's")
        }

    };




    return (
        <>
            <div className="completeBody">

                <section className="navbody">
                    <h1>Sign up : {!content ? "Doctor's" : content}</h1>
                        
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange} className="toggle">
                            <ToggleButton id="tbg-radio-1" value={1}>
                                Doctor Signup
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2}>
                                Patient Signup
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-3" value={3}>
                                hospital Signup
                            </ToggleButton>
                    </ToggleButtonGroup>
                        
                </section>
            </div>
            {/* <br /> */}
            <section >
                {!value ? <DoctorSignup /> : value}
            </section>
        </>
    )
}

export default Signup;