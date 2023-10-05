import connectToDB from "@/database";
import Home from "@/models/Home";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connectToDB();
    const extractData = await req.json();

    // Validasi data jika diperlukan
    if (!isValidData(extractData)) {
      return NextResponse.json({
        success: false,
        message: "Invalid data format",
      });
    }

    const saveData = await Home.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to save data",
      });
    }
  } catch (e) {
    console.error("Error:", e);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}

// Fungsi untuk validasi data
function isValidData(data) {
  // Implementasi validasi sesuai kebutuhan
  // Misalnya, periksa apakah data memiliki semua properti yang diperlukan, dll.
  return true; // Ubah menjadi implementasi validasi yang sesuai
}
