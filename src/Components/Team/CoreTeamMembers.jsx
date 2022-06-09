import OffClickProfile from "./OffClickProfile";

const CoreTeamMembers = (props) => {
    var coreMember = props.coreMember;
    console.log("CoreTeamMembers Comp");
    return <OffClickProfile coreMember={coreMember} />;
};

export default CoreTeamMembers;
