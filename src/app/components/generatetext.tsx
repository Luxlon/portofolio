"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `HI, My name is Paris Achmad , im a fullstack developer, and i love to create something new and innovative.`; // Variabel untuk teks utama
const subText = `Contact me at parisafauzan@gmail.com`; // Variabel baru untuk teks lebih kecil

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} subText={subText} />;
}
