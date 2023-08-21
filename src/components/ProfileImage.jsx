function ProfileImage (props) {
    return(
        <img src={props.userObj.image} className="profile" alt="profile"/>
    )
}

export default ProfileImage;