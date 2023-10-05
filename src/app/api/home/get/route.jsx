import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    // Menggunakan await untuk memastikan koneksi ke database berhasil
    await connectToDB();

    // Menggunakan `await` saat melakukan pencarian data
    const extractData = await Home.find({});

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  } catch (e) {
    console.error("Error:", e); // Menggunakan `console.error` untuk kesalahan
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
