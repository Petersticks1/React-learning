import { useEffect, useState } from "react";

function Home() {
    //create a list of news items..
    // const newsList = newsItems.map((item) => {
    //     return (
    //         <div className="news-item" key={item.id}>
    //             <h2>{item.title}</h2>
    //             <p>{item.description}</p>
    //             <a href="{item.url}">{item.url}</a>
    //         </div>
    //     );
    // });

    //Handle next button click...
    const handleNext = (event) => {
        event.preventDefault();
        //update the state with the next item in the list
        //setCurrentItem((prev) => prev + 1);

        const length = listItems.length;
        const count = length - 1;

        if (currentPosition < count) {
            setCurrentPosition(currentPosition + 1);
        } else setCurrentPosition(0);
    };

    const handlePrevious = (event) => {
        event.preventDefault();
        //update the state with the next item in the list
        //setCurrentItem((prev) => prev - 1);
        if (currentPosition > 0) {
            setCurrentPosition((prev) => prev - 1);
        } else setCurrentPosition(0);
    };

    //set up our state
    const [currentPosition, setCurrentPosition] = useState(0);
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);
    const [listItems, setListItems] = useState([]);

    //set our initial state...
    useEffect(() => {
        //List news items...

        const newsItems = [
            {
                title: "BBC News",
                url: "https://www.bbc.com/news",
                description: "Latest news from BBC",
            },
            {
                title: "CNN News",
                url: "https://www.cnn.com/",
                description: "Latest news from CNN",
            },
            {
                title: "Google News",
                url: "https://www.goggle.com/",
                description: "Latest news from Google",
            },
            {
                title: "Tech News",
                url: "https://www.tech.com/",
                description: "Latest news from Tech",
            },

            {
                title: "Musk News",
                url: "https://www.musk.com/",
                description: "Latest news from Musk",
            }
        ];

        const item = newsItems[currentPosition];

        setListItems(newsItems);

        //set our state
        setNews(item);
        setLoading(false);
    }, [currentPosition]);

    return (
        <div className="home">
            <h2>Welcome</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque aliquid fugit?
                Vitae vero at, ullam voluptate, ab quasi, fuga dicta minima quam laboriosam cum. Cum
                a magni quibusdam cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Eum vel quisquam optio maiores similique omnis consequatur repellat sit
                possimus, obcaecati rerum ut nulla ipsa ducimus maxime, sunt aspernatur ratione.
                Corrupti? Est iste impedit totam rerum reiciendis ea eos itaque ducimus tenetur
                beatae accusantium soluta, sed cumque aliquid suscipit adipisci, quisquam ratione et
                voluptatum alias? Fuga quae rat amet quod quae earum. Nemo quos ullam fugit aperiam
                mollitia libero ex amet distinctio pariatur alias consequuntur facilis deserunt
                debitis dolor provident fuga, enim vitae ab sed maxime a in voluptate explicabo!
                Porro, hic!
            </p>

            {/* LEARNING FROM ALTSCH */}

            <div className="main-container">
                <div className="news">
                    {loading ? (
                        <div>loading</div>
                    ) : (
                        <div className="news-item">
                            <h2>{news.title}</h2>
                            <p>{news.description}</p>
                            <a href="{news.url}">{news.url}</a>
                        </div>
                    )}
                </div>

                <div className="paginate">
                    <button className="prev" onClick={handlePrevious}>
                        Prev
                    </button>
                    <button className="next" onClick={handleNext}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
