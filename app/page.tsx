import { SignedIn, UserButton, SignedOut, SignInButton } from "@clerk/nextjs";
import { getUsers } from "./_lib/actions";

export default async function Home() {
  const users = await getUsers();

  return (
    <>
      <header>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
      <main>
        {users.map((user) => (
          <div key={user.id}>{user.username}</div>
        ))}
      </main>
    </>
  );
}
