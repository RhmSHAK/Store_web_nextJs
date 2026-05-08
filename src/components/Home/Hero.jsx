'use client';

export default function Hero({
  headline = 'Welcome to Our Store',
  subtitle = 'Discover amazing products at unbeatable prices',
  ctaText = 'Shop Now',
  ctaLink = '/shop',
  backgroundImage = null,
  backgroundColor = 'bg-gradient-to-r from-blue-200 to-blue-300',
  children,
}) {
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  const backgroundClasses = backgroundImage ? '' : backgroundColor;

  return (
    <section
      className={`relative w-full min-h-96 flex items-center justify-center overflow-hidden ${backgroundClasses}`}
      style={backgroundStyle}
    >
      {/* Overlay for better text readability */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {headline}
        </h1>

        <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {children ? (
          children
        ) : (
          <a
            href={ctaLink}
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
