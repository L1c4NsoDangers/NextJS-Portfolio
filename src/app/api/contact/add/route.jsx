import connectToDB from "@/database";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function POST(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mendapatkan data yang akan disimpan dari permintaan
    const extractData = await req.json();

    // Menyimpan data ke basis data
    const saveData = await Contact.create(extractData);

    if (saveData) {
      // Jika penyimpanan data berhasil, kirim respons sukses
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      // Jika ada kesalahan selama penyimpanan data, kirim respons gagal dengan pesan yang sesuai
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
