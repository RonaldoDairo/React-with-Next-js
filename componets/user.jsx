"use client";

import { useRouter } from "next/navigation";

function User({users}) {

    const router = useRouter();
  return (
    <ul>
    {users.map((user)=>{
      return(
        <li key={user.id}
        onClick={()=>{
            router.push(`/users/${user.id}`)
        }}
        >
          <div>
            <h5>{user.id} {user.first_name} {user.last_name}</h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} alt={user.email} />
        </li>
      )
    })
     }      
    </ul>
  )
}

export default User
