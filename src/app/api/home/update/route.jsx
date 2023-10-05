import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req) {
  try {
    // Menggunakan await untuk memastikan koneksi ke database berhasil
    await connectToDB();

    const extractData = await req.json();
    const { _id, heading, summary } = extractData;

    // Memeriksa apakah _id ada di database sebelum melakukan pembaruan
    const existingData = await Home.findOne({ _id });

    if (!existingData) {
      return NextResponse.json({
        success: false,
        message: "Data not found", // Pesan kesalahan yang lebih informatif
      });
    }

    // Melakukan pembaruan data dengan lebih kompak
    existingData.heading = heading;
    existingData.summary = summary;
    const updateData = await existingData.save();

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "Updated successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to update data",
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
