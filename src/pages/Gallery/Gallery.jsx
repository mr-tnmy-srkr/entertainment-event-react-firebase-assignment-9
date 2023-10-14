import { Helmet } from "react-helmet-async";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://i.ibb.co/68bLHYv/pexels-edoardo-tommasini-2034851.jpg",
    thumbnail: "https://i.ibb.co/68bLHYv/pexels-edoardo-tommasini-2034851.jpg",
  },
  {
    original: "https://i.ibb.co/JRx7FyP/pexels-julio-nery-1839919.jpg",
    thumbnail: "https://i.ibb.co/JRx7FyP/pexels-julio-nery-1839919.jpg",
  },
  {
    original: "https://i.ibb.co/4FF2S0Z/pexels-wendy-wei-3812949.jpg",
    thumbnail: "https://i.ibb.co/4FF2S0Z/pexels-wendy-wei-3812949.jpg",
  },
  {
    original: "https://i.ibb.co/mCNGPjg/pexels-king-of-concepts-5182979.jpg",
    thumbnail: "https://i.ibb.co/mCNGPjg/pexels-king-of-concepts-5182979.jpg",
  },
  {
    original: "https://i.ibb.co/F0xZJ7B/pexels-wendy-wei-1190297.jpg",
    thumbnail: "https://i.ibb.co/F0xZJ7B/pexels-wendy-wei-1190297.jpg",
  },
  {
    original: "https://i.ibb.co/HYQgGzN/pexels-max-ravier-12906338.jpg",
    thumbnail: "https://i.ibb.co/HYQgGzN/pexels-max-ravier-12906338.jpg",
  },
  {
    original: "https://i.ibb.co/n3crTnN/pexels-wendy-wei-4142346.jpg",
    thumbnail: "https://i.ibb.co/n3crTnN/pexels-wendy-wei-4142346.jpg",
  },
  {
    original: "https://i.ibb.co/z5qFjS4/pexels-joe-ambrogio-5494915.jpg",
    thumbnail: "https://i.ibb.co/z5qFjS4/pexels-joe-ambrogio-5494915.jpg",
  },
  // {
  //   original: "https://picsum.photos/id/1015/1000/600/",
  //   thumbnail: "https://picsum.photos/id/1015/250/150/",
  // },
  // {
  //   original: "https://picsum.photos/id/1019/1000/600/",
  //   thumbnail: "https://picsum.photos/id/1019/250/150/",
  // },
];

const Gallery = () => {
  return (
    <div className="mb-8">
      <Helmet>
        <title>Events | Gallery</title>
      </Helmet>
      <h1 className="text-center my-6 text-3xl font-bold">Our Events Images</h1>
      <ImageGallery items={images} />
    </div>
  );
};

export default Gallery;
