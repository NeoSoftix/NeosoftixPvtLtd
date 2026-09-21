"use client";

const variantClasses = {
  light:
    "bg-white text-[#050b16] hover:bg-blue-600 hover:text-white",
  dark:
    "bg-[#050b16] text-white hover:bg-blue-600",
  accent:
    "bg-sky-400 text-[#050b16] hover:bg-white shadow-[0_10px_30px_rgba(56,189,248,0.3)]",
  outline:
    "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/15",
  "outline-dark":
    "border border-slate-200 bg-white text-[#0f1729] hover:border-slate-400 hover:bg-slate-50",
};

const sizeClasses = {
  sm: "px-5 py-2.5 text-xs sm:text-sm",
  md: "px-7 py-3.5 text-xs sm:text-sm",
  lg: "px-8 py-4 text-xs sm:text-sm",
};

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="transition-transform group-hover:translate-x-0.5"
  >
    <path
      d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "light",
  size = "md",
  showArrow = false,
  icon = null,
  iconPosition = "right",
  disabled = false,
  className = "",
  ...rest
}) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-lg transition-all duration-300 hover:scale-[1.03] disabled:opacity-60 disabled:hover:scale-100 ${
    variantClasses[variant] || variantClasses.light
  } ${sizeClasses[size] || sizeClasses.md} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {showArrow && <ArrowIcon />}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}
