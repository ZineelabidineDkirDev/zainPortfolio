import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaBehance } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/' },
  { icon: <FaLinkedin />, path: 'https://linkedin.com/' },
  { icon: <FaInstagram />, path: 'https://instagram.com/' },
  { icon: <FaYoutube />, path: 'https://youtube.com/' },
  { icon: <FaBehance />, path: 'https://Behance.com/' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles} >
      {socials.map((item, index) => (
        <Link key={index} href={item.path} 
        className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
