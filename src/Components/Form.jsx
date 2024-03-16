import React, { useState } from "react";


export default function Form() {

    const [namefield, setNameField] = useState("");
    const [emailFiled, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [region, setRegion] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState([]);
    const [comment, setComment] = useState("");
    const [hoverSubmitBtn, sethoverSubmitBtn] = useState("btn btn-primary");
    const [errorInName, setErrorInName] = useState([]);
    const [showAlert, setShowAlert] = useState("");
    const [showNumAlert, setShowNumAlert] = useState("")
    const [showErrorNums, setShowErrorNums] = useState([])
    const [ErrorColor, setErrorColor] = useState("black")
    // ======================================
    // ======================================
    //*   STATES ENDED         STATES ENDED         STATES ENDED  */
    // ======================================
    // ======================================

    const showerrorinName = {
        color: ErrorColor
    }

    let errorKeys = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
    let errorNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    const giveValue = (e) => {
        const inputValue = e.target.value;

        // Regular expression to match any special characters
        const specialCharRegex = /[!@#$%^=&+=_*()-]/;
        // Regular expression to match any numbers
        const numRegex = /[0-9]/;

        // Check for special characters
        if (specialCharRegex.test(inputValue)) {
            setErrorInName(errorKeys);
            setShowAlert("show");
            setErrorColor("red");
        } else {
            setShowAlert("");
            setErrorColor("");
            setNameField(inputValue);
        }

        // Check for numbers
        if (numRegex.test(inputValue)) {
            setShowErrorNums(errorNums);
            setShowNumAlert("show");
            setErrorColor("red");
        } else {
            setShowNumAlert("");
        }
    }

    // ====================================
    // ******************NAME FIELD END********************
    // ====================================

    const emailValid = (e) => {
        setEmail(e.target.value);
    };
    // ====================================
    // ******************Email FIELD END********************
    // ====================================

    const passwordSetup = (e) => {
        setPassword(e.target.value);
    };
    // ====================================
    // ****************Password FIELD END********************
    // ====================================

    const regionSelect = (e) => {
        setRegion(e.target.value)
    };
    // ====================================
    // ******************DropDown FIELD END****************
    // ====================================

    const selectGender = (e) => {
        setGender(e.target.value);
    };

    // ====================================
    // ******************Gender FIELD END********************
    // ====================================

    const languageSetup = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            // If checkbox is checked, add the value to the language array if it doesn't already exist
            if (!language.includes(value)) {
                setLanguage(prevLanguage => [...prevLanguage, value]);
            }
        } else {
            // If checkbox is unchecked, remove the value from the language array if it exists
            setLanguage(prevLanguage => prevLanguage.filter(lang => lang !== value));
        }
    };

    // ====================================
    // **************Language FIELD END********************
    // ====================================

    const commentSetup = (e) => {
        setComment(e.target.value);
    };
    // ====================================
    // ****************Comment FIELD END******************
    // ====================================
    const overButton = (e) => {
        sethoverSubmitBtn("btn btn-success")
    };

    const offButton = (e) => {
        sethoverSubmitBtn("btn btn-primary")
    };

    const customStylesForSpecialChar = {
        position: "absolute",
        top: "5%",
        left: "50%",
        transform: "translate(-50%,0%)",
        color: "red"
    }
    const customStylesForNumberAlertBox = {
        position: "absolute",
        bottom: "5%",
        left: "50%",
        transform: "translate(-50%,0%)",
        color: "red"
    }

    return (
        <React.Fragment>
            <div className={`alert alert-danger alert-dismissible fade text-center shadow ${showNumAlert}`} role="alert" style={customStylesForNumberAlertBox}>
                <strong style={{ letterSpacing: "10px" }}>{showErrorNums}</strong> <br />Number Are Not Allowed in Name Field
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            {/* ****************************************** */}
            {/* ------------------MY Special Character Alert box-------------------- */}
            {/* ****************************************** */}
            <div className={`alert alert-danger alert-dismissible fade text-center shadow ${showAlert}`} role="alert" style={customStylesForSpecialChar}>
                <strong style={{ letterSpacing: "10px" }}>"{errorInName.sort()}"</strong><br /> Special Characters Are not allowed You should check it out!
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            {/* ****************************************** */}
            {/* ------------------MY Form-------------------- */}
            {/* ****************************************** */}
            <form className="px-5 py-3 bg-secondary text-white">
                <div className="row mb-5">
                    <h2 className='text-white text-center border-bottom border-white p-5'>Form Components - Validation - Form Submission</h2>
                </div>
                {/* ************Heading END************** */}
                <div className="row mb-5">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label d-flex align-items-center">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control p-3" id="inputEmail3" onChange={giveValue} style={showerrorinName} />
                    </div>
                </div>
                {/* ************ROW 1 NAME END************** */}
                <div className="row mb-5">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label d-flex align-items-center">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control  p-3" id="inputEmail3" onChange={emailValid} />
                    </div>
                </div>
                {/* ************ROW 2 Email END************** */}
                <div className="row mb-5">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label d-flex align-items-center">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control p-3" id="inputPassword3" onChange={passwordSetup} />
                    </div>
                </div>
                {/* ************ROW 3 Password END************** */}
                <fieldset className="row mb-5">
                    <legend className="col-form-label col-sm-2 pt-0  d-flex align-items-center">Gender :</legend>
                    <div className="col-sm-10 d-flex align-items-center gap-5">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="Male"
                                onClick={selectGender}
                            />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="Female"
                                onClick={selectGender}
                            />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                Female
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios3"
                                value="Other"
                                onClick={selectGender}
                            />
                            <label className="form-check-label" htmlFor="gridRadios3">
                                Other
                            </label>
                        </div>
                    </div>
                </fieldset>
                {/* ************ROW 4 Radio END************** */}
                <div className="row mb-5">
                    <div className="col-sm-2 d-flex align-items-center">
                        <label htmlFor="language">Language's :</label>
                    </div>
                    <div className="col-sm-10 d-flex align-items-center gap-5">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                                value="English"
                                onClick={languageSetup}
                            />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                English
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck2"
                                value="urdu"
                                onClick={languageSetup}
                            />
                            <label className="form-check-label" htmlFor="gridCheck2">
                                Urdu
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck3"
                                value="Arabic"
                                onClick={languageSetup}
                            />
                            <label className="form-check-label" htmlFor="gridCheck3">
                                Arabic
                            </label>
                        </div>
                    </div>
                </div>
                {/* ************ROW 5 CheckBox END************** */}
                <div className="row mb-5">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={regionSelect}>
                            <option>Select Region</option>
                            <option>Oceania</option>
                            <option>Europe</option>
                            <option>Asia</option>
                            <option>Americas</option>
                            <option>Africa</option>
                        </select>
                        <label htmlFor="floatingSelect">International.org</label>
                    </div>
                </div>
                {/* SELECT BOX END */}
                <div className="row mb-5">
                    <div className="form-floating">
                        <textarea className="form-control p-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} onChange={commentSetup}></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                </div>
                {/* ************ROW 6 TEXTAREA END************** */}
                <button onMouseOver={overButton} onMouseOut={offButton} type="submit" className={hoverSubmitBtn} onClick={(e) => e.preventDefault()}>
                    Submit
                </button >
            </form >
            {/* ****************************************** */}
            {/* ------------------MY TABLE ______------------------- */}
            {/* ****************************************** */}
            <table className="table text-center" cellPadding={"10vw"}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Propertie's</th>
                        <th scope="col">Value's</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>{namefield}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Email</td>
                        <td>{emailFiled}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Region</td>
                        <td>{region}</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Gender</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Language</td>
                        {language.length > 0 ? (
                            <td>{language.map((e, index) => (index >= 1 ? " - " + e : e))}</td>
                        ) : (
                            <td>{language[0]}</td>
                        )}

                    </tr>
                    <tr className="gap-5">
                        <th scope="row">7</th>
                        <td>Comment</td>
                        <td>{comment}</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}