import React from 'react';
import ExperienceCard from './ExperienceCard';

const testExample = [
    {
        title: 'Title 1',
        date: '01/01/2021',
        content: 'This is a string of characters'
    },
    {
        title: 'Another title',
        date: '27/09/2021',
        content: 'Another card here. Date probably doesnt need to be a string.'
    },
    {
        title: 'A sign of an idea',
        date: '27/09/2021',
        content: 'Something to work with. Just small steps.'
    }
]

export default () => {
    const experienceCards = testExample.map((card) => {
        return (
            <ExperienceCard title={card.title} date={card.date} content={card.content}/>
        )
    });

    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <div className="ui cards">
                {experienceCards}
            </div>
        </div>
    );
}