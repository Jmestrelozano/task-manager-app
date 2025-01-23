import { NextResponse } from "next/server";
import {db} from "../db/db"

export async function GET(request: Request) {
  const tasks = db.getTasks();
  return NextResponse.json(tasks, { status: 200 });
}

export async function POST(request: Request, res: Response) {
  const body = await request.json();
  const { title, description, stage, priority, date } = body;

  const tasks = db.getTasks();
  const newTask = {
    _id: (tasks.length + 1).toString(),
    title,
    description,
    stage,
    priority,
    date,
    createdAt: new Date().toISOString(),
    updatedAt:  new Date().toISOString(),
  };

  db.addTask(newTask);
  return NextResponse.json(newTask, { status: 201 });
}