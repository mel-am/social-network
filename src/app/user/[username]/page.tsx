import { notFound } from "next/navigation";
import pg from "pg";
import { db } from "../../../lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";

import { revalidatePath } from "next/cache";
// import Navbar from "../../../components/Navbar";


// export default async function Profile() {
//   const { userId } = auth();
//   async function handleUpdateProfile(formData) {
//     "use server";
//     const username = formData.get("username");

//     await db.query(
//       `FROM profiles SELECT username = '${username}' WHERE clerk_id = '${userId}'`
//     );
//     revalidatePath("/");
  
  export default async function Profile() {
    // Get the userId from auth() -- if null, the user is not signed in
    const { userId } = auth();

    if (userId) {
      // Query DB for user specific information or display assets only to signed in users
      console.log("The userId is set");
    }

    // Get the Backend API User object when you need access to the user's information
    const user = await currentUser();
    console.log("user", user);

    // revalidatePath("/");

    return (
      <>
        <h1> Welcome {user?.firstName} </h1>
        {/* <Navbar /> */}
        <h2>Mange your account</h2>
        <p>You are signed in with {user?.emailAddresses[0].emailAddress}</p>
        <form>
          <h3>Update Information</h3>

          <div>
            <label> Username</label>
            <input type="text" id="user-username"></input>
          </div>
          <div>
            <label>Email address</label>
            <input type="text" id="user-email"></input>
          </div>
          <input type="submit" value="Update Information"></input>
        </form>
      </>
    );
  }





    {/* <Mynavbar /></> */}

  {/* // const response = await fetch(
  //    await db.query(`
  //   SELECT username FROM profiles WHERE id = ${params.id}
  // `)
  // );
  // const post = await response.json();

  // if (!Profile.username) { */}
  /* //   notFound();
  // }

  // return (
  //   <div>
  //     <h2>{Profile.username}</h2>
  //     <p>{Profile.bio}</p>
  //   </div>
  // );
} */
