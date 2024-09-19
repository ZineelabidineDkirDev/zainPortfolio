import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaFacebook, FaBehance } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/ZineelabidineDkirDev' },
  { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/dkirzineelabidine/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/zine_elmoubtakir/' },
  { icon: <FaYoutube />, path: 'https://youtube.com/' },
  { icon: <FaBehance />, path: 'https://www.behance.net/zinosign' },
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
