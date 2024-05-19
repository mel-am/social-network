import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
// import { db } from "@/lib/db";
import ProfileForm from "../components/ProfileForm";
import Link from "next/link";
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import pg from "pg";

export const metadata = {
  title: "The Scarlet Speedster Society",
  description: "A site for fans of CW's The Flash",
};

export default async function RootLayout({ children }) {

  const dbConnectionString = process.env.DATABASE_URL;

  const db = new pg.Pool({
    connectionString: dbConnectionString,
  });

  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  const profiles = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = '${userId}'`
  );
  // if (profiles.rowCount === 0 && userId !== null) {
if (profiles.rowCount === 0 && userId !== null) {
    // add them to our database
    await db.query(`INSERT INTO profiles (clerk_id) VALUES ('${userId}')`);
  }
  //   await db.query(`INSERT INTO profiles (clerk_id) VALUES ($1) ('${userId}')`);

  // has username will be true if we have a username and (shockingly) false if we don't
  const hasUsername = profiles.rows[0]?.id !== null ? true : false;

  const username_data = await db.query(
    `SELECT username FROM profiles WHERE clerk_id = '${userId}'`
     

  );
  
  const username = username_data.rows[0]?.username;
   console.log(username);
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <nav>
              <Link href="/">Home</Link>
              <Link href={`/user/${username}`}>{username}</Link>
              <Link href="/about">About</Link>
              {/* <Link href="/user/:username">Manage Profile</Link> */}
              <Link href="/posts">Posts</Link>
              <Link href="/posts/new">New Posts</Link>
              <Link href="/terms">Forum Terms</Link>
            </nav>
          </header>
          <main>
            <SignedOut>{children}</SignedOut>
            <SignedIn>
              {hasUsername && children}
              {!hasUsername && <ProfileForm />}
            </SignedIn>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
