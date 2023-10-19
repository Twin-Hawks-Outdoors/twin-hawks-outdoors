import { AnimatePresence, motion, wrap } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import type { ProductDoc } from "types/product";
import { Icon } from "./ui/Icon";
import { MainImage } from "./MainImage";

const directionOffset = 100;
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? -directionOffset : directionOffset,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;

export const ProductGallery = ({
  images,
}: {
  images: ProductDoc["defaultProductVariant"]["images"];
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const imageIndex: number = wrap(0, images?.length || 0, page) as number;

  const paginate = useCallback(
    (newDirection: number) => {
      if (
        page + newDirection < (images?.length || 0) &&
        page + newDirection >= 0
      ) {
        setPage([page + newDirection, -newDirection]);
        setActiveIndex(page + newDirection);
      } else if (page + newDirection === (images?.length || 0)) {
        setPage([0, -newDirection]);
        setActiveIndex(0);
      } else if (page + newDirection === -1) {
        setPage([(images?.length || 0) - 1, -newDirection]);
        setActiveIndex((images?.length || 0) - 1);
      }
    },
    [images, page]
  );

  const handleClick = (index: number) => {
    setPage([index, index < activeIndex ? 1 : -1]);
    setActiveIndex(index);
  };
  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      setPage([index, index < activeIndex ? 1 : -1]);
      setActiveIndex(index);
    }
  };

  /**
   * auto cycle through slides every 6 seconds
   * */

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     paginate(1);
  //   }, 6000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [paginate]);
  return (
    <div className="flex flex-col gap-4">
      <div
        className={`  w-full flex relative justify-between  overflow-hidden aspect-1 h-full `}
      >
        {images && images?.length > 1 && (
          <button
            className="gallery-arrow absolute"
            type="button"
            onClick={() => paginate(-1)}
          >
            <Icon name="chevron-left" />
          </button>
        )}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="absolute top-0 left-0 h-full w-full"
            key={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: {
                type: "spring",
                stiffness: 800,
                damping: 100,
                duration: 0.01,
              },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <MainImage
              className="w-full h-full object-cover"
              alt={(images && images?.[imageIndex].asset?.altText) || ""}
              key={page}
							mode="contain"
              width={800}
							height={800}
              image={images?.[imageIndex]}
            />
          </motion.div>
        </AnimatePresence>
        {images && images?.length > 1 && (
          <button
            className="gallery-arrow"
            type="button"
            onClick={() => paginate(1)}
          >
            <Icon name="chevron-right" />
          </button>
        )}
        {images && images?.length > 1 && (
          <span className="flex w-full gap-4 justify-center items-end -translate-y-12 z-20 absolute -bottom-4">
            {images?.map((image, index) => (
              <span
                className={`cursor-pointer block  z-30 h-3 w-3 rounded-full ${
                  activeIndex === index ? "bg-red-500" : "bg-cream-500/80"
                }`}
                role="presentation"
                onKeyPress={(e) => handleKeyPress(e, index)}
                onClick={() => handleClick(index)}
                key={image?.asset?._id}
              />
            ))}
          </span>
        )}
      </div>{" "}
      <div className="thumbnails flex justify-start items-center flex-wrap flex-row gap-4 bottom-0 relative">
        {images?.map((imageNode, index) => (
          <div
            key={imageNode?.asset?._id}
            className={`thumbnail rounded-sm object-cover object-center outline-none overflow-hidden h-20 w-20  scale-90 transition-all duration-200 ease-in sepia hover:sepia-0 focus:sepia-0 hover:cursor-pointer focus:ring focus:ring-offset-2 focus:ring-red-500  ${
              activeIndex === index ? "sepia-0 scale-100" : ""
            }`}
            tabIndex={0}
            role="button"
            onClick={() => {
              handleClick(index);
            }}
            onKeyPress={(e) => handleKeyPress(e, index)}
          >
            <MainImage
              width={100}
              height={100}
              className="h-full w-full object-cover object-center"
              image={imageNode}
              alt={imageNode?.asset?.altText ?? ""}
            />
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
