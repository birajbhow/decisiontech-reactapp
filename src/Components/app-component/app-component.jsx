import React from 'react';
import FilterMenu from '../filter/filterMenu.jsx';
import BurgerMenu from './burgerMenu.jsx';
import ContentPanel from './contentPanel.jsx';

var service = function(){
    return {
        fetchDeals: () =>{
                return fetch('/assets/deals.json')
                .then(res=>res.json())
                .then(rest=>rest.deals)
        }
    }

}();
export default class App extends React.Component {
   constructor(props) {
    super(props);
    this.state =  {
        'deals': [], 
        showTv: false, 
        showMobile: false, 
        speed: "0",
        filterVisibility: 'visible'
    };
    service.fetchDeals().then(deals=>{
        this.setState({'deals': deals})
    });

    this.handleFilterItemClick = this.handleFilterItemClick.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);    
    this.handleBurgerMenuClick = this.handleBurgerMenuClick.bind(this);    
   }

   handleFilterItemClick(filterItemId, filterItemState){
       switch(filterItemId){           
           case "tv":
               this.setState({'showTv': filterItemState});
               break;
           case "mobile":
               this.setState({'showMobile': filterItemState});
               break;
           default: 
               break;
       }
   }

   handleSpeedChange(value) {
       this.setState({ speed: value });
   }

   handleBurgerMenuClick(){
       let currentFilterVisibility = this.state.filterVisibility;
       this.setState({ 
           filterVisibility: currentFilterVisibility ==='visible' ? 'hidden' : 'visible'
       });
   }

   render() {
    return (
        <div className="main">
            <div className="nav">
                <a href="/" id="logo"></a> 
                <BurgerMenu onMenuClick={this.handleBurgerMenuClick}/>
            </div>
            <FilterMenu showTv={this.state.showTv}
                        showMobile={this.state.showMobile}
                        onFilterItemClick={this.handleFilterItemClick} 
                        onSpeedChange={this.handleSpeedChange} 
                        visibility={this.state.filterVisibility}
                        />
            <ContentPanel deals={this.state.deals}                        
                       showTv={this.state.showTv}
                       showMobile={this.state.showMobile}
                       speed={this.state.speed}
            />
        </div>
    );
  }
}