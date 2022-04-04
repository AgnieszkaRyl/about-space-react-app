import {useEffect, useState} from "react";
import ArticleTile from "../../components/ArticleTile/ArticleTile";
import Loading from "../Loading/Loading";
import "../../styles/global.scss"
import "./Home.scss"
import Navbar from "../../components/Navbar/Navbar";
import {ReactComponent as RefreshIcon} from "../../assets/icons/refresh.svg"
import {ARTICLES_PATH} from "../../utilieties/constants";

export default function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch(ARTICLES_PATH)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data)
            })
    }

    if (!articles) {
        return <Loading/>
    }

    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="home__refresh-container">
                    <h1>Find out more about space!</h1>
                    <button className="button-icon" type="button" onClick={fetchData}>
                        <RefreshIcon/>
                    </button>
                </div>
                {articles ? (
                    <>
                        {articles.map((article) =>
                            <ArticleTile key={article.id} title={article.title} summary={article.summary}
                                         articleId={article.id} article={article}/>
                        )}
                    </>
                ) : (
                    <Loading/>
                )}

            </div>
        </div>
    )
}