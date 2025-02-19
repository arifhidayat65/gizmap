interface SEOProps {
  title: string
  description?: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  author?: string
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
}

const SEO = ({
  title,
  description,
  keywords = [],
  image = '/GizMap.png',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  noIndex = false
}: SEOProps) => {
  const siteName = 'GizMap Blog'
  const fullTitle = `${title} | ${siteName}`

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />

      {/* Article Specific */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
        </>
      )}
    </>
  )
}

export default SEO
