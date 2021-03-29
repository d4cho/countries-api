import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="LandingPage-container">
            <div className="LandingPage-filters">
                <input placeholder="Search for a country..." />
                <select name="regions" id="regions">
                    <option hidden>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div>cards</div>
        </div>
    );
};

export default LandingPage;
