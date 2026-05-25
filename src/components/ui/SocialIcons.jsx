import { FaFacebook, FaGoogle, FaInstagram, FaTripadvisor } from "react-icons/fa";

const links = [
  ["Instagram", "https://www.instagram.com/waterfrontcafebenson/", <FaInstagram />],
  ["Facebook", "https://www.facebook.com/waterfrontcafebenson/", <FaFacebook />],
  ["Tripadvisor", "https://www.tripadvisor.co.uk/", <FaTripadvisor />],
  ["Google", "https://maps.app.goo.gl/aJoNByyxGcF85AkN7", <FaGoogle />],
];

const SocialIcons = () => (
  <div className="social-links">
    {links.map(([label, href, icon]) => (
      <a href={href} target="_blank" rel="noreferrer" aria-label={label} key={label}>
        {icon}
      </a>
    ))}
  </div>
);

export default SocialIcons;
