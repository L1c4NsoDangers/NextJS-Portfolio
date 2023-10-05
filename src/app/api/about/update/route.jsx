import connectToDB from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function PUT(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mendapatkan data yang akan diupdate dari permintaan
    const extractData = await req.json();
    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      noofclients,
      skills,
    } = extractData;

    // Mencoba untuk mencari dan mengupdate data sesuai dengan ID yang diberikan
    const updateData = await About.findOneAndUpdate(
      {
        _id: _id,
      },
      { aboutme, noofprojects, yearofexperience, noofclients, skills },
      { new: true }
    );

    if (updateData) {
      // Jika pengupdatean data berhasil, kirim respons sukses
      return NextResponse.json({
        success: true,
        message: "Updated successfully",
      });
    } else {
      // Jika tidak ada data yang ditemukan untuk diupdate, kirim respons gagal dengan pesan yang sesuai
      return NextResponse.json({
        success: false,
        message: "No data found to update",
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
