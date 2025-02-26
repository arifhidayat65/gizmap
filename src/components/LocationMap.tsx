'use client'

const LocationMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden" style={{ border: '2px solid var(--primary-color)' }}>
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=106.83560371398926%2C-6.213799684987714%2C106.85559749603272%2C-6.203800315012286&amp;layer=mapnik&amp;marker=-6.2088%2C106.8456"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
        loading="lazy"
        title="GSM Promo Location"
      />
    </div>
  )
}

export default LocationMap
