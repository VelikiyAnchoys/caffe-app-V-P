
import Vse from "../assets/imageTriTochky/Categories/vsemenu.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingRow from "../components/LoadingRow";
import axios from "axios"; 
import Error from "../components/Error";


function CategoryPage(){

    const[categories, setCategories] = useState([]);
    const[isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);


    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://305a123237bfc1ba.mokky.dev/category`);
                setCategories(response.data);
            } catch(e) {
                setIsError(true);
                console.log(e);
            }finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    },[]);
    if ( isError) {
        return <Error />;
    }


    return(
        <section class="mobile-block"> 
            <div class="mobile-block__header is-secondary">
                Меню
            </div>
            {isLoading ? (<LoadingRow />) : (
                <div class="container">
                    <div class="menu-card">
                        <Link to="/" class="container">
                            <img src={Vse} alt=""/>
                            <h3 class="menu-card__title">Все меню</h3>
                        </Link>
                        {categories.map((category) => (
                            <Link to={`/category/posts/${category.id}`} class="container">
                                <img src={category.imageUrl} alt={category.name}/>
                                <h3 class="menu-card__title">{category.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
export default CategoryPage;