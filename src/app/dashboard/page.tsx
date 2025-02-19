import Image from 'next/image'

export default function DashboardPage() {
  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Services</p>
              <h3 className="text-2xl font-bold text-gray-900">156</h3>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-tools text-green-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Users</p>
              <h3 className="text-2xl font-bold text-gray-900">2,789</h3>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-users text-blue-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Podcasts</p>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fas fa-podcast text-purple-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">$12.5k</h3>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fas fa-dollar-sign text-yellow-500"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Latest Services */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Latest Services</h2>
            <button className="text-green-500 hover:text-green-600">View All</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-mobile-alt text-blue-500"></i>
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">iPhone Screen Repair</h3>
                <p className="text-sm text-gray-500">iRoom Bandung</p>
              </div>
              <span className="text-sm text-gray-500">2h ago</span>
            </div>
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-tv text-purple-500"></i>
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">Smart TV Installation</h3>
                <p className="text-sm text-gray-500">iService Bandung</p>
              </div>
              <span className="text-sm text-gray-500">5h ago</span>
            </div>
            <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="fas fa-gamepad text-green-500"></i>
              </div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">PS5 Controller Repair</h3>
                <p className="text-sm text-gray-500">iServices Bandung</p>
              </div>
              <span className="text-sm text-gray-500">1d ago</span>
            </div>
          </div>
        </div>

        {/* Latest Podcasts */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Latest Podcasts</h2>
            <button className="text-green-500 hover:text-green-600">View All</button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="https://storage.googleapis.com/a1aa/image/JyENFRoFerJOhWkpawI2rGfpiWY0yyrpg8i0UB5VDbc.jpg"
                alt="Podcast 1"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">Tech Repair Tips: iPhone Screen Replacement</h3>
                <p className="text-sm text-gray-500">15:30 • John Tech</p>
              </div>
              <button className="text-green-500 hover:text-green-600">
                <i className="fas fa-play"></i>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="https://storage.googleapis.com/a1aa/image/TbdNjjExjCdLuS2M99d2cK9TzFngXOZ32P5tu32MG5U.jpg"
                alt="Podcast 2"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">Smart TV Troubleshooting Guide</h3>
                <p className="text-sm text-gray-500">20:45 • Sarah Electronics</p>
              </div>
              <button className="text-green-500 hover:text-green-600">
                <i className="fas fa-play"></i>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="https://storage.googleapis.com/a1aa/image/3W83ec0Kc18xKnWXJige0Hhw_WjkWOdteS_Db7FtcsM.jpg"
                alt="Podcast 3"
                width={64}
                height={64}
                className="rounded-lg object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">Gaming Console Maintenance 101</h3>
                <p className="text-sm text-gray-500">18:15 • Mike Gaming</p>
              </div>
              <button className="text-green-500 hover:text-green-600">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
