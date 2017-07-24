import React from 'react';
import PropTypes from 'prop-types';
import GridRow from './gridRow.jsx';

class GridTable extends React.Component {

    render(){
        const {deals} = this.props;
        let rows = [];

        deals.forEach((deal, index) => {
            rows.push(<GridRow deal={deal} key={index} />);
        });

        return (
            <div className="grid">
             <table>
                    <thead>
                        <tr>
                            <th>About</th>
                            <th>contract length</th>
                            <th>speed/usage</th>
                            <th>Offer</th>
                            <th>TV</th>
                            <th>Mobile</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
             </table>
        </div>
        );
    }
}

GridTable.propTypes = {
    deals: PropTypes.array
}
export default GridTable;