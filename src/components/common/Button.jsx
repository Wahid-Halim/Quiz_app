function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ${className} `}
    >
      {children}
    </button>
  );
}

export default Button;
