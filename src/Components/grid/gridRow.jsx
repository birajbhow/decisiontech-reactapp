import React from 'react';

class GridRow extends React.Component {
    render(){
        const {deal} = this.props;
        let tvChannels = deal && deal.popularChannels && deal.popularChannels.length > 0
                        ? deal.popularChannels.map((ch)=>{
                            return <div style={{backgroundImage: `url(${ch.logo})`}} className="channelImage"></div>;                            
                        })
                        : "N/A";
        let mobileInfo = deal && deal.mobile 
                        ? <div>
                                Data: {deal.mobile.data.label}<br/>
                                Minutes: {deal.mobile.minutes.label}<br />
                                Texts: {deal.mobile.texts.label}<br />
                                Connection: {deal.mobile.connectionType.label}
                            </div>
                        : "N/A";
        return (
            <tr>
                <td>{deal.title}</td>
                <td>{deal.contractLength}</td>
                <td>{deal.speed.label + "MB"}<br />{deal.usage.label}</td>
                <td width="50px">
                    <div style={{backgroundImage: `url(${deal.offer.smallLogo})`}} className="offerImage"></div>
                </td>
                <td width="100px">{tvChannels}</td>
                <td>{mobileInfo}</td>
                <td>{"£" + deal.prices[0].totalContractCost}</td>
            </tr>    
        );
    }
}

export default GridRow;