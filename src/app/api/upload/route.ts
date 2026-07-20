import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.ARVAN_REGION!,
  endpoint: process.env.ARVAN_ENDPOINT!,
  forcePathStyle: true,
  credentials: {
    accessKeyId: process.env.ARVAN_ACCESS_KEY!,
    secretAccessKey: process.env.ARVAN_SECRET_KEY!,
  },
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 },
      );
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { message: "Only PDF files are allowed" },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const extension = file.name.split(".").pop();

    const fileName = `${crypto.randomUUID()}.${extension}`;

    const key = `resumes/${fileName}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.ARVAN_BUCKET!,
        Key: key,
        Body: buffer,
        ContentType: file.type,
      }),
    );

    const url = `${process.env.ARVAN_BUCKET_URL}/${key}`;

    return NextResponse.json({
      success: true,
      url,
    });
  } catch (error) {
    // console.error(error);

    return NextResponse.json({ message: "Upload failed" }, { status: 500 });
  }
}
