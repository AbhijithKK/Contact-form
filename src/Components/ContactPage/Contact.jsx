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
    border: "1px solid hsl(186, 15%, 59%)",
  };
  const checkboxStyle = {
    display: "flex",
    borderRadius: "5px",
    border: "1px solid hsl(186, 15%, 59%)",
  };
  const inputstyletextArea = {
    width: "100%",
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
    flex:'1 1 auto'
  };
  return (
    <>
      <div className="main-container">
        <div className="form">
          <h3>Conact Us</h3>
          <div className="input-boxes">
            <div className="row1-container">
              <div className="row1">
                <Labels
                  Name={"First Name"}
                  ContainerStyles={LabelStyle}
                />
                <InputBox type={"text"} style={inputstyle} />
              </div>
              <div className="row1">
                <Labels
                  Name={"Last Name"}
                  ContainerStyles={LabelStyle}
                />
                <InputBox type={"text"} style={inputstyle} />
              </div>
            </div>
            <div className="row2-container">
              <div className="row1">
                <Labels
                  Name={"Email Address"}
                  ContainerStyles={LabelStyle}
                />
                <InputBox type={"email"} style={inputstyle} />
              </div>
            </div>









            <div className="row1-container">
              <div className="row1 radio">
                <Labels
                  Name={"Qery Type"}
                  ContainerStyles={LabelStyle}
                />
                <div style={{
                  display:'flex',
                  gap:'15px',
                  width:'100%',
                  flexWrap:'wrap'
                }}>

                <div style={radio}>
                  <InputBox type={"radio"} name={"radio"} />
                  <label>General Enquiry</label>
                </div>

              <div style={radio}>
                  <InputBox type={"radio"} name={"radio"} value={"a"} />
                  <label>Support Request</label>
                </div>
              </div>


                </div>

              {/* <div className="row1">
                <Labels
                  Required={false}
                  Name={""}
                  ContainerStyles={LabelStyle}
                />
               
              </div> */}
            </div>






            <div className="row2-container">
              <div className="row1">
                <Labels
                  Name={"Message"}
                  ContainerStyles={LabelStyle}
                />
                <textarea className="textarea" style={inputstyletextArea}></textarea>
              </div>
            </div>

            <div className="row3-container">
              <div className="row-checkbox">
                <InputBox type={"checkbox"} style={checkboxStyle} />
                <Labels
                  Name={"I consent to being contacted the team"}
                />
              </div>
            </div>
            <div className="row4-container">
              <div className="row-button">
                <button className="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
