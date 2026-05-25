import { Link } from "react-router-dom";

const Button = ({ children, to, href, variant = "primary", ...props }) => {
  const className = `btn btn-${variant}`;
  if (to) return <Link className={className} to={to} {...props}>{children}</Link>;
  if (href) return <a className={className} href={href} {...props}>{children}</a>;
  return <button className={className} {...props}>{children}</button>;
};

export default Button;
