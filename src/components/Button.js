const Button = ({name, color, onClick}) => {
    return (
        <div>
            <button className='btn' style={{background: color}} onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button
