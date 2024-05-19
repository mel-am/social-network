// import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import pg from "pg";


export default function ProfileForm() {

  const dbConnectionString = process.env.DATABASE_URL;

  const db = new pg.Pool({
    connectionString: dbConnectionString,
  });

  const { userId } = auth();
  async function handleUpdateProfile(formData) {
    // "use server";
    const username = formData.get("username");

   await db.query(
    `UPDATE profiles SET username = '${username}' WHERE clerk_id = '${userId}'`
   )
  };
  revalidatePath("/");

  return (
    <div>
      <h2>Update Profile</h2>
      <p>Welcome to the Scarlet Speedster Society, please choose your username!</p>
      <form action={handleUpdateProfile}>
        <input name="username" placeholder="Username" />
        <button>Submit</button>
      </form>
    </div>
  );

}