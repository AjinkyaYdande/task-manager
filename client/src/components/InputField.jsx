const InputField = ({ ...props }) => {
    console.log({ ...props }, "inputF");
    return (
        <>
            <input
                maxLength={props.maxLength}
                min={props.minLength}
                placeholder={props.placeHolder}
                type={props.type}
                className="input-field-style"
                value={props.value}
                onChange={props.onChange}
            />
        </>
    )
}

export default InputField;