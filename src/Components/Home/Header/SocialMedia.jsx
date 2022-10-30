import React from 'react'
import facebook from './socialMediaSVG/facebook-svgrepo-com.svg';
import instagram from './socialMediaSVG/instagram-svgrepo-com.svg';
import linkedin from './socialMediaSVG/linkedin-svgrepo-com.svg';

const SocialMedia = () => {
    return (
        <div className='py-7 px-5 flex flex-col items-center'
            style={{ backgroundColor: "#f5ebe0" }}
        >
            <div className='text-center font-semibold text-lg md:text-xl mb-9'>
                Keep up with our informative content on
            </div>
            <div className='text-center flex gap-x-10'>
                <a href='https://www.facebook.com/RccTechzOfficial/'
                    rel='noreferrer' target='_blank'><img src={facebook} className='w-11 hover:shadow-xl hover:-translate-y-1 duration-300' alt="facebook" /></a>
                <a href='https://www.instagram.com/rcctechz_official/'
                    rel='noreferrer' target='_blank'><img src={instagram} className='w-11 hover:shadow-xl hover:-translate-y-1 duration-300' alt="instagram" /></a>
                <a href='https://www.linkedin.com/company/rcctechz/posts/?feedView=all&viewAsMember=true'
                    rel='noreferrer' target='_blank'><img src={linkedin} className='w-11 hover:shadow-xl hover:-translate-y-1 duration-300' alt="linkedin" /></a>
            </div >
        </div >
    )
}

export default SocialMedia