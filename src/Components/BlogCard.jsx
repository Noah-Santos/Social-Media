import {Link} from "react-router-dom";

const BlogCard = ({title, authorName, id}) => {
    return (
        <div className="blogCard">
            <Link to={`../blog/${id}`}>
                <h1>{title}</h1>
                <p>by {authorName}</p>
            </Link>
        </div>
    )
}
export default BlogCard;