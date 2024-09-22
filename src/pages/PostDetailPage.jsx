import BackIcon from "../assets/imageTriTochky/backIcon.svg"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import loadingDetail from "../components/LoadingDetail";
import Error from "../components/Error";

function PostDetailPage() {

    const {id} = useParams();
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);


    useEffect(() => {
        async function fetchPosts() {
            try{
                setIsLoading(true);
                const response = await axios.get(`https://305a123237bfc1ba.mokky.dev/post/${id}`);
                setPost(response.data);
            } catch(error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, [id]);
    if ( isError) {
        return <Error />;
    }

    return (
        <section class="mobile-block"> 
            <Link to="/" class="back-button">
                <div class="container">
                    <img src={BackIcon} alt=""/>
                    Назад
                </div>
            </Link>
            {isLoading ? (<loadingDetail />) : (
                <div class="container">
                    <div class="menu-detail-block">
                        <h3 class="menu-card__title">{post.title}</h3>
                        <img src={post.imageUrl} alt={post.title} />
                        <span class="menu-card__sena">{post.zena}</span>
                        <p class="description">
                            {post.description}     
                        </p>
                        <button class="tag-button">{post.category}</button>
                    </div>
                </div>
            )}

                
        </section>
    );
}
export default PostDetailPage;