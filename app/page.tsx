import prisma from "@/lib/db";

export default async function Home() {
  const user = await prisma.user.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-gray-500">Document your stuff</p>
      {user.map((u) => {
        return (
          <ul>
            <li>{u.username}</li>
            <li>{u.email}</li>
            <li>{u.id}</li>
          </ul>
        );
      })}
    </main>
  );
}
