import { fetchUsersAction } from "@/actions";
import AddNewUser from "@/components/add-new-user";
import SingleUserCard from "@/components/single-user-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function UserManagement() {
  let getListOfUsers;

  try {
    getListOfUsers = await fetchUsersAction();
  } catch (error) {
    console.error("Error fetching users:", error);
    return <h3>Error loading users!</h3>;
  }

  const users = getListOfUsers?.data || [];

  return (
    <div className="w-[100vw] p-20 ">
      <div className="flex justify-between">
        <Button><Link href={'/'}>Go Back</Link></Button>
        <h1 className="text-3xl font-bold">User Management</h1>
        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {users.length > 0 ? (
          users.map((userItem) => (
            <SingleUserCard key={userItem._id} user={userItem} />
          ))
        ) : (
          <h3>No users found! Please create one</h3>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
