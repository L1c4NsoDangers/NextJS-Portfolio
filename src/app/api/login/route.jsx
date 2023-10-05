import connectToDB from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export default async function POST(req) {
  try {
    // Membuka koneksi ke database sebelum melakukan operasi
    await connectToDB();

    // Mendapatkan data username dan password dari permintaan
    const { username, password } = await req.json();

    // Mencari pengguna berdasarkan nama pengguna (username)
    const checkUser = await User.findOne({ username });

    if (!checkUser) {
      // Jika pengguna tidak ditemukan, kirim respons dengan pesan yang sesuai
      return NextResponse.json({
        success: false,
        message: "User name is not present! Please try again",
      });
    }

    // Memeriksa kecocokan kata sandi dengan menggunakan bcrypt
    const isPasswordValid = await compare(password, checkUser.password);

    if (!isPasswordValid) {
      // Jika kata sandi tidak cocok, kirim respons dengan pesan yang sesuai
      return NextResponse.json({
        success: false,
        message: "Wrong password. Please try again",
      });
    }

    // Jika pengguna dan kata sandi cocok, kirim respons sukses
    return NextResponse.json({
      success: true,
      message: "Login successful",
    });
  } catch (e) {
    console.error("Error:", e);

    // Jika terjadi kesalahan selama proses, kirim respons gagal
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
}
