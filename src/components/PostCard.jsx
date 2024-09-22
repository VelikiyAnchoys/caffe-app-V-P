import { Link } from "react-router-dom";

function PostCard({post}){
    return(
        <Link to={`/post/${post.id}`} class="menu-card">
            <div class="container">
                <h1>{post.id}</h1>
                <h3 class="menu-card__title">{post.title}</h3>
                <span class="menu-card__zena">{post.zena}</span>
                <span class="menu-card__category">{post.category}</span>
            </div>
        </Link>
    )
}

export default PostCard;