import User from "@/componets/user";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data
}


async function IndexPage() {
 const users = await fetchUsers();
 
 return (
    
    <User users={users}/>
    
  )
}

export default IndexPage
