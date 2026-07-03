interface GalleryProps {
  images: string[];
  columns?: number;
}

const Gallery = ({ images, columns = 3 }: GalleryProps) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square bg-gray-200 rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            Image {index + 1}
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white font-medium">View</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
