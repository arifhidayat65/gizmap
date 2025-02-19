import HeroSlider from '../components/HeroSlider'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container-fluid px-0 pt-20">
        {/* Hero Section */}
        <section className="mb-4">
          <HeroSlider />
        </section>

        {/* Service Categories */}
        <section className="bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex justify-around text-center text-green-500 mb-4">
            <div>
              <i className="fas fa-mobile-alt text-3xl"></i>
              <p>Service Smartphone</p>
            </div>
            <div>
              <i className="fas fa-laptop text-3xl"></i>
              <p>Service Laptop / PC</p>
            </div>
            <div>
              <i className="fas fa-tv text-3xl"></i>
              <p>Service LED / Smart TV</p>
            </div>
            <div>
              <i className="fas fa-gamepad text-3xl"></i>
              <p>Service Consol</p>
            </div>
            <div>
              <i className="fas fa-phone text-3xl"></i>
              <p>Service Alat Komunikasi</p>
            </div>
            <div>
              <i className="fas fa-ellipsis-h text-3xl"></i>
              <p>Service Alat Lainnya</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-2">
            <button className="bg-green-100 text-green-500 px-4 py-2 rounded-full mb-2">
              Alumni Borneofalsher
            </button>
            <button className="bg-green-100 text-green-500 px-4 py-2 rounded-full mb-2">
              Komunitas Teknisi Regional Bandung
            </button>
            <button className="bg-green-100 text-green-500 px-4 py-2 rounded-full mb-2">
              iColor Service Repair
            </button>
            <button className="bg-green-100 text-green-500 px-4 py-2 rounded-full mb-2">
              Komunitas Teknisi Garangan
            </button>
          </div>
        </section>

        {/* Promo Section */}
        <section className="mb-4">
          <h2 className="text-xl font-bold mb-2">Sedang Ada Promo & Diskon Terdekat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="https://storage.googleapis.com/a1aa/image/imf-iNZsYZmyZ0nR2fMSBEtX9rOSe_pbyEl4l-cSgOw.jpg"
                alt="Repairing a smartphone"
                width={300}
                height={160}
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-blue-500">Repair Smartphone</h3>
              <p className="font-bold">iRoom Bandung</p>
              <p className="text-gray-500">(143)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="https://storage.googleapis.com/a1aa/image/GVPc_xDNdgiET3nzJ_ihVkNUKMClLVCSGVXx0ksh93Q.jpg"
                alt="Repairing a smart TV"
                width={300}
                height={160}
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-blue-500">Repair Smart TV</h3>
              <p className="font-bold">iService Bandung</p>
              <p className="text-gray-500">(110)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src="https://storage.googleapis.com/a1aa/image/74P3KoQmVF6tgADp92h2YcMn1g0dPplaVY5PYmkySNY.jpg"
                alt="Repairing a console"
                width={300}
                height={160}
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-blue-500">Repair Console</h3>
              <p className="font-bold">iServices Bandung</p>
              <p className="text-gray-500">(74)</p>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-green-500">Gizmap PodCast</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src="https://storage.googleapis.com/a1aa/image/mUGNU0QLwo5jleKDzpCnBkHiB_nlHJXHSZctJj711Wk.jpg"
                  alt="Podcast recording"
                  width={150}
                  height={96}
                  className="w-full h-24 object-cover mb-2"
                />
              </div>
            ))}
          </div>
        </section>
    </div>
  );
}
