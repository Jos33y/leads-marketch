import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageFooter from "../components/page-footer";
import "./styles/pages.css";
import ImageOne from "../../assets/general/pg-2.png";
import { SendTradingExp } from "../../php/sendGeneral";

const GeneralTradingExp = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        tradeExp1: '1',
        tradeExp2: 'YES',
        features: [],
        userSessions: '',
    })

    const { tradeExp1, tradeExp2, features } = formData;


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("trading exp", formData);
        SendTradingExp('t-exp', formData)
        navigate("/g-3")
    }
    const goBack = () => {
        navigate("/")
    }

    const onChange = (e) => {

        if (e.target.checked) {
            setFormData((prevState) => ({
                ...prevState,
                features: [...features, e.target.value],
            }))

        }


        if (!e.target.checked) {
            setFormData((prevState) => ({
                ...prevState,
                [e.target.id]: e.target.value,
            }))

        }

    }

    const setSessions = async () => {

        let userSession = sessionStorage.getItem("sessionId");
        if(userSession == null) {
            navigate("/")
        }else {
            sessionStorage.setItem("sessionId", userSession);
            setFormData((prevState) => ({
                ...prevState,
                userSessions: userSession,
            }))
        }
     
    }

    useEffect(() => {
        setSessions().then();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div className="page-body">
                {/* form body section */}
                <div className="page-form-body">

                    {/* form section one */}
                    <div className="p-form-header row">
                        <div className="col-md-6">
                            <h4 className="form-title">Trading & Investment Survey </h4>
                        </div>

                        <div className="col-md-6">
                            <div className="p-form-progress-bar">
                                <p>2 of 5 Completed</p>
                                <div className="bar-one">
                                    <div className="bar-three"></div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* form section two - list of form data to fill */}
                    <div className="p-form-data-titles">
                        <div className="p-form-data-list">
                            <ul>
                                <li className="active-page"> <i className="fa-regular fa-circle-check"></i> <span className="p-text">  Personal Information </span></li>
                                <li className="active-page"> <i className="fa-regular fa-circle-check"></i> <span className="p-text">  Trading Experience </span></li>
                                <li> <i className="fa-regular fa-circle"></i> <span className="p-text">  Financial Background </span></li>
                                <li> <i className="fa-regular fa-circle"></i> <span className="p-text">  Market Knowledge </span></li>
                                <li> <i className="fa-regular fa-circle"></i> <span className="p-text">  Concluding Question </span></li>

                            </ul>
                        </div>
                    </div>


                    {/* form section three - current page title and description */}
                    <div className="p-form-current-title">
                        <h3> Trading Experience </h3>
                        {/* <p> Please take a salfie with your document so that it’s clearly visible anddoses not cover your face.</p> */}
                    </div>

                    <form onSubmit={handleSubmit} >
                        {/* form section four - input sections to fill form details */}
                        <div className="p-form-input-sections">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label-primary">On a scale of 1-10, how comfortable are you with taking risks in your investments?</label>
                                        <select
                                            id="tradeExp1"
                                            defaultValue={tradeExp1}
                                            onChange={onChange} className="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label-primary">Are you looking for a software that can help you trade in specific markets, such as cryptocurrency, stocks, or forex?</label>
                                        <select
                                            id="tradeExp2"
                                            defaultValue={tradeExp2}
                                            onChange={onChange}
                                            className="form-control">
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label-primary">What are the most important features you're looking for in a trading software?</label>
                                        <div className="p-list-form">
                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" value="Trading Dashboard" name="features" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Trading Dashboard  </label>
                                                </div>
                                            </div>

                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" value="Real-time Data" name="features" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Real-time Data </label>
                                                </div>
                                            </div>

                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" value="Charting and Technical Analysis" name="features" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Charting and Technical Analysis </label>
                                                </div>
                                            </div>
                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" value="Order Execution" name="features" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Order Execution </label>
                                                </div>
                                            </div>

                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" name="features" value="Risk Management" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Risk Management </label>
                                                </div>
                                            </div>

                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" name="features" value="Automated Trading" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Automated Trading </label>
                                                </div>
                                            </div>


                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" name="features" value="Trading Simulator" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Trading Simulator </label>
                                                </div>
                                            </div>

                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" name="features" value="Historical Data" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Historical Data </label>
                                                </div>
                                            </div>

                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" name="features" value="Account Management" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Account Management </label>
                                                </div>
                                            </div>

                                            {/* checkbox here */}
                                            <div className="p-form-check">
                                                <div className="form-check">
                                                    <input type="checkbox" id="flexCheckDefault" name="features" value="Customer Support" className="form-check-input" onChange={onChange} />
                                                    <label htmlFor="flexCheckDefault" className="form-check-label"> Customer Support </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>


                        {/* form section five - image and button */}
                        <div className="p-form-footer-section">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="p-form-image-section">
                                        <img src={ImageOne} alt="general img section" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="p-form-button-section">
                                        <button type="button" onClick={goBack} className="btn btn-md btn-secondary"> <i className="fa-solid fa-arrow-left"></i> Back </button>
                                        <button type="submit" className="btn btn-md btn-primary"> Next <i className="fa-solid fa-arrow-right"></i> </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>

                {/* page footer */}
                <PageFooter />
            </div>
        </>

    )
}

export default GeneralTradingExp;