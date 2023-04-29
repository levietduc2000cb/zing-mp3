import Image from "next/image";
import React from "react";
import imgLoading from "../../assets/img/loading-gif.gif";

export interface ImageCustomProp {
  src: string;
  alt: string;
  className?: string;
}

const ImageCustom = ({ src, alt, className }: ImageCustomProp) => {
  const myLoader = () => {
    return src;
  };

  return (
    <Image
      priority
      loader={myLoader}
      src={imgLoading}
      alt={alt}
      fill
      sizes="100%"
      style={{ objectFit: "cover" }}
      className={className}
    />
  );
};

export default ImageCustom;
