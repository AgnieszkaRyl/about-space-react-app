import './ArticleTile.scss'
import {Link} from "react-router-dom";
import {LOCALSTORAGE_KEY} from "../../utilieties/constants";
import {useEffect} from "react";
import {ReactComponent as FavIcon} from "./../../assets/icons/fav.svg";
import {ReactComponent as GoIcon} from "./../../assets/icons/arrow-right.svg";
import classNames from 'classnames';
import useLikedArticles from '../../utilieties/useArticleFavourite';


export default function ArticleTile({title, summary, articleId, article}) {
    const currentLS=JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    const {isFavourite, setIsFavourite, changeArticleFavouriteState} = useLikedArticles();

    useEffect(()=>{
        setIsFavourite(currentLS.filter(article=>article.id===articleId).length>0)
    },[]);

    return (
        <div className="article-tile">
            <div className="article-tile__title-section">
                <p className="article-tile__title">{title}</p>
                <button onClick={()=>changeArticleFavouriteState(articleId, article)} className="article-tile__button">
                    <FavIcon className={classNames("article-tile__icon", {'article-tile__icon--filled':isFavourite})}/>
                </button>
            </div>
            <p>{summary}</p>
            <Link to={'/articles/' + articleId} className="link">find out more!<GoIcon className="link-icon"/></Link>
        </div>
    )
}