import React from 'react';
import Header from './components/header';
import Bio from './components/bio';
import RecentPosts from './components/recent_posts';
import FeaturedWorks from './components/featured_works';
import Footer from './components/footer';
// https://www.figma.com/file/gKZoWoleFgP35xvYu83Y2l/Portfolio-UI---Web-%26-Mobile?node-id=6%3A52

function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <Bio/>
        <RecentPosts/>
        <FeaturedWorks/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
