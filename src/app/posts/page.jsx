
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import pg from "pg";


export default async function Posts() {
    const dbConnectionString = process.env.DATABASE_URL;

    const db = new pg.Pool({
      connectionString: dbConnectionString,
    });

    const { userId } = auth();

    // get my new posts
    const posts = await db.query(`SELECT
                posts.id,
                posts.content,
                profiles.username
            FROM posts
            INNER JOIN profiles ON posts.profile_id = profiles.id;`);

    // server action to add a new post
    async function handleAddPost(formData) {
        "use server";
        // get informationxxxx from the form
        const content = formData.get("content");

        // get the profile id from the database
        // const result = await db.query(
        //     `SELECT id FROM profiles WHERE clerk_id = '${userId}'`
        // );
        // const profileId = result.rows[0].id;

        // add the new post to the database
        await db.query(
            `INSERT INTO posts (profile_id, content) VALUES (${profileId}, '${content}')`
        );
    }

    return (
        <div>
            <h2>Scarlet Speedster Posts</h2>
            <SignedIn>
                <h3>Create  a new post</h3>
                <form action={handleAddPost}>
                    <textarea name="content" placeholder="Write a new post"></textarea>
                    <button>Submit</button>
                </form>
            </SignedIn>

            <SignedOut>
                <p>You need to sign in to add a post</p>
                <SignInButton />
            </SignedOut>

            <h3>All posts</h3>
            <div className="posts">
                {posts.rows.map((post) => {
                    return (
                        <div key={post.id}>
                            <h4>{post.username} says...</h4>
                            <p>{post.content}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}