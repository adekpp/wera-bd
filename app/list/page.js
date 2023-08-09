export const dynamic = 'force-dynamic'
export const revalidate = 0;
async function getData() {
  try {
    const res = await prisma.name.findMany();
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
  }
}
import UsersList from "../components/UsersList";
import prisma from "../../lib/prisma";

export default async function List() {
  const data = await getData();
  return (
    <div className="font-sans mt-6 text-gray-900 pb-40 w-full">
      <h1 className="text-xl mb-4">Lista gości: 🥳 🥳 🥳</h1>
      <ul className="grid grid-cols-1 w-full gap-x-1 gap-y-1">
        {data.map((user, index) => (
          <UsersList index={index} user={user} />
        ))}
      </ul>
    </div>
  );
}
