import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function POST(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mendapatkan data yang diambil dari permintaan HTTP POST
    const extractData = await req.json();

    // Menyimpan data ke basis data menggunakan model Experience
    const saveData = await Experience.create(extractData);

    if (saveData) {
      // Jika data berhasil disimpan, kirim respons sukses dengan pesan yang sesuai
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      // Jika tidak dapat menyimpan data, kirim respons gagal dengan pesan yang sesuai
      return NextResponse.json({
        success: false,
        message: "Failed to save data",
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
