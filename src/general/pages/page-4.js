import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import PageFooter from "../components/page-footer";
import "./styles/pages.css";
import ImageOne from "../../assets/general/pg-4.png";
import { SendMarketKnow } from '../../php/sendGeneral';


const GeneralMarketKnw = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        marketKnow1: 'YES',
        marketKnow2: 'YES',
        marketKnow3: 'YES',
        marketKnow4: 'YES',
        userSessions: '', 
    })

    const { marketKnow1, marketKnow2, marketKnow3, marketKnow4 } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        SendMarketKnow('m-know', formData);
        navigate("/g-5")
    }
    const goBack = () => {
        navigate("/g-3")
    }


    const onChange = (e) => {

        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
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
                                <p>4 of 5 Completed</p>
                                <div className="bar-one">
                                    <div className="bar-five"></div>
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
                                <li className="active-page"> <i className="fa-regular fa-circle-check"></i> <span className="p-text">  Financial Background </span></li>
                                <li className="active-page"> <i className="fa-regular fa-circle-check"></i> <span className="p-text">  Market Knowledge </span></li>
                                <li> <i className="fa-regular fa-circle"></i> <span className="p-text">  Concluding Question </span></li>

                            </ul>
                        </div>
                    </div>


                    {/* form section three - current page title and description */}
                    <div className="p-form-current-title">
                        <h3> Market Knowledge </h3>
                        {/* <p> Please take a salfie with your document so that it’s clearly visible anddoses not cover your face.</p> */}
                    </div>

                    <form onSubmit={handleSubmit} >
                        {/* form section four - input sections to fill form details */}
                        <div className="p-form-input-sections">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label-primary">Have you taken any courses or educated yourself on the markets?</label>
                                        <select
                                            id="marketKnow1"
                                            defaultValue={marketKnow1}
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
                                        <label className="label-primary">Are you familiar with basic trading terms and concepts, such as stop-loss orders or diversification?</label>
                                        <select
                                            id="marketKnow2"
                                            defaultValue={marketKnow2}
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
                                        <label className="label-primary">Are you aware of tools and strategies that can help you manage risk, such as stop-loss orders or diversification of investments?</label>
                                        <select
                                            id="marketKnow3"
                                            defaultValue={marketKnow3}
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
                                        <label className="label-primary">Do you have a clear understanding of the market and its potential for returns as well as risks?</label>
                                        <select
                                            id="marketKnow4"
                                            defaultValue={marketKnow4}
                                            onChange={onChange}
                                            className="form-control">
                                            <option value="YES">YES</option>
                                            <option value="NO">NO</option>
                                        </select>
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

export default GeneralMarketKnw;