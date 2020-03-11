import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Spring } from "react-spring/renderprops";

export const GalleryPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src:
        "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Red Theater",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/2923675/pexels-photo-2923675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Captain Marvel and Dumbo",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Chicago Street View",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Movie Letters",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/2350053/pexels-photo-2350053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Polaroid Camera",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/2773557/pexels-photo-2773557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Photo Shoot",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/3692638/pexels-photo-3692638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Retro Camera",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Cinema Seats",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Subway Photo Shoot",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/368893/pexels-photo-368893.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Mountains",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/408518/pexels-photo-408518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Camera Lens",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Road Reflection",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Film Roll",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/1005332/camera-retro-photography-vintage-1005332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Retro Film Camera",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/736414/pexels-photo-736414.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Fish Eye Lens",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/918281/pexels-photo-918281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Cut",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/821738/pexels-photo-821738.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Retro Film Camera",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/3656944/pexels-photo-3656944.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300",
      title: "Road Photo Shoot",
      width: 4,
      height: 3
    },
    {
      src:
        "https://images.pexels.com/photos/2792116/pexels-photo-2792116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Smoke Bomb At Stadium",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/2910206/pexels-photo-2910206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "Retro Camera",
      width: 3,
      height: 4
    },
    {
      src:
        "https://images.pexels.com/photos/1236703/pexels-photo-1236703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600",
      title: "iPhone Photography",
      width: 3,
      height: 4
    }
  ];

  return (
    <div className="gallery">
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ duration: 800 }}
      >
        {props => (
          <div style={props}>
            <Gallery photos={photos} onClick={openLightbox} />
          </div>
        )}
      </Spring>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.src,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};
