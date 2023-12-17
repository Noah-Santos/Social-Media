import {Link} from "react-router-dom";

const BlogCard = ({title, authorName, id, image}) => {
    return (
        <div className="blogCard">
            <div className="imageCont">
                <img src={image} alt="post" className='blogImage'/>
            </div>
            <Link to={`../blog/${id}`} className='blogContent'>
                <h1 className='blogTitle'>{title}</h1>
                <p className="blogAuthor">by {authorName}</p>
            </Link>
        </div>
    )
}
export default BlogCard;