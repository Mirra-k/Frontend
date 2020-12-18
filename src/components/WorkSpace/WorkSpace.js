import React, {useState} from "react";
import {EngagementButton} from "./EngagementButton";
import './WorkSpace.css';


export const WorkSpace = (props) => {

    const [mounted, setMounted] = useState(true);

    return (
        mounted &&
        <div className={"engagement-item"}>
            <div className={"flip-card"}>
                <div className={flipCardAcceptClass}>
                    <h2>accept</h2>
                </div>
                <div className={flipCardRejectClass}>
                    <h2>reject</h2>
                </div>
            </div>
            <div className={contentClass}>
                <h3>Invite from<br/>{props.recruiterLogin}</h3>
                <p>Company:<br/>{props.companyName}</p>
                <div className="btns">
                    <EngagementButton
                        type={"reject-btn"}
                        onClick={handleUnmountWithRecejtion}>
                        Reject
                    </EngagementButton>
                    <EngagementButton
                        type={"accept-btn"}
                        onClick={handleUnmountWithAcceptance}>
                        Accept
                    </EngagementButton>
                </div>
            </div>
        </div>
    );
};