import { Image, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Loader } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadingImages, setLoadingImages] = useState<{ [key: number]: boolean }>({});
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

const galleryItems = [
    { id: 1, caption: 'Köy Manzarası', images: ['https://res.cloudinary.com/daqysaygc/image/upload/v1764187060/mahmatli-koyu-fotograf_bahpxd.jpg', 'https://res.cloudinary.com/daqysaygc/image/upload/v1764187048/mahmatli-koy-manzarasi_hobd9j.jpg', 'https://res.cloudinary.com/daqysaygc/image/upload/v1764187018/kelkit-mahmatli-koyu-genis-aci_sfap0u.jpg', 'https://res.cloudinary.com/daqysaygc/image/upload/v1764187061/mahmatli-koyu_tw4q12.jpg' ] },
    { id: 2, caption: 'Kışın Mahmatlı', images: ['https://res.cloudinary.com/daqysaygc/image/upload/v1764187063/kisin-mahmatli-manzarasi_nqsi1j.jpg', 'https://res.cloudinary.com/daqysaygc/image/upload/v1764187019/kisin-mahmatli-min_phrxsd.jpg'] },
    { id: 3, caption: 'Dedenin Çayırı 4. Köprü', images: ['https://res.cloudinary.com/daqysaygc/image/upload/v1764187051/mahmatli-koyu-fotograflari_hsbqab.jpg'] },
    { id: 4, caption: 'Harmanda Tek Kale Futbol', images: ['https://res.cloudinary.com/daqysaygc/image/upload/v1764187062/kelkit-mahmatli-koyu_rq7i0p.jpg'] },
    { id: 5, caption: 'Ziyaretin Kıran', images: ['https://res.cloudinary.com/daqysaygc/image/upload/v1764187062/mahmatli-koyu-ziyaretin-kiran_hhnhc7.jpg'] },
    { id: 6, caption: 'Gelincik Tarlası', images: ['https://res.cloudinary.com/daqysaygc/image/upload/v1764187592/kelkit-gelincik-tarlasi_g0zskz.jpg'] },
    { id: 7, caption: 'Doğal Yaşam', images: ['https://res.cloudinary.com/daqysaygc/image/upload/fl_preserve_transparency/v1764187063/gumushane-mahmatli-koyu_ciuysu.jpg?_s=public-apps'] },
  ];

  const openLightbox = (images: string[]) => {
    setSelectedImages(images);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
    setZoom(1);
    setPanX(0);
    setPanY(0);
    setLoadingImages(prev => ({ ...prev, lightbox: true }));
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoom(1);
    setPanX(0);
    setPanY(0);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = () => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPanX(newX);
    setPanY(newY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setZoom(prev => Math.min(Math.max(prev + delta, 1), 4));
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === '0') handleResetZoom();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const handleNextImage = () => {
    setLoadingImages(prev => ({ ...prev, lightbox: true }));
    setCurrentImageIndex(prev => (prev + 1) % selectedImages.length);
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  const handlePrevImage = () => {
    setLoadingImages(prev => ({ ...prev, lightbox: true }));
    setCurrentImageIndex(prev => (prev - 1 + selectedImages.length) % selectedImages.length);
    setZoom(1);
    setPanX(0);
    setPanY(0);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  const handleImageLoad = (itemId: number) => {
    setLoadingImages(prev => ({ ...prev, [itemId]: false }));
  };

  const setImageLoading = (itemId: number) => {
    setLoadingImages(prev => ({ ...prev, [itemId]: true }));
  };

  return (
    <>
      <section id="galeri" className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center mb-4">
            <Image className="text-[#1B3400] mr-3" size={36} />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Fotoğraf Galerisi</h2>
          </div>
          <div className="w-20 h-1 bg-[#1B3400] mx-auto mb-4"></div>

          <p className="text-center text-gray-700 mb-10 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg">
            Köyümüzün manzaraları, yaylalar, kış ve yaz fotoğrafları, düğünler ve bayramlardan kareler burada
            toplanacaktır.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => openLightbox(item.images)}
              >
                <div className="aspect-[4/3] bg-cover bg-center relative overflow-hidden group-hover:bg-gray-100">
                  <img
                    src={item.images[0]}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad(item.id)}
                    onLoadStart={() => setImageLoading(item.id)}
                  />
                  {loadingImages[item.id] !== false && (
                    <div className="absolute inset-0 bg-gray-200/80 flex items-center justify-center">
                      <Loader className="text-[#1B3400] animate-spin" size={40} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-center font-medium text-gray-800">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-screen flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors hover:scale-110 active:scale-95"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              <button
                onClick={handleZoomOut}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors backdrop-blur-sm hover:scale-110 active:scale-95"
                aria-label="Zoom out"
                disabled={zoom <= 1}
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={handleResetZoom}
                className="bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg transition-colors backdrop-blur-sm hover:scale-110 active:scale-95 text-sm font-medium"
                aria-label="Reset zoom"
              >
                Reset
              </button>
              <button
                onClick={handleZoomIn}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors backdrop-blur-sm hover:scale-110 active:scale-95"
                aria-label="Zoom in"
                disabled={zoom >= 4}
              >
                <ZoomIn size={20} />
              </button>
            </div>

            {selectedImages.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-colors backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-colors backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm">
                  {currentImageIndex + 1} / {selectedImages.length}
                </div>
              </> 
            )}

            <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-sm font-medium">
              Zoom: {(zoom * 100).toFixed(0)}%
            </div>

            <div
              ref={imageContainerRef}
              className="overflow-hidden max-h-screen max-w-5xl relative flex items-center justify-center min-h-[400px] bg-black/30 rounded-lg cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onWheel={handleWheel}
            >
              {loadingImages['lightbox'] && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 backdrop-blur-sm">
                  <Loader className="text-white animate-spin" size={48} />
                </div>
              )}
              <img
                ref={imageRef}
                src={selectedImages[currentImageIndex]}
                alt="Gallery lightbox"
                className={`max-w-full max-h-full transition-all duration-300 ${loadingImages['lightbox'] ? 'opacity-0 blur-sm' : 'opacity-100'}`}
                style={{
                  transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
                  cursor: zoom > 1 ? 'grab' : 'default',
                }}
                onLoad={() => setLoadingImages(prev => ({ ...prev, lightbox: false }))}
                onLoadStart={() => setLoadingImages(prev => ({ ...prev, lightbox: true }))}
              />
              {zoom > 1 && (
                <div className="absolute bottom-4 right-4 z-10 bg-white/20 text-white px-3 py-1 rounded text-xs backdrop-blur-sm">
                  Drag to pan • Scroll to zoom • +/- keys • 0 to reset
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;