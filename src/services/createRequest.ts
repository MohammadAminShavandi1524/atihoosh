import { ProjectStartForm } from "@/lib/validations/projectStart";

export async function createRequest(
  lang: string,
  data: ProjectStartForm & { email?: string },
) {
  const body = {
    ...data,
    email: data.email?.trim() || null,
    description: data.description?.trim() || null,
  };

  console.log("Sending:", JSON.stringify(body, null, 2));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/support/create_request/${lang}/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );

  const result = await res.json();

  console.log("========== REQUEST ==========");
  console.log(
    "URL:",
    `${process.env.NEXT_PUBLIC_API_URL}/support/create_request/${lang}/`,
  );
  console.log("BODY:", body);

  if (!res.ok) {
    throw new Error(JSON.stringify(result));
  }

  return result;
}
