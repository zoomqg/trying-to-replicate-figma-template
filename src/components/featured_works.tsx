import React from 'react';
const featured_works = [
    {
        title: 'Designing Dashboards',
        img_url: 'https://media.tenor.com/UEYxx6a-VtgAAAAd/brick-eating.gif',
        year: 2020,
        category: 'Dashboard',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ducimus eum numquam blanditiis perspiciatis ex laborum ipsa, incidunt quisquam impedit corporis fugit quidem nulla voluptatum quaerat dolorum est quae laudantium?'
    },
    {
        title: 'Vibrant Portraits of 2020',
        img_url: 'https://media.tenor.com/ZveJW1U-HrEAAAAC/touhou-aya-shameimaru.gif',
        year: 2018,
        category: 'Illustration',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        title: 'Vibrant Portraits of 2020',
        img_url: 'https://media.tenor.com/ofcbWYdgkekAAAAd/food-eating.gif',
        year: 2020,
        category: 'Typography',
        description: `Passengers are standing at the airport, boarding screening pass. It was the turn of the man with the suitcase.
        — Please prepare your suitcase for inspection.
        - I can not.
        - Why?
        - I have beeps there!`
    }
]
function FeaturedWorks() {
    return(
        <div className="featuredworks">
            <h2>Featured works</h2>
            {featured_works.map((work) =>(
                <div className="postblock"> 
                    <div className="imgblock">
                        <img src={work.img_url} alt={work.title.replace(/ /g, "_").toLowerCase()} />
                    </div>
                    <div className="textblock">
                        <h1>{work.title}</h1>
                        <div className="datecategory">
                            <div className='date'>
                                <p>{work.year}</p>
                            </div>
                            <p className='category'>{work.category}</p>
                        </div>
                        <div className="description">
                            <p>{work.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedWorks;