const Input = ({ value, onChange, placeholder, type, className }) => {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} />;
};

export default Input;
