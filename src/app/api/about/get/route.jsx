import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function GET(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mengambil semua data dari koleksi About
    const extractData = await About.find({});

    if (extractData) {
      // Jika pengambilan data berhasil, kirim respons sukses beserta data yang diambil
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
