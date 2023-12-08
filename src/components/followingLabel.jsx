import tweets from "../utiles/tweet";

function FollowingLabel(){
    return (
        <div className="follow">
            <h4 className="follow-title">Who to follow</h4>
            <div>
                {tweets.slice(0,3).map((tweet) => (
                    <div className="follow-content">
                        <div>
                            <img className="follow-avatar" src={tweet.tweetAvatar} alt="" />
                        </div>
                        <div className="follow-label">
                            <h5>{tweet.author}</h5>
                                <img className="certified-icone" src={tweet.isCertified} alt="" />
                                <span className="follow-detail">{tweet.autorDetails}</span>
                        </div>
                        
                    </div>
                ))
                }
            </div>
        </div>
    )
}
export default FollowingLabel