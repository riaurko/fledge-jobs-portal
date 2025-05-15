const InputField = ({
	label = "Input",
	type = "text",
	id = "",
	name = "",
	placeholder = "",
	required = true,
	children = null,
}) => {
	return (
		<div className="flex flex-col space-y-1">
			<label
				htmlFor={id}
				className="text-xl font-medium"
			>
				{label}
			</label>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				required={required}
				className="p-3 text-lg text-slate-700 border border-slate-400 focus:bg-slate-300 focus:outline-none focus:border-primary/60 rounded-xl caret-primary"
			/>
			{children}
		</div>
	);
};

export default InputField;
