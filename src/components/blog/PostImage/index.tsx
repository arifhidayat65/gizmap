import Image from 'next/image'
import { useState } from 'react'

interface PostImageProps {
  src: string
  alt: string
  aspectRatio?: 'video' | 'square' | 'wide' | 'portrait'
  priority?: boolean
  blur?: boolean
  className?: string
}

const PostImage = ({
  src,
  alt,
  aspectRatio = 'video',
  priority = false,
  blur = true,
  className = ''
}: PostImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const aspectRatioClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[16/9]',
    portrait: 'aspect-[3/4]'
  }

  return (
    <div className={`
      relative overflow-hidden rounded-xl bg-neutral-100
      ${aspectRatioClasses[aspectRatio]}
      ${className}
    `}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`
          object-cover duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}
          ${blur ? 'hover:scale-105 transition-transform' : ''}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  )
}

export default PostImage
