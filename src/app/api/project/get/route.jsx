import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function GET(req) {
  try {
    await connectToDB();

    // Mengambil semua data dari model "Project"
    const extractData = await Project.find({});

    // Memeriksa apakah data berhasil diambil
    if (extractData && extractData.length > 0) {
      // Jika berhasil, kirim respons sukses bersama dengan data
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      // Jika tidak ada data atau terjadi masalah lain, kirim respons gagal
      return NextResponse.json({
        success: false,
        message: "No data found or something went wrong! Please try again",
      });
    }
  } catch (e) {
    console.error("Error:", e);

    // Jika terjadi kesalahan selama proses, kirim respons gagal
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
