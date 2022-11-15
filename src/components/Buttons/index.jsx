const Button = ({
  className = "",
  as = "button",
  vairant = "outline",
  children,
  ...props
}) => {
  let variants = { outline: "btn-outline", none: "none" };
  const classType = variants[vairant];
  const Component = as;
  return (
    <Component className={`${classType} ${className}`} {...props}>
      {children}
    </Component>
  );
};
export default Button;
