import ElementButton from './ElementButton.jsx';
import IconAll from './IconAll.jsx';
import IconBattery from './IconBattery.jsx';
import IconCord from './IconCord.jsx';

function ElementFilter({setFilter, filter}) {
    return (
        <div className='container menu'>
            <ElementButton setFilter={setFilter} icon={<IconAll />} value='all' selected={filter} />
            <ElementButton setFilter={setFilter} icon={<IconCord />} value='cord' selected={filter} />
            <ElementButton setFilter={setFilter} icon={<IconBattery />} value='battery' selected={filter} />
        </div>
    );
}

export default ElementFilter;