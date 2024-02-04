// next image

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex  xl:max-w-none ">
      <Image
        src={"/avatarI.png"}
        width={400}
        height={400}
        alt="aaa"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
