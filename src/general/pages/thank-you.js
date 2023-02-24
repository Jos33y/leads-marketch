import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import PageFooter from "../components/page-footer";
import "./styles/pages.css";
import ImageOne from "../../assets/general/ty-1.png";
import ImageTwo from "../../assets/general/ty-2.png";

const GeneralThankYou = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }


    useEffect(() => {
        sessionStorage.removeItem("sessionId");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div className="page-body">
                {/* thanks body section */}

                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="thanks-body">
                            <div className="thanks-body-top">
                                <div className="thanks-body-icon">
                                    <i className="fa-regular fa-circle-check"></i>
                                </div>
                                <div className="thanks-body-top-text">
                                    <div className="text-body-section">
                                        <h3> Thanks for filling the survey</h3>
                                        <p>Your feedback will be used to improve trading experiences.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="thanks-body-bottom">
                                <div className="thanks-body-button">
                                    <button onClick={goHome} className="btn btn-primary">Go Home </button>
                                </div>
                                <div className="thanks-body-footer">
                                    <p><i className="fa-regular fa-envelope"></i>info@marketch.io </p>
                                </div>

                                <div className="thanks-body-footer-img">
                                    <div className="image-wrapper">
                                        <img src={ImageOne} alt="wrapper img is here" className="img-one" />
                                    </div>
                                    <div className="image-wrapper">
                                        <img src={ImageTwo} alt="wrapper img is here" className="img-two" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* page footer */}
                <PageFooter />
            </div>
        </>
    )
}

export default GeneralThankYou;