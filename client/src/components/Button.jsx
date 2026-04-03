const Button = ({ ...props }) => {
    console.log(props.className, "btn props");
    return (
        <>
            <button
                className={props.className}
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </>
    )
}

export default Button;