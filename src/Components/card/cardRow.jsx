import React from 'react';

class CardRow extends React.Component {
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
            <div width="100%">
                <div>{deal.title}</div>
                <div>{deal.contractLength}</div>
                <div>{deal.speed.label + "MB"}<br />{deal.usage.label}</div>
                <div width="50px">
                    <div style={{backgroundImage: `url(${deal.offer.smallLogo})`}} className="offerImage"></div>
                </div>
                <div width="100px">{tvChannels}</div>
                <div>{mobileInfo}</div>
                <div>{"£" + deal.prices[0].totalContractCost}</div>
            </div>    
        );
    }
}

export default CardRow;