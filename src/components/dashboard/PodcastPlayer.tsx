'use client'

import { useState, useRef, useEffect } from 'react';
import { Podcast } from '../../types/podcast';

interface PodcastPlayerProps {
  podcast: Podcast | null;
}

export default function PodcastPlayer({ podcast }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (podcast) {
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [podcast]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!podcast) return null;

  return (
    <div className="fixed bottom-0 left-64 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
      <audio
        ref={audioRef}
        src={podcast.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 relative">
            <img
              src={podcast.thumbnailUrl}
              alt={podcast.title}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="flex-grow">
            <h4 className="font-semibold text-gray-800 truncate">{podcast.title}</h4>
            <p className="text-gray-500 text-sm">{podcast.author}</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Math.max(0, currentTime - 15);
                }
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-backward"></i>
            </button>
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime = Math.min(duration, currentTime + 15);
                }
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-forward"></i>
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-xs text-gray-500 w-12 text-right">{formatTime(currentTime)}</span>
          <div className="flex-grow">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
          <span className="text-xs text-gray-500 w-12">{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
}
