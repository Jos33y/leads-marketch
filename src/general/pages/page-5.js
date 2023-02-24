import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import PageFooter from "../components/page-footer";
import "./styles/pages.css";
import ImageOne from "../../assets/general/pg-5.png";
import { SendFinalQue } from "../../php/sendGeneral";


const GeneralConcludingQue = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        experience: '',
        userSessions: '',
    })

    const { experience } = formData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("experience", formData);
        SendFinalQue('c-que', formData);
        navigate("/g-thanks")
    }
    const goBack = () => {
        navigate("/g-4")
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
            navigate("/personal-info")
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
                                <p>5 of 5 Completed</p>
                                <div className="bar-one">
                                    <div className="bar-six"></div>
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
                                <li className="active-page"> <i className="fa-regular fa-circle-check"></i> <span className="p-text">  Concluding Question </span></li>

                            </ul>
                        </div>
                    </div>


                    {/* form section three - current page title and description */}
                    <div className="p-form-current-title">
                        <h3> Concluding Question </h3>
                        {/* <p> Please take a salfie with your document so that it’s clearly visible anddoses not cover your face.</p> */}
                    </div>

                    <form onSubmit={handleSubmit} >
                        {/* form section four - input sections to fill form details */}
                        <div className="p-form-input-sections">
                            <div className="row justify-content-center">
                                <div className="col-md-9">
                                    <div className="form-group">
                                        <label className="label-primary">Can you tell me about your experience with trading and investing?</label>
                                        <textarea cols="10" rows="10" 
                                        id="experience"
                                        value={experience}
                                        onChange={onChange}
                                        className="form-control" ></textarea>
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
                                        <button type="submit" className="btn btn-md btn-primary"> Submit <i className="fa-solid fa-arrow-right"></i> </button>
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

export default GeneralConcludingQue;