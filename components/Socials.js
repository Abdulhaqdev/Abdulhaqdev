// links
import Link from "next/link";

//  icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiTelegramFill,
  RiGithubFill,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        {" "}
        <RiYoutubeLine />
      </Link>{" "}
      <Link
        href={"https://www.instagram.com/nadirov_abdu1haq"}
        className="hover:text-accent transition-all duration-300"
      >
        {" "}
        <RiInstagramLine />
      </Link>{" "}
      <Link
        href={"https://t.me/nadirovabu1haq"}
        className="hover:text-accent transition-all duration-300"
      >
        {" "}
        <RiTelegramFill />{" "}
      </Link>{" "}
      <Link
        href={"https://github.com/Abdulhaqdev"}
        className="hover:text-accent transition-all duration-300"
      >
        {" "}
        <RiGithubFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        {" "}
        <RiFacebookLine />
      </Link>{" "}
    </div>
  );
};

export default Socials;
