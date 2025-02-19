'use client'

import { useState } from 'react';
import { podcasts } from '../../../data/podcasts';
import { Podcast } from '../../../types/podcast';
import PodcastPlayer from '../../../components/dashboard/PodcastPlayer';

export default function PodcastPage() {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null);

  const handlePlayPodcast = (podcast: Podcast) => {
    setSelectedPodcast(podcast);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Gizmap Podcast</h1>
        <p className="text-gray-600">Manage and monitor your podcast content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Episodes</p>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-podcast text-green-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Listeners</p>
              <h3 className="text-2xl font-bold text-gray-900">1,234</h3>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-users text-blue-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Hours</p>
              <h3 className="text-2xl font-bold text-gray-900">456</h3>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <i className="fas fa-clock text-purple-500"></i>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Downloads</p>
              <h3 className="text-2xl font-bold text-gray-900">789</h3>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <i className="fas fa-download text-yellow-500"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Episodes */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Latest Episodes</h2>
          <button className="text-green-500 hover:text-green-600">
            <i className="fas fa-plus"></i> Add New Episode
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {podcasts.map((podcast) => (
            <div key={podcast.id} className="relative group">
              <img
                src={podcast.thumbnailUrl}
                alt={podcast.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <button
                  onClick={() => handlePlayPodcast(podcast)}
                  className="bg-white text-green-500 p-3 rounded-full hover:bg-green-500 hover:text-white transition-colors"
                >
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <h3 className="mt-2 font-semibold text-gray-800 line-clamp-1">{podcast.title}</h3>
              <p className="text-sm text-gray-500">{podcast.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Player */}
      <PodcastPlayer podcast={selectedPodcast} />
    </div>
  );
}
