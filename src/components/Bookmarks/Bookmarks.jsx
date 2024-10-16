
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

        

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-4 pt-4">
        <div className='text-4xl'>Reading Time: {readingTime}</div>
            <h2 className="text-3xl text-center ">Bookmarked blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    )
}

Bookmarks.propTypes = {
   bookmarks : PropTypes.array,
   readingTime: PropTypes.number,
};
export default Bookmarks;
   

