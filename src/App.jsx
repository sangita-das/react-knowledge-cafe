
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {

  const [bookmarks, setBookmarks] = useState ([]);
  const [readingTime, setReadingTime] = useState (0);

  const handleAddToBookmark = blog => {
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time => {
    // console.log('marking reading time' time);
    setReadingTime (readingTime + time)
  }


  return (
    <div>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark ={handleAddToBookmark}></Blogs>
  
        <Bookmarks 
        handleMarkAsRead={handleMarkAsRead} 
        bookmarks={bookmarks} 
        readingTime={readingTime} ></Bookmarks>
      </div>
      
    
    
    </div>
  )
}

export default App;
