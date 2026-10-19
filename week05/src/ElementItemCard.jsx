function ElementItemCard({key, model, brand, url, name}) {

    return (
        <div className="tool-card" key={key}>
            <p>Model: {model}</p>
            <p>Brand: {brand}</p>
            <img src={url} className="image" alt={name} />
            <p className="name">{name}</p>
        </div>
    );
}

export default ElementItemCard;