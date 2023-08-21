function User (props) {
    return(
        <>
            <span className="name">{props.userObj.name}</span>
            <span className="handle">@{props.userObj.handle}</span>
        </>
    )
}

export default User;