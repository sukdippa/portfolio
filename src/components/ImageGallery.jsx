const ImageGallery = () => {
    return (
      <div className="flex items-center mx-auto space-x-[2%]">
        <img src="/1-forest.png" alt="A lush forest" className="w-full max-w-[500px] h-auto object-cover rounded-[20%]" />
        <img src="/2-valley.png" alt="A sunlit valley" className="w-full max-w-[500px] h-auto object-cover rounded-[20%]" />
        <img src="/3-river.png" alt="A winding river" className="w-full max-w-[500px] h-auto object-cover rounded-[20%]" />
        <img src="/4-foggy.png" alt="A foggy forest" className="w-full max-w-[500px] h-auto object-cover rounded-[20%]" />
      </div>
  );
};
export default ImageGallery;