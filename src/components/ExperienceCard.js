import React from 'react';

const ExperienceCard = (props) => {
    return(
        <div className="card">
            <div className="content">
                <div className="header">
                    {props.title}
                </div>
                <div className="meta">
                    {props.date}
                </div>
                <div className="description">
                    {props.content}
                </div>
            </div>
        </div>
    );
}

ExperienceCard.defaultProps = {
    title: '',
    date: '',
    content: ''
};

export default ExperienceCard;