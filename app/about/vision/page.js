import Image from "next/image";
import bgImage from "@/public/images/bgImage.jpg";

export const metadata = {
  title: "About | Vision",
  description: "This is vision page",
};

const MissionPage = () => {
  return (
    <div className="p-5">
      <p>This is the about&apos;s vision page</p>

      <div className="w-1/4">
        {/* The Image component is used to display images in optimize way */}
        <Image
          placeholder="blur"
          quality={50}
          src={bgImage}
          alt="my-first-image"
        />
      </div>
    </div>
  );
};

export default MissionPage;
