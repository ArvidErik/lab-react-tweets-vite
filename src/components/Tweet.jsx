import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const {user, timestamp, message} = props.tweet
  return (
    <div className="tweet">
    
      <ProfileImage userObj={user}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User userObj={user}/>
          </span>

          <Timestamp time={timestamp}/>

        </div>

        <Message obj={message}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
