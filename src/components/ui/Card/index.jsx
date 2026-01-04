export default function MediaCard({
  title,
  description,
  mediaType, // "image" | "video" | null
  mediaSrc, // url image / video
  mediaAlt,
  children, // konten bebas
  className = "",
  mediaClassName = "",
}) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border border-green-100
        shadow-sm
        overflow-hidden
        transition-all duration-300
        hover:shadow-md
        ${className}
      `}
    >
      {/* MEDIA */}
      {mediaType && mediaSrc && (
        <div className="relative w-full aspect-video bg-green-50">
          {mediaType === "image" && (
            <img
              src={mediaSrc}
              alt={mediaAlt || title}
              className={`w-full h-full object-cover ${mediaClassName}`}
            />
          )}

          {mediaType === "video" && (
            <video
              src={mediaSrc}
              controls
              className={`w-full h-full object-cover ${mediaClassName}`}
            />
          )}
        </div>
      )}

      {/* CONTENT */}
      <div className="p-5">
        {title && (
          <h3 className="text-lg font-semibold text-green-800 mb-1">{title}</h3>
        )}

        {description && (
          <p className="text-sm text-green-700/80 mb-3">{description}</p>
        )}

        {/* CUSTOM CONTENT */}
        {children}
      </div>
    </div>
  );
}
