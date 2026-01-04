import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
Kamu adalah chatbot resmi Bank Sampah Kelurahan Pekayon.
Jawablah dengan bahasa Indonesia yang sopan, singkat, dan jelas.

Aturan:
- Jika ditanya jadwal → arahkan ke menu Jadwal
- Jika ditanya harga → arahkan ke menu Kategori
- Jika ditanya pendaftaran → arahkan ke admin
- Jika tidak tahu → sarankan hubungi admin

Pertanyaan:
${message}
              `,
            },
          ],
        },
      ],
    });

    res.status(200).json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({
      reply: "Maaf, sistem sedang mengalami gangguan. Silakan coba lagi.",
    });
  }
}
