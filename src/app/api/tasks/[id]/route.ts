import { NextResponse } from "next/server";
import { db } from "../../db/db";

interface IParams {
  id?: string;
}

export async function PUT(request: Request, context: { params: IParams }) {
  const { id } = context.params;
  const body = await request.json();
  const { status } = body;

  const taskIndex = db.findTaskIndex(id!);

  if (taskIndex === -1) {
    return NextResponse.json({ message: "Tarea no encontrada" }, { status: 404 });
  }

  db.updateTaskStatus(taskIndex, status);
  const updatedTask = db.getTasks()[taskIndex];

  return NextResponse.json(updatedTask, { status: 200 });
}

export async function DELETE(request: Request, context: { params: IParams }) {
  const { id } = context.params;

  const taskIndex = db.findTaskIndex(id!);

  if (taskIndex === -1) {
    return NextResponse.json({ message: "Tarea no encontrada" }, { status: 404 });
  }

  db.deleteTask(taskIndex);

  return NextResponse.json({ message: "Tarea eliminada" }, { status: 200 });
}
