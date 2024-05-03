import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...rest }: ImageProps) => {
  return (
    <div>
      <Image
        height={0}
        width={0}
        className="h-auto w-full object-contain"
        sizes="100vw"
        quality={100}
        alt={alt}
        {...rest}
      />
    </div>
  );
};

export default PromoBanner;
