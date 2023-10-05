import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function POST(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mendapatkan data yang dikirim dalam body permintaan
    const extractData = req.body;

    // Membuat entri baru di koleksi About
    const saveData = await About.create(extractData);

    if (saveData) {
      // Jika penyimpanan berhasil, kirim respons sukses
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      // Jika ada kesalahan dalam penyimpanan, kirim respons gagal
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
