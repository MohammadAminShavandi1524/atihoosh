import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") ?? "fa";

  try {
    const res = await fetch(`${BASE_URL}/support/user/get_services/${lang}/`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return NextResponse.json(data, {
      status: res.status,
    });
  } catch (error) {
    console.error("Get Services Error:", error);

    return NextResponse.json(
      { message: "Failed to fetch services" },
      { status: 500 },
    );
  }
}
