const Button = ({
	children = "Button",
	type = "button",
	padx = "px-4",
	pady = "py-2",
	fontSize = "text-xl",
	fullRounded = false,
	rounded = "rounded-xl",
	customClasses = "",
}) => {
	return (
		<button
			type={type}
			className={`${padx} ${pady} ${fontSize} ${fullRounded ? "rounded-full" : rounded}
			} bg-primary text-light font-medium cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-indigo-500 active:bg-gradient-to-l ${customClasses}`}
		>
			{children}
		</button>
	);
};

export default Button;
