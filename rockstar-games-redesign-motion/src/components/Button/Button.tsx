
type ButtonProps = {
    btnText: string;
    className?: string;
    onClick?: () => void;
};

const Button = ({ btnText, className = "", onClick }: ButtonProps) => {
    return (
        <button className={`bg-[#FCAF17] transition-colors rounded-lg cursor-pointer text-[20px] ${className}`} onClick={onClick}> { btnText }</button >
    );
};

export default Button;
