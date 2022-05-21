import { useEffect } from "react";
import CoreTeam from "./CoreTeam/CoreTeam";
import DomainManagers from "./DomainManagers/DomainManagers";
import Founder from "./Founders/Founder";

const Members = (props) => {
    // console.log('Membes Component');
    const onMembers = (cond) => {
        console.log('From CoreTeam about backdrop', cond);
        props.sendToTeam(cond);
    }
    
    useEffect(() => {
        console.log('I thought!');
    }, [])

    return (
        <div className="px-10">
            {/* max-h-[76%] overflow-scroll */}
            <CoreTeam sendToMember={onMembers}/>
            {/* <DomainManagers/>
            <Founder/> */}
        </div>
    );
};

export default Members;
