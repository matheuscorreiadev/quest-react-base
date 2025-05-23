import './button.css'

function Button({ label = "Clique aqui!" }) {
    const handleClick = () => {
        alert(`A label desse botão é "${label}"`);
    };

    return (
        <button className="btn" onClick={handleClick}>
            {label}
        </button>
    );
}

export default Button;