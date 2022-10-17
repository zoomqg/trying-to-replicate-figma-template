import React from 'react';

function Bio(){
    return(
        <div className="bio">
            <div className='bio-text'>
                <h1>Hi, I am John,<br/>Creative Technologist</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim culpa maxime magni quasi in voluptatem eveniet, exercitationem quos ipsa, animi, nemo illo. Tempore ipsum sequi sapiente quod officiis ex nisi.</p>
                <a href="https://www.rvt.lv/">Download Resume</a>
            </div>
            <div className="bio-image">
                <img src="https://i.imgur.com/oUhNIph.jpeg" alt="richard.png"/>
            </div>
        </div>
    );
};

export default Bio;