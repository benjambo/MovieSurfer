import React from "react";
import Gallery from "react-photo-gallery";

export const GalleryPage = () => {
  const photos = [
    {
      src:
        "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/2923675/pexels-photo-2923675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/2350053/pexels-photo-2350053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/2773557/pexels-photo-2773557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/3692638/pexels-photo-3692638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/408518/pexels-photo-408518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/1005332/camera-retro-photography-vintage-1005332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      width: 4,
      height: 3
    }
  ];

  return (
    <div className="gallery">
      <Gallery photos={photos} direction={"column"} />
    </div>
  );
};
