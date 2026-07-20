const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface SendResumeRequest {
  full_name: string;
  phone: string;
  email: string;
  file: string;
}

export async function sendResume(lang: string, data: SendResumeRequest) {
  const response = await fetch(`${API_URL}/support/send_resume/${lang}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send resume");
  }

  return response.json();
}
