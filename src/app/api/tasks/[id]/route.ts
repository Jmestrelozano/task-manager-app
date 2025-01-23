import { NextResponse } from "next/server";
import { db } from "../../db/db";

export async function PUT(request: Request) {
  const id = request.url.split("/").pop();
  const taskIndex = db.findTaskIndex(id!);

  if (taskIndex === -1) {
    return NextResponse.json(
      { message: "Tarea no encontrada" },
      { status: 404 }
    );
  }

  const body = await request.json();

  db.updateTask(taskIndex, body);
  const updatedTask = db.getTasks()[taskIndex];

  return NextResponse.json(updatedTask, { status: 200 });
}

export async function DELETE(request: Request) {
  const id = request.url.split("/").pop();

  const taskIndex = db.findTaskIndex(id!);

  if (taskIndex === -1) {
    return NextResponse.json(
      { message: "Tarea no encontrada" },
      { status: 404 }
    );
  }

  db.deleteTask(taskIndex);

  return NextResponse.json(db.getTasks(), { status: 200 });
}
