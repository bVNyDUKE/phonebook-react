const FormField = ({ data, label }) => (
	<div className="field">
		<label>{label}</label>
		<input
			type="text"
			name={label}
			value={data.value}
			onChange={data.onChange}
		></input>
	</div>
);

export default FormField;
