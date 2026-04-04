const Button = ({ ...props }) => {
    console.log(props.className, "btn props");
    return (
        <>
            <button
                className={props.className}
                onClick={props.onClick}
            >
                {props.label}
                {props.iconPath ?
                    <img
                        src={props.iconPath}
                        alt={props.imgAlt}
                    />
                    : ""}
            </button>
        </>
    )
}

export default Button;