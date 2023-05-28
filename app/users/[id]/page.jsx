async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

 
const UserPage = async( {params} ) => {
   
    const user = await getUser(params.id)
    console.log(user,"data")
    
    return (
        <div>
            <img src={user.avatar} alt={user.email} ></img>

            <div>
                <h3>{user.id} {user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
           </div>

        </div>
    );
}

export default UserPage;
