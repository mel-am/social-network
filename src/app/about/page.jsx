import Link from "next/link";


export default function About() {
  return (
    // <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
    //       <Flex direction="column" gap="2">
              
        <div id="about">
          <h1>Welcome to the Scarlett Speedster Society</h1>
          <p>
            This is the ultimate fan destination for CW&apos;s The Flash!
            Whether you&apos;re a speedster enthusiast or just can&apos;t get enough
            of the adventures of the Flash and his team then, you have come to
            the right place. Please share your thoughts, leave posts, and
            connect with fellow fans from around the world
          </p>

          <Link href="/posts/new">
            <button type="submit">Add a Post</button>
          </Link>
        </div>
    //   </Flex>
    // </Theme>
  );
}
