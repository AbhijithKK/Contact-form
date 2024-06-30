import { useState } from "react";
import InputBox from "../InputBox/InputBox";
import Labels from "../Label/Labels";
import "./Contact.css";
import { userSchema } from "../Validation/Validation";
import toast, { Toaster } from "react-hot-toast";

const CustomToast = ({ message, subMessage, svgUrl }) => (
  <div
    style={{
      backgroundColor: " rgb(13, 49, 11)",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={svgUrl}
        alt="icon"
        style={{ width: "15px", height: "15px", marginRight: "10px" }}
      />
      <div>{message}</div>
    </div>
    <div style={{ fontSize: "smaller", color: "#aaa" }}>{subMessage}</div>
    <div></div>
  </div>
);

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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState({});

  const setRadios1 = (e) => {
    setRadio1(e.target.checked);
    setRadio2(false);
  };

  const setRadios2 = (e) => {
    setRadio2(e.target.checked);
    setRadio1(false);
  };

  const SubmitData = async () => {
    let temp = {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      message: undefined,
      checkbox: undefined,
      radio: undefined,
    };
    try {
      let userData = await userSchema.validate(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          message: message,
          checkbox: checkbox,
          radio: radios1,
        },
        { abortEarly: false }
      );

      const svgUrl = "/src/assets/images/icon-success-check.svg";
      if (userData) {
        setErrorMessage(temp);
        
      }
      toast.custom((t) => (
        
        <CustomToast
          message="Message Sent!"
          subMessage="Thanks for completing the form.We'll be in touch soon!"
          svgUrl={svgUrl}
        />
      ));
    } catch (error) {
      if (error.name === "ValidationError") {
        
        error.inner.forEach((err) => {
          temp[err.path] = err.message;
        });
        setErrorMessage(temp);
      }
    }
  };
  const svgCheckbox = "/src/assets/images/icon-checkbox-check.svg";

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="main-container">
        <div className="form">
          <h3>Contact Us</h3>
          <div className="input-boxes">
            <div className="row1-container">
              <div className="row1">
                <Labels Name={"First Name"} ContainerStyles={LabelStyle} />
                <InputBox
                  className={errorMessage?.firstName ? "errorBorder" : ""}
                  type={"text"}
                  value={firstName}
                  onchangeFnc={(e) => setFirstName(e.target.value)}
                />
                <small>{errorMessage?.firstName}</small>
              </div>
              <div className="row1">
                <Labels Name={"Last Name"} ContainerStyles={LabelStyle} />
                <InputBox
                  className={errorMessage?.firstName ? "errorBorder" : ""}
                  type={"text"}
                  value={lastName}
                  onchangeFnc={(e) => setLastName(e.target.value)}
                />
                <small>{errorMessage?.lastName}</small>
              </div>
            </div>
            <div className="row2-container">
              <div className="row1">
                <Labels Name={"Email Address"} ContainerStyles={LabelStyle} />
                <InputBox
                  className={errorMessage?.firstName ? "errorBorder" : ""}
                  type={"email"}
                  value={email}
                  onchangeFnc={(e) => setEmail(e.target.value)}
                />
                <small>{errorMessage?.email}</small>
              </div>
            </div>
            <div className="row1-container">
              <div className="row1 radio">
                <Labels Name={"Query Type"} ContainerStyles={LabelStyle} />
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
                      className={'radio-input'}

                    />
                    <label>General Enquiry</label>
                  </div>
                  <div style={radio} className={radios2 ? "newRadio" : ""}>
                    <InputBox
                      type={"radio"}
                      name={"radio"}
                      onchangeFnc={setRadios2}
                      value={"Request"}
                      className={'radio-input'}
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
                  className={
                    errorMessage?.message ? "textarea errorBorder" : "textarea"
                  }
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <small>{errorMessage?.message}</small>
              </div>
            </div>
            <div className="row3-container">
              <div>
                <div className="row-checkbox">
                  <InputBox 
                  className={'input-checkbox'}
                    type={"checkbox"}
                    style={checkboxStyle}
                    value={checkbox}
                    onchangeFnc={(e) => setCheckBox(e.target.checked)}
                  />
                 <label className="checkbox-container" htmlFor="checkbox"></label>
                 <img className={checkbox?'svg-checkboxOn':'svg-checkbox'} src={svgCheckbox} alt="" />
                  <Labels Name={"I consent to being contacted the team"} />
                </div>
                <small>{errorMessage?.checkbox}</small>
              </div>
            </div>
            <div className="row4-container">
              <div className="row-button">
                <button onClick={SubmitData} className="button">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
