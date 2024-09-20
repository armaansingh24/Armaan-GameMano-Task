interface ButtonProps {
  text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div className="bg-[#E58F28] hover:bg-white hover:text-[#E58F28] transition-all duration-300 ease-linear text-white p-3 px-8 cursor-pointer rounded-full whitespace-nowrap md:text-sm text-xs">
      {text}
    </div>
  );
};

export default ButtonComponent;
