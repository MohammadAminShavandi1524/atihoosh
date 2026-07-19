export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

export async function getServices(lang: string): Promise<Service[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/support/user/get_services/${lang}/`,
    {
      method: "GET",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
}
