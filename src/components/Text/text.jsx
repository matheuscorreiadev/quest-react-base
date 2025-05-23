function TransformedText({ conteudo, cor }) {
    const estiloParagrafo = {
        color: cor,
        textTransform: 'uppercase'
    };

    return <p style={estiloParagrafo}>{conteudo}</p>;
}

export default TransformedText;