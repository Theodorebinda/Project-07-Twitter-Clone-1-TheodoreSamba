import tweets from "../utiles/tweet";
import Button from "./Button";

function FollowingLabel() {
  return (
    <div className="follow">
      <h4 className="follow-title">Who to follow</h4>
      <div>
        {tweets.slice(0, 3).map((tweet) => (
          <div className="follow-content">
            <div>
              <img className="follow-avatar" src={tweet.tweetAvatar} alt="" />
            </div>
            <div className="label-contenair">
              <div className="detail-contenair">
                <div className="follow-label">
                  <p className="follow-title-author">
                    {tweet.author}
                    <img
                      className="certified-icone"
                      src={tweet.isCertified}
                      alt=""
                    />
                  </p>
                  <span className="follow-detail">{tweet.autorDetails}</span>
                </div>
              </div>
              <div>
                <Button className="follow-button" label="Follow" />
              </div>
            </div>
          </div>
        ))}
       
      </div >
      <div className="link-more">
        <a href="#">Show More</a>
      </div>
    </div>
  );
}
export default FollowingLabel;
