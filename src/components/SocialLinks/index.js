import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/arb1ona'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/arbionashahu/'}
                type={'linkedin'}
            />
            <SocialLinks.Link
                url={'https://t.me/arbiona'}
                type={'telegram'}
            />
            <SocialLinks.Link
                url={'https://join.skype.com/invite/kW7FTmJXXgsd'}
                type={'skype'}
            />
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
