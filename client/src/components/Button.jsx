const Button = ({ ...props }) => {
    console.log({ ...props }, "btn props");

    const onBtnClick = (e) => {
        console.log(e);
    }

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