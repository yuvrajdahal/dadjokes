import { motion } from "framer-motion";
const Text = ({
  as = "span",
  className = "",
  variant = "normal",
  children,
  ...props
}) => {
  let variants = {
    normal: "text-normal",
  };
  let classType = variants[variant];
  let Component = as;
  return (
    <Component className={`${classType} ${className}`} {...props}>
      {children}
    </Component>
  );
};
export default Text;
