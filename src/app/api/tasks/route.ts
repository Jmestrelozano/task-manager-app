import { NextResponse } from "next/server";
import {db} from "../db/db"

export async function GET(request: Request) {
  const tasks = db.getTasks(); // Obtener tareas actuales
  return NextResponse.json(tasks, { status: 200 });
}

export async function POST(request: Request, res: Response) {
  const body = await request.json();
  const { title, description, status } = body;

  const tasks = db.getTasks();
  const newTask = {
    id: (tasks.length + 1).toString(),
    title,
    description,
    status,
  };

  db.addTask(newTask); // Agregar nueva tarea
  return NextResponse.json(newTask, { status: 201 });
}