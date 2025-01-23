import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Tasks } from "@/components/home/Tasks";
import { TasksContainer } from "@/components/home/task/TasksContainer";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>

      <TasksContainer />
    </div>
  );
}