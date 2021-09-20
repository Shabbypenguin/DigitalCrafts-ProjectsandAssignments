function UsersList(props) {

    const userItems = props.users.map((user, index) => {
        return <li key = {index}>{user.id} - {user.first_name} {user.last_name} - {user.email}</li>
    })

    return (
        <ul>{userItems}</ul>
    )
}

export default UsersList 