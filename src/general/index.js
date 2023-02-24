import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const GeneralHome = () => {
    const navigate = useNavigate();
    return (

        <>
            <h1 className="home-header">General Home</h1>
            <button onClick={() => { navigate("/") }} className="btn btn-md btn-primary"> Start Now </button>

        </>
    )
}

export default GeneralHome;