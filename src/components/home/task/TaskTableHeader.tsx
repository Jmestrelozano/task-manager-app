import React from "react";

export const TaskTableHeader = () => (
  <thead className="w-full border-b border-gray-300">
    <tr className="w-full text-black text-left">
      <th className="py-2">Task Title</th>
      <th className="py-2">Priority</th>
      <th className="py-2 line-clamp-1">Created At</th>
    </tr>
  </thead>
);