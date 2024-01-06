import { putUser } from "@/app/_lib/actions";
import { UserJSON, WebhookEvent } from "@clerk/nextjs/server";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  try {
    const payload: WebhookEvent = await request.json();
    const data = payload.data as UserJSON;

    if (data.id && data.username) {
      await putUser(data.id, data.username);
      revalidateTag("get-users");
    }

    return Response.json({ message: "Received" });
  } catch (err) {
    return Response.error();
  }
}
