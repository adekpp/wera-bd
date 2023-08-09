import UsersList from "../components/UsersList";

async function getData() {
  const res = await fetch("https://wera-bd.vercel.app/guests", {
    next: { revalidate: 0 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

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
