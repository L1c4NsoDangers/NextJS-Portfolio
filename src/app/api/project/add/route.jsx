import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function POST(req) {
  try {
    await connectToDB();

    // Mendapatkan data yang dikirimkan dalam permintaan
    const extractData = await req.json();

    // Menyimpan data ke dalam model "Project"
    const saveData = await Project.create(extractData);

    if (saveData) {
      // Jika penyimpanan berhasil, kirim respons sukses
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      // Jika ada masalah saat penyimpanan, kirim respons gagal
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again",
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
