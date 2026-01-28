import type { User } from "../types/user";
import { api } from "./server";

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${api}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const createUser = async (data: {
  username: string;
  displayedName: string;
}): Promise<User> => {
  const res = await fetch(`${api}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
};
