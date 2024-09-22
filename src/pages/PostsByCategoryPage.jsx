import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingPost from "../components/LoadingPost";
import axios from "axios";
import PostCard from "../components/PostCard";


function PostByCategoryPage(){

    const{id}=useParams();
    const[category, setCategory] = useState({});
    const [posts, setPosts] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        async function fetchCategory() {
            try{
                const response = await axios.get(`https://305a123237bfc1ba.mokky.dev/category/${id}`);
                setCategory(response.data)
            } catch(e) {
                console.log(e);
            }
            
        }
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response =await axios.get('https://305a123237bfc1ba.mokky.dev/post');
                setPosts(response.data);
            } catch(error){
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory()
    },[id]);


    return(
        <section class="mobile-block"> 
            <div class="mobile-block__header is-secondary">
                {category.name}
            </div>
            <div class="all-menu-block">
                {isLoading ? (<LoadingPost />) : (
                    <>
                    {posts.map((post) => {
                        return post.category === category.name ? (
                            <PostCard key ={post.id} post={post} />
                        ) : null
                    })}
                    </>
                )}
            </div>
        </section>
        
    );
}
export default PostByCategoryPage;