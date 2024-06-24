import type { Login } from "../@types/login";

export default async function getUser(user: Login){
  const response = await fetch('http://111.91.189.110:3333/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( user ),
  });
  
  if (response.ok) {
    const userData = await response.json();1
    console.log(userData.message)
  } else {
    const errorData = await response.json();
    console.log(errorData.message)
  }
}
