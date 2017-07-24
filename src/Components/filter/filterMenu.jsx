import React from 'react';

class FilterMenu extends React.Component {
    
    constructor(props){
        super(props);
        this.handleFilterItemClick = this.handleFilterItemClick.bind(this);
        this.handleSpeedChange = this.handleSpeedChange.bind(this);        
    }

    handleFilterItemClick(e){
        this.props.onFilterItemClick(e.target.id, e.target.checked);
    }

    handleSpeedChange(e){
        this.props.onSpeedChange(e.target.value);
    }
    
    render(){
        const {showTv, showMobile, visibility} = this.props;
        return (
            <div className="filterMenu" style={{visibility: `${visibility}`}}>
                <ul>
                    <li>
                        <input type="checkbox" id="broadband" checked="checked" 
                               disabled="disabled"/>Broadband
                    </li>
                    <li>
                        <input type="checkbox" id="tv" checked={showTv} 
                               onChange={this.handleFilterItemClick} />TV
                    </li>
                    <li>
                        <input type="checkbox" id="mobile" checked={showMobile} 
                               onChange={this.handleFilterItemClick} />Mobile
                    </li>
                </ul>
                <div>Spped</div>
                <select onChange={this.handleSpeedChange}>
                    <option value="0">Any</option>
                    <option value="52">52MB</option>
                </select>
            </div>
        );
    }
}

export default FilterMenu;