import Image from 'next/image'
import LocationMap from '../../components/LocationMap'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer/Footer'

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 mt-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-primary">About GSM Promo</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Platform layanan service terpercaya untuk perangkat elektronik Anda
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="custom-card p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
            <p className="text-neutral-600">
              Menjadi platform terdepan dalam menghubungkan pengguna dengan layanan service elektronik yang terpercaya, 
              memberikan solusi terbaik untuk setiap kebutuhan perbaikan perangkat elektronik.
            </p>
          </div>
          <div className="custom-card p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
            <ul className="list-disc list-inside text-neutral-600 space-y-2">
              <li>Menyediakan layanan service berkualitas dengan teknisi profesional</li>
              <li>Memberikan pengalaman service yang transparan dan terpercaya</li>
              <li>Mengembangkan ekosistem service elektronik yang efisien</li>
              <li>Mendukung pertumbuhan UMKM dalam bidang service elektronik</li>
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Why Choose GsmPromo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="custom-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/window.svg"
                  alt="Professional Service"
                  width={64}
                  height={64}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Service</h3>
              <p className="text-neutral-600">
                Tim teknisi profesional kami siap memberikan layanan terbaik untuk perangkat elektronik Anda
              </p>
            </div>
            <div className="custom-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/globe.svg"
                  alt="Wide Coverage"
                  width={64}
                  height={64}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Coverage</h3>
              <p className="text-neutral-600">
                Jaringan teknisi yang tersebar luas memudahkan Anda mendapatkan layanan di mana saja
              </p>
            </div>
            <div className="custom-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/file.svg"
                  alt="Quality Guarantee"
                  width={64}
                  height={64}
                  className="text-primary"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
              <p className="text-neutral-600">
                Kami memberikan jaminan kualitas untuk setiap layanan yang diberikan
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto">
                <Image
                  src="/images/austin-distel-Hg3BHX6U5jg-unsplash.jpg"
                  alt="Team Member"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ahmad Rizki</h3>
              <p className="text-neutral-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto">
                <Image
                  src="/images/cowomen-UUPpu2sYV6E-unsplash.jpg"
                  alt="Team Member"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Putri</h3>
              <p className="text-neutral-600">Operations Director</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto">
                <Image
                  src="/images/juja-han-uT55XxQLQGU-unsplash.jpg"
                  alt="Team Member"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Budi Santoso</h3>
              <p className="text-neutral-600">Technical Lead</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto">
                <Image
                  src="/images/kit-formerly-convertkit-BOI9jki3nzY-unsplash.jpg"
                  alt="Team Member"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Linda Wijaya</h3>
              <p className="text-neutral-600">Customer Relations</p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Location</h2>
          <div className="max-w-5xl mx-auto">
            <LocationMap />
            <div className="mt-6 text-center">
              <p className="text-lg text-neutral-600 mb-2">
                Gsm Promo Headquarters
              </p>
              <p className="text-neutral-600">
                Jl. Sudirman No. 123<br />
                Jakarta Pusat, 10220<br />
                Indonesia
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Get in Touch</h2>
          <p className="text-xl text-neutral-600 mb-8">
            Have questions? We&apos;d love to hear from you.
          </p>
          <a 
            href="mailto:contact@gsmpromo.com"
            className="custom-button custom-button-primary inline-block"
          >
            Contact Us
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
