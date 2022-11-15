const Spinner = ({ className, ...props }) => {
  return <img src="assets/loading.gif" className={`${className}`} {...props} />;
};
export default Spinner;
