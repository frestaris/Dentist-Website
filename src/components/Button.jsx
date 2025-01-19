const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-transparent font-bold border-2 my-10 py-5 px-10 rounded-full text-sm hover:bg-white hover:text-black transition-colors uppercase ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
