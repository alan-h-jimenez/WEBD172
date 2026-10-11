import ElementItemCard from './ElementItemCard.jsx';

function ElementList({itemList, filter}) {
    const filteredItems = itemList.filter((tool) => {
        if (filter === 'cord') {
            return tool.cordless === false; // Only corded tools
        } else if (filter === 'battery') {
            return tool.cordless === true;  // Only cordless tools
        }
        return true; // 'all' shows everything
    });

    return (
        <div id="content" className="container">
            <div id="displayAllRecords" className="display tool-grid">
                {filteredItems.map((tool) => <ElementItemCard 
                    key={tool.id} 
                    model={tool.model} 
                    brand={tool.brand} 
                    url={tool.image} 
                    name={tool.name} />
                )}
            </div>
        </div>
    );
}

export default ElementList;