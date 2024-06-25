import InputBox from "../InputBox/InputBox";
import Labels from "../Label/Labels";
import "./Contact.css";
const Contact = () => {
  const LabelStyle = {
    marginBottom: "8px",
  };
  const inputstyle = {
    width: "100%",
    height: "30px",
    borderRadius: "5px",
    border: "1px solid hsl(148, 38%, 70%)",
  };
  return (
    <>
      <div className="main-container">
        <div className="form">
          <h3>Conact Us</h3>
          <div className="input-boxes">
            <div className="row1-container">
              <div className="row1">
                <Labels Required={true} Name={"First Name"} ContainerStyles={LabelStyle} />
                <InputBox type={'text'} style={inputstyle} />
              </div>
              <div className="row1">
                <Labels Required={true} Name={"Last Name"} ContainerStyles={LabelStyle} />
                <InputBox type={'text'} style={inputstyle} />
              </div>
            </div>
            <div className="row2-container">
              <div className="row1">
                <Labels Required={true} Name={"Email Address"} ContainerStyles={LabelStyle} />
                <InputBox type={'email'} style={inputstyle} />
              </div>
            </div>
            <div className="row1-container">
              <div className="row1">
                <Labels Required={true} Name={"Qery Type"} ContainerStyles={LabelStyle} />
                <InputBox type={'radio'} radioGroup={'a'} style={inputstyle} />
              </div>
              <div className="row1">
                <Labels Required={false} Name={""} ContainerStyles={LabelStyle} />
                <InputBox type={'radio'} radioGroup={'a'} style={inputstyle} />
              </div>
            </div>
            <div className="row2-container">
              <div className="row1">
                <Labels Required={true} Name={"Message"} ContainerStyles={LabelStyle} />
                <InputBox type={'text-area'} style={inputstyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
