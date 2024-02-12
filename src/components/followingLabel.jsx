import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { Consumer } from "./Consumer";

function FollowingLabel() {
  const  {dataUsers}= useContext(Consumer);
  
  return (
    <div className="follow">
      <h4 className="follow-title">Who to follow</h4>
      <div>
        {dataUsers?.slice(0, 3).map((tweet, index) => (
          <div key={index} className="follow-content">
            <Link to={`/profil/${tweet.autorDetails}`}>
            <div>
              <img className="follow-avatar" src={tweet.tweetAvatar} alt="" />
            </div>
            </Link>
            <div className="label-contenair">
              <div className="detail-contenair">
                <Link to={`/profil/${tweet.autorDetails}`} >
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
                </Link>
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
