import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="h-svh flex justify-center items-center">
      <SignIn />
    </main>
  );
}
