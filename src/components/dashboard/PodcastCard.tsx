'use client'

import Image from 'next/image';
import { Podcast } from '../../types/podcast';

interface PodcastCardProps {
  podcast: Podcast;
  onPlay: (podcast: Podcast) => void;
}

export default function PodcastCard({ podcast, onPlay }: PodcastCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48">
        <Image
          src={podcast.thumbnailUrl}
          alt={podcast.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-gizmap-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {podcast.category}
          </span>
          <span className="text-gray-500 text-sm">
            {podcast.duration}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
          {podcast.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {podcast.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            By {podcast.author}
          </div>
          <button
            onClick={() => onPlay(podcast)}
            className="bg-gizmap-green-500 text-white px-4 py-2 rounded-full hover:bg-gizmap-green-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
