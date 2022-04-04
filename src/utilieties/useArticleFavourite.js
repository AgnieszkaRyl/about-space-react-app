import {useState} from "react";
import {LOCALSTORAGE_KEY} from "./constants";

const useLikedArticles = ()=>{
    const [isFavourite, setIsFavourite] = useState(false);
    const [favourites] = useState(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));


    const changeArticleFavouriteState = (articleId, article) => {
        let newFavourites = [];
        const previousFavourites = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        if (previousFavourites === [] || previousFavourites === null || previousFavourites === '') {
            newFavourites.push(article)
            setIsFavourite(true);
        } else {
            newFavourites = previousFavourites;
            if (previousFavourites.filter(article => article.id === articleId).length <= 0) {
                newFavourites.push(article);
                setIsFavourite(true);
            } else {
                const index = newFavourites.map(art => art.id).indexOf(articleId);
                if (index > -1) {
                    newFavourites.splice(index, 1);
                    setIsFavourite(false)
                }
            }
        }
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newFavourites));
    };

    return {
        isFavourite,
        setIsFavourite,
        favourites,
        changeArticleFavouriteState
    };
};

export default useLikedArticles;