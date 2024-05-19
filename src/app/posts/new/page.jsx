import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddPost() {
    async function handleAddPost(formData) {
        "use server";
    
        const quote = formData.get("username");
        const title = formData.get("post");

        await sql`INSERT INTO posts (username, post) values (${username}, ${post}) `;

        revalidatePath(`/posts/all`);

        redirect(`/posts/all`);
    }
     return (
    <div className="add-post-container">
      <form action={handleAddPost}>
                 <h2>Add Post</h2>
             </form>
                 </div>
                 );
}