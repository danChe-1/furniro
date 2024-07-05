import assets from "@/assets/assets";
const Gallery = () => {
  return (
    <div className="my-12 text-center overflow-hidden">
      <h4 className="font-semibold text-xl text-gray-600">Share your setup with</h4>
      <h2 className="font-bold text-4xl my-2">#FurniroFuture</h2>

      <div className="gallery-grid h-[90vh] gap-2 lg:gap-4 min-w-[150vh]">
        {assets.galleryImages.map((image, index) => (
          <img
            className="h-full w-full object-cover"
            loading="lazy"
            key={index}
            src={image}
            alt={index.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

