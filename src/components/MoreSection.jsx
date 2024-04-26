const MiniCard = () => {
    return(
        <>
            <div className="more-card">
                <div className="more-image-container">
                    <img src="/images/bicycling.jpg" height="100px" width="150px" />
                </div>
                <div className="more-description">
                    <p><span className="card-category">Category</span></p>
                    <h2 className="card-title">Title: This is the title.</h2>
                </div>  
            </div>
        </>
    )
}

const AuthorSection = () => {
    return(
        <>
            <div className="author-block">
                <img className="author-image" src="/images/author.jpg" />
                <h2 className="author-name">Author Surname</h2>
                <p className="author-title">Blog Author</p>
                <p className="author-description">In the vast expanse of the digital realm, amidst the cacophony of voices and the whirlwind of ideas, there exists a storyteller.</p>
                <div className="author-socials">
                    A B C D E F G
                </div>
            </div>
        </>
    )
}


const MoreSection = () => {
  return (
    <>
        <div className="side-container">
            <AuthorSection />
            <div className="more-news">
                <p className="more-post-title">Popular Post</p>
                <MiniCard />
                <MiniCard />
                <MiniCard />
                <MiniCard />
            </div>
            <div className="more-tags">
                <p className="more-tags-title">Tags</p>
                <div className="tags">
                    <p className="card-category">Adventure</p>
                    <p className="card-category">Beauty</p>
                    <p className="card-category">Fashion</p>
                    <p className="card-category">Health</p>
                    <p className="card-category">Lifestyle</p>
                    <p className="card-category">Personal Blog</p>
                    <p className="card-category">Tips & Tricks</p>
                    <p className="card-category">Travels</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MoreSection