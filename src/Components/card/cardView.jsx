import React from 'react';
import PropTypes from 'prop-types';
import CardRow from './cardRow.jsx';

class CardView extends React.Component {

    render(){
        const {deals} = this.props;
        let rows = [];

        deals.forEach((deal, index) => {
            rows.push(<CardRow deal={deal} key={index} />);
        });

        return (
            <div className="card">{rows}</div>
        );
    }
}

CardView.propTypes = {
    deals: PropTypes.array
}
export default CardView;