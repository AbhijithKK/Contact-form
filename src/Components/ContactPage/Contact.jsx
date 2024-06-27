import { useEffect, useState } from "react";
import InputBox from "../InputBox/InputBox";
import Labels from "../Label/Labels";
import "./Contact.css";
import { userSchema } from "../Validation/Validation";
const Contact = () => {
  const LabelStyle = {
    marginBottom: "8px",
  };
  const checkboxStyle = {
    display: "flex",
    borderRadius: "5px",
    border: "1px solid hsl(186, 15%, 59%)",
  };


  const radio = {
    height: "30px",
    borderRadius: "5px",
    border: "1px solid hsl(186, 15%, 59%)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "10px",
    gap: "5px",
    flex: "1 1 auto",
  };

  const [radios1, setRadio1] = useState(null);
  const [radios2, setRadio2] = useState(null);
  const [checkbox, setCheckBox] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState({});

  const setRadios1 = (e) => {
    setRadio1(e.target.checked);
    setRadio2(false);
  };
  const setRadios2 = (e) => {
    setRadio2(e.target.checked);
    setRadio1(false);
  };
  const SubmitData=async()=>{
   try {
    let userData=await userSchema.validate({
      firstName:firstName,
      lastName:lastName,
      email:email,
      message:message,     
      checkbox:checkbox,
      radio:radios1
    },{ abortEarly: false })
    // console.log(userData);
   } catch (error) {
    if (error.name === 'ValidationError') {
      let temp={
        firstName:undefined,
        lastName:undefined,
        email:undefined,
        message:undefined,
        checkbox:undefined,
        radio:undefined,

      }
      error.inner.forEach((err)=>{
        if (err.path==='firstName') {
          temp.firstName=err.message
        }else if (err.path==='lastName') {
          temp.lastName=err.message

        }else if (err.path==='email') {
          temp.email=err.message

        }else if (err.path==='radio') {
          temp.radio=err.message

        }else if (err.path==='message') {
          temp.message=err.message

        }else if (err.path==='checkbox') {
          temp.checkbox=err.message

        }
        setErrorMessage(temp)
      })
    }   }
  }
  console.log(errorMessage);
  return (
    <>
      <div className="main-container">
        <div className="form">
          <h3>Conact Us</h3>
          <div className="input-boxes">
            <div className="row1-container">
              <div className="row1">
                <Labels Name={"First Name"} ContainerStyles={LabelStyle} />
                <InputBox className={errorMessage?.firstName?'errorBorder':''} type={"text"} value={firstName} onchangeFnc={(e)=>setFirstName(e.target.value)} />
                
                  <small>{errorMessage?.firstName}</small>

                
              </div>
              <div className="row1">
                <Labels Name={"Last Name"} ContainerStyles={LabelStyle} />
                <InputBox className={errorMessage?.firstName?'errorBorder':''} type={"text"} value={lastName} onchangeFnc={(e)=>setLastName(e.target.value)} />
                <small>{errorMessage?.lastName}</small>

              </div>
            </div>
            <div className="row2-container">
              <div className="row1">
                <Labels Name={"Email Address"} ContainerStyles={LabelStyle} />
                <InputBox className={errorMessage?.firstName?'errorBorder':''} type={"email"} value={email} onchangeFnc={(e)=>setEmail(e.target.value)} />
                <small>{errorMessage?.email}</small>

              </div>
            </div>

            <div className="row1-container">
              <div className="row1 radio">
                <Labels Name={"Qery Type"} ContainerStyles={LabelStyle} />
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    width: "100%",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={radio} className={radios1 ? "newRadio" : ""}>
                    <InputBox
                      type={"radio"}
                      name={"radio"}
                      onchangeFnc={setRadios1}
                      value={"Enquiry"}
                    />
                    <label>General Enquiry</label>
                  </div>

                  <div style={radio} className={radios2 ? "newRadio" : ""}>
                    <InputBox
                      type={"radio"}
                      name={"radio"}
                      onchangeFnc={setRadios2}
                      value={"Request"}
                    />
                    <label>Support Request</label>
                  </div>
                </div>
                <small>{errorMessage?.radio}</small>

              </div>
            </div>

            <div className="row2-container">
              <div className="row1">
                <Labels Name={"Message"} ContainerStyles={LabelStyle} />
                <textarea
                  className={errorMessage?.message?' textarea errorBorder':'textarea'}
                  onChange={(e)=>setMessage(e.target.value)} value={message}
                ></textarea>
               
                  
                  <small>{errorMessage?.message}</small>

                
              </div>
            </div>

            <div className="row3-container">
              <div>
                <div className="row-checkbox">
                  <InputBox type={"checkbox"} style={checkboxStyle} value={checkbox} onchangeFnc={(e)=>setCheckBox(e.target.checked)} />
                  <Labels Name={"I consent to being contacted the team"} />
                </div>
                <small>{errorMessage?.checkbox}</small>
           </div>
            </div>

            <div className="row4-container">
              <div className="row-button">
                <button  onClick={SubmitData} className="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
