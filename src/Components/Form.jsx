import React, { useState } from "react";

export default function Form() {

    const [namefield, setNameField] = useState("");
    const [emailFiled, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [region, setRegion] = useState("");
    const [gender, setGender] = useState("");
    const [language, setLanguage] = useState([]);
    const [comment, setComment] = useState("");

    const giveValue = (e) => {
        setNameField(e.target.value);
    };
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
    const [clicked, setClicked] = useState("btn btn-primary");
    const overButton = (e) => {
        setClicked("btn btn-success")
    };

    const offButton = (e) => {
        setClicked("btn btn-primary")
    };


    return (
        <>
            <form className="p-5">
                <div className="row mb-5">
                    <h2 className='text-success text-center border-bottom border-success'>Form Components : Validation : Form Submission</h2>
                </div>
                {/* ************Heading END************** */}
                <div className="row mb-4">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label d-flex align-items-center">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" onChange={giveValue} />
                    </div>
                </div>
                {/* ************ROW 1 NAME END************** */}
                <div className="row mb-4">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label d-flex align-items-center">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" onChange={emailValid} />
                    </div>
                </div>
                {/* ************ROW 2 Email END************** */}
                <div className="row mb-4">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label d-flex align-items-center">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" onChange={passwordSetup} />
                    </div>
                </div>
                {/* ************ROW 3 Password END************** */}
                <div className="row mb-4">
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
                <fieldset className="row mb-4">
                    <legend className="col-form-label col-sm-2 pt-0  d-flex align-items-center">Gender :</legend>
                    <div className="col-sm-10">
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
                <div className="row mb-3">
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
                {/* ******************************************************************** */}
                <div className="row mb-4">
                    <div className="form-floating">
                        <textarea className="form-control p-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} onChange={commentSetup}></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                    </div>
                </div>
                {/* ************ROW 6 TEXTAREA END************** */}
                <button onMouseOver={overButton} onMouseOut={offButton} type="submit" className={clicked}>
                    Submit
                </button >
            </form >
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
                            <td>{language.map((e, index) => (e + " - "))}</td>
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
        </>
    );
}