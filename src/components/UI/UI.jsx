/* eslint-disable react-refresh/only-export-components */
import "./UI.css"
import Username from "../Data/Username";
import Email from "../Data/Email";
import Fullname from "../Data/Fullname";
import DOB from "../Data/DOB";
import Contact from "../Data/Contact";
import Address from "../Data/Address";
import Avater from "../Data/Avatar";

const UI = ({element}) => {

    return (
        <div className="card">
            <div className="container">
                <div className="row">
                    <div className="wrapper">
                        {/* top-row */}
                        <div className="row align-center">
                            {/* avatar */}
                            <div className="avatar-wrapper d-flex justify-center align-center">
                                <div className="avatar d-flex">
                                    <Avater element={element}/>
                                </div>
                            </div>

                            <div className="top-right d-flex">
                                <h3>Username: <Username element={element}/></h3>
                                <h3>Email: <Email element={element}/></h3>
                            </div>
                        </div>
                        {/* bottom-row */}
                        <div className="row align-center">
                            <div className="bottom">
                                <h3>Fullname: <Fullname element={element}/></h3>
                                <h3>DOB: <DOB element={element}/></h3>
                                <h3>Contact: <Contact element={element}/></h3>
                                <h3>Address: <Address element={element}/></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UI;