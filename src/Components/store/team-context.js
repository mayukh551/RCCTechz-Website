import React from 'react';

const TeamContext = React.createContext({
    isBackdrop: false,
    isViewProfile: false,
    viewProfileHandler: () => { },
    showBackdropHandler: () => { }
})

export default TeamContext;