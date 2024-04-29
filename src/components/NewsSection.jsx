import { useState, useEffect } from "react"

const Card = (props) => {
    return(
        <div className={`card-single ${props.isMain && "card-main"}`}>
            <div className="image-container">
                <img src={props.imageSrc} />
            </div>
            <div className="card-description">
                <p><span className="card-date">{props.date}</span> <span className="card-category">{props.category}</span></p>
                <h2 className="card-title">{props.title}</h2>
                <p className="card-content">{props.content}</p>
                <div className="card-line" />
                <button className="card-button"><span className="links">Read More</span></button>
            </div>
        </div>
    )
}


const NewsSection = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/infinitee404/json-blog/news');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const cards = news.map(item => {
    return <Card 
        isMain = { (item.id == 1) ? true : false}
        imageSrc = {item.imageSrc}
        date = {item.date}
        category = {item.category}
        title = {item.title}
        content = {item.content}
    />
    })

  return (
    <>
        <div className="news-container">
            {cards}
        </div>
    </>
  )
}

export default NewsSection
