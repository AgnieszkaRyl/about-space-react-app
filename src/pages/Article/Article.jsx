import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "../Loading/Loading";
import "../../styles/global.scss";
import "./Arcticle.scss"
import "./../../components/ArticleTile/ArticleTile.scss"
import Navbar from "../../components/Navbar/Navbar";
import {ReactComponent as FavouriteIcon} from "./../../assets/icons/fav.svg"
import {ARTICLES_PATH, LOCALSTORAGE_KEY} from "../../utilieties/constants";
import classNames from "classnames";
import useLikedArticles from "../../utilieties/useArticleFavourite";

export default function Article() {
    const {id} = useParams();
    const [article, setArticle] = useState(null);
    const {isFavourite, setIsFavourite, changeArticleFavouriteState} = useLikedArticles();

    const path = ARTICLES_PATH + id;
    const localST=JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    useEffect(() => {
        fetch(path)
            .then((response) => response.json())
            .then((data) => {
                setArticle(data);
                setIsFavourite(localST.filter(object=>object.id===data.id).length>0);
            });
    }, [])

    if (!article) {
        return <Loading/>
    }

    return (
        <>
            <Navbar/>
            <div className="container article">
                <img src={article.imageUrl} alt="article image" className="article__image"/>
                <div className="article__row">
                    <p className="article__title">{article.title}</p>
                    <button className="article-tile__button" onClick={()=>changeArticleFavouriteState(article.id, article)}>
                        <FavouriteIcon className={classNames("article-tile__icon", {'article-tile__icon--filled':isFavourite})}/>
                    </button>
                </div>
                <p>{article.summary}</p>
                <p>Article source site: {article.newsSite}</p>
                <p>Article update date: {article.publishedAt.slice(0,10)}</p>
                <a href={article.url} className="link">Go to the origin article</a>
            </div>
        </>
    )
}