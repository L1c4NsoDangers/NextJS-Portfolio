import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function GET(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mengambil semua data dari basis data menggunakan model Education
    const extractData = await Education.find({});

    if (extractData) {
      // Jika data berhasil diambil, kirim respons sukses bersama data yang ditemukan
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      // Jika tidak ada data yang ditemukan, kirim respons gagal dengan pesan yang sesuai
      return NextResponse.json({
        success: false,
        message: "No data found",
      });
    }
  } catch (e) {
    console.error("Error:", e);

    // Jika ada kesalahan selama proses, kirim respons gagal
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
