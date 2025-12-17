
type ButtonProps = {
    btnText: string;
    className?: string;
    onClick?: () => void;
};

const Button = ({ btnText, className = "", onClick }: ButtonProps) => {
    return (
        <button className={`bg-[#FCAF17] hover:bg-[#fca017c5] duration-300 transition-colors rounded-lg cursor-pointer text-[20px] ${className}`} onClick={onClick}> { btnText }</button >
    );
};

export default Button;
