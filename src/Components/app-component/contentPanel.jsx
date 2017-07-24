import React from 'react';
import PropTypes from 'prop-types';
import GridTable from '../grid/gridTable.jsx';
import CardView from '../card/cardView.jsx';

class ContentPanel extends React.Component {

    render(){
        const {deals, showTv, showMobile, speed } = this.props;
        var rows = [], filteredDeals = [];

        if (showTv && !showMobile){
            filteredDeals = deals.filter((deal) => {
                return deal.productTypes.indexOf("TV") >= 0 && deal.productTypes.indexOf("Mobile") === -1;
            });
        } else if (!showTv && showMobile){
            filteredDeals = deals.filter((deal) => {
                return deal.productTypes.indexOf("TV") === -1 && deal.productTypes.indexOf("Mobile") >= 0;
            });
        } else if (!showTv && !showMobile){
            filteredDeals = deals.filter((deal) => {
                if (speed === "0"){
                    return deal.productTypes.indexOf("TV") === -1 && deal.productTypes.indexOf("Mobile") === -1;
                } else if (speed === "52"){
                    return deal.productTypes.indexOf("TV") === -1 && 
                        deal.productTypes.indexOf("Mobile") === -1 &&
                        deal.speed.label === "52";
                }
            });
        } else {
            filteredDeals = deals.filter((deal) => {
                return deal.productTypes.indexOf("TV") >= 0 && 
                    deal.productTypes.indexOf("Mobile") >= 0 &&
                    deal.mobile.data.label !== "5 GB";
            });
        }

        return (
                <div>
                    <GridTable deals={filteredDeals} />
                    <CardView deals={filteredDeals} /> 
                </div>
        );
    }
}

ContentPanel.propTypes = {
    deals: PropTypes.array
}
export default ContentPanel;