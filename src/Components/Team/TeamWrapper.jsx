import OffClickProfile from "./OffClickProfile";

const TeamWrapper = ({ imgList, heading, teamMemberDetails, displayModal }) => {
    return (
        <>
            <div className="sm:px-10 mb-20">
                {!imgList.isLoading && (
                    <>
                        <h1 className="mb-9 text-3xl sm:text-5xl text-center underline underline-offset-8 decoration-emerald-400">
                            {heading}
                        </h1>

                        <div className="py-10 flex flex-wrap justify-center gap-x-11 gap-y-16 place-items-center">
                            {teamMemberDetails.map((member, index) => {
                                return (
                                    <OffClickProfile
                                        key={index}
                                        coreMember={member}
                                        displayModal={displayModal}
                                        imgList={imgList.list}
                                        index={index}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}
                {imgList.isLoading && (
                    <h1 className="text-xl text-white text-center">
                        Loading Content . . .
                    </h1>
                )}
            </div>
        </>
    )
}

export default TeamWrapper