import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function POST(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mendekstraksi data yang dikirimkan dalam permintaan POST
    const extractData = await req.json();

    // Menyimpan data ke basis data menggunakan model Education
    const saveData = await Education.create(extractData);

    if (saveData) {
      // Jika penyimpanan berhasil, kirim respons sukses bersama pesan
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      // Jika ada masalah saat menyimpan data, kirim respons gagal dengan pesan yang sesuai
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again",
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
