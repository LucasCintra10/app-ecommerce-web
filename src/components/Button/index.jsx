const Button = ({ className, children, onClick }) => {
  return (
    <div className={`cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
