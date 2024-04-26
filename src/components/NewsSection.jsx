const Card = () => {
    return(
        <div className="card-single">
            <div className="image-container">
                <img src="/images/bicycling.jpg" />
            </div>
            <div className="card-description">
                <p><span className="card-date">24 April, 2024</span> <span className="card-category">Category</span></p>
                <h2 className="card-title">Title: This is the title of the article. It can be a little long.</h2>
                <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque quo perferendis cumque! Ab, velit corporis alias reprehenderit </p>
                <div className="card-line" />
                <button className="card-button"><span className="links">Read More</span></button>
            </div>
        </div>
    )
}

const NewsSection = () => {
  return (
    <>
        <div className="news-container">
            <div className="card-single card-main">
                <div className="image-container">
                    <img src="/images/bicycling.jpg" />
                </div>
                <div className="card-description">
                    <p><span className="card-date">24 April, 2024</span> <span className="card-category">Category</span></p>
                    <h2 className="card-title">Title: This is the title of the article. It can be a little long.</h2>
                    <p className="card-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloremque quo perferendis cumque! Ab, velit corporis alias reprehenderit </p>
                    <div className="card-line" />
                    <button className="card-button"><span className="links">Read More</span></button>
                </div>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </>
  )
}

export default NewsSection