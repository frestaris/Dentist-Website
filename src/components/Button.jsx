const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`bg-transparent font-bold border-2 my-10 py-5 px-10 rounded-full text-sm hover:bg-white hover:text-black transition-colors uppercase ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
