import Image from "next/image";

export default function Button({
  children,
  icon,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  as = "button",
}) {
  const Element = as;

  const baseStyle =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200";

  const disabledStyle = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "";

  return (
    <Element
      type={Element === "button" ? type : undefined}
      disabled={Element === "button" ? disabled : undefined}
      onClick={onClick}
      className={`${baseStyle} ${disabledStyle} ${className}`}
    >
      {icon && <Image src={icon} alt="" width={20} height={20} aria-hidden />}
      {children}
    </Element>
  );
}
