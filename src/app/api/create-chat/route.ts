// api/create-chat

import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json;
    const { fileKey, fileName } = body;
    return NextResponse.json({ message: "File uploaded successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
