import tweets from "../utiles/tweet";

function FollowingLabel(){
    return (
        <>
            <h4>Who to follow</h4>
            <div>
                {tweets.slice(0,3).map((tweet) => (
                    <div className="follow-contenair">
                        <div>
                            <img className="follow-avatar" src={tweet.tweetAvatar} alt="" />
                        </div>
                        <div className="follow-label">
                            <h5>{tweet.autor}</h5>
                            <div className="follow-detail">
                                <img className="certified-icone" src={tweet.isCertified} alt="" />
                                <p>{tweet.autorDetails}</p>
                            </div>
                        </div>

                    </div>
                ))
                }
            </div>
        </>
    )
}
export default FollowingLabel