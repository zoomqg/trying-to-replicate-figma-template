import React from 'react';
import strftime from 'strftime';
const recent_posts = [
    {
        title: 'Making a design system from scratch',
        post_date: new Date(2020, 2, 12),
        category: 'Design, Pattern',
        post: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
        title: 'Creating pixel perfect icons in Figma',
        post_date: new Date(2020, 2, 12),
        category: 'Figma, Icon Design',
        post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi expedita architecto cumque animi ut, neque facilis consequuntur saepe officiis at maiores aut suscipit delectus, sequi laudantium molestiae aliquid nostrum mollitia?'
    },
    {
        title: 'HukuTa KyTTuJI LLITaHuLLIKu CHOBA',
        post_date: new Date(2020, 2, 12),
        category: 'Big Data',
        post: `I don't know you, I only hear your voice (Ooh)
        I close my eyes, I imagine your image (Ah)
        I increasingly feel reality in the system
        On the Internet, we are with you 4D models-and
        Pounding wild bass, I can't get off it
        I dial her - everything is not right, backspace`
    }
    
]

function RecentPosts(){
    return(
        <div className="recentposts">
           <div className="header">
                <h2>Recent Posts</h2> 
                <a href="https://i.imgur.com/K6fnf1t.png">View all</a>
           </div>

           <div className="postblocks">
            {recent_posts.map((post) => (
                <div className="block">
                    <h1>{post.title}</h1>
                    <h2> {strftime('%d %b %Y', post.post_date)}&nbsp;&nbsp;|&nbsp;&nbsp;{post.category}</h2>
                    <h3>{post.post}</h3>
                </div>
              ))}
            </div>
        </div>
    );
};

export default RecentPosts;