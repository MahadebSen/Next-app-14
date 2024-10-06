"use client";

const Button = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button className="bg-green-400 px-2 py-2" onClick={() => handleClick()}>
      Click me
    </button>
  );
};

export default Button;
