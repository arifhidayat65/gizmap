'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara mendaftar sebagai teknisi di Gsm Promo?",
    answer: "Untuk mendaftar sebagai teknisi di Gsm Promo, Anda perlu mengisi formulir pendaftaran online dan melampirkan dokumen yang diperlukan seperti sertifikat keahlian dan pengalaman kerja."
  },
  {
    id: 2,
    question: "Berapa lama proses perbaikan perangkat?",
    answer: "Waktu perbaikan bervariasi tergantung pada jenis kerusakan dan ketersediaan suku cadang. Rata-rata waktu perbaikan adalah 1-3 hari kerja."
  },
  {
    id: 3,
    question: "Apakah ada garansi untuk layanan perbaikan?",
    answer: "Ya, setiap layanan perbaikan di Gsm Promo memiliki garansi servis selama 30 hari untuk memberikan jaminan kualitas kepada pelanggan."
  },
  {
    id: 4,
    question: "Bagaimana sistem pembayaran di Gsm Promo?",
    answer: "Gsm Promo menerima berbagai metode pembayaran termasuk transfer bank, e-wallet, dan pembayaran tunai. Pembayaran dilakukan setelah perbaikan selesai."
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 text-green-500">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openId === faq.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`px-4 py-3 bg-gray-50 transition-all duration-200 ${
                openId === faq.id ? 'block' : 'hidden'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
