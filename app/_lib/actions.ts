import { User } from "./definitions";

const baseUrl = process.env.BASE_SERVER_URL || "";

async function getData<T>(endpoint: string, tags: string[]): Promise<T> {
  const res = await fetch(baseUrl + endpoint, { next: { tags: tags } });
  const data: T = await res.json();
  return data;
}

async function postData<T>(endpoint: string, body: BodyInit): Promise<T> {
  const res = await fetch(baseUrl + endpoint, { method: "POST", body: body });
  const data: T = await res.json();
  return data;
}

async function putData<T>(endpoint: string, body: BodyInit): Promise<T> {
  const res = await fetch(baseUrl + endpoint, { method: "PUT", body: body });
  const data: T = await res.json();
  return data;
}

export async function getUsers(): Promise<User[]> {
  const data = await getData<User[]>("/users", ["get-users"]);
  return data;
}

export async function getReports(userId: number) {
  const data = await getData<Report[]>(`/users/${userId}/reports`, []);
  return data;
}

export async function postUser(authId: string, username: string) {
  await postData<User>(
    "/users",
    JSON.stringify({
      authId: authId,
      username: username,
    })
  );
}

export async function putUser(authId: string, username: string) {
  await putData<User>(
    `/users/${authId}`,
    JSON.stringify({
      username: username,
    })
  );
}
