import Loading from "../Loading/Loading";
import ArticleTile from "../../components/ArticleTile/ArticleTile";
import "../../styles/global.scss";
import "./Favourite.scss"
import Navbar from "../../components/Navbar/Navbar";
import {ReactComponent as SadIcon } from "../../assets/icons/sad-face.svg"
import useLikedArticles from "../../utilieties/useArticleFavourite";

export default function Favourite() {
    const{favourites}=useLikedArticles();

    if (!favourites) {
        return <Loading/>
    }
    const haveFavourites = favourites.length > 0;

    return (
        <>
            <Navbar/>
            <div className="container">
                {!haveFavourites ? (
                    <div>
                        <h2>You don't have any favourite article
                        <SadIcon className="favourite__sad-icon"/></h2>
                        <p>Go to home page and click on the heart button to add it to your favourites.</p>
                    </div>
                ) : (
                    <>
                        <h2>Your favourite articles!</h2>
                        <div>
                            {favourites.map((article) =>
                                <ArticleTile key={article.id} title={article.title} summary={article.summary}
                                             articleId={article.id} article={article}/>
                            )}
                        </div>
                    </>)
                }

            </div>
        </>
    )

}