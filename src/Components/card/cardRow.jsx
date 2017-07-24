import React from 'react';

class CardRow extends React.Component {
    render(){
        const {deal} = this.props;
        let tvChannels = deal && deal.popularChannels && deal.popularChannels.length > 0
                        ? deal.popularChannels.map((ch)=>{
                            return <div width="100px"><div style={{backgroundImage: `url(${ch.logo})`}} className="channelImage"></div></div>;                            
                        })
                        : "";

        let mobileInfo = deal && deal.mobile 
                        ? <div>
                                Data: {deal.mobile.data.label}<br/>
                                Minutes: {deal.mobile.minutes.label}<br />
                                Texts: {deal.mobile.texts.label}<br />
                                Connection: {deal.mobile.connectionType.label}
                            </div>
                        : "";

        let dealOffers = deal.offer 
                        ? <div width="50px">
                            <div style={{backgroundImage: `url(${deal.offer.smallLogo})`}} className="offerImage"></div>
                        </div>
                        : "";
        return (
            <div width="100%" style={{marginTop: '25px'}}>
                <div><b>{deal.title}</b></div>
                <div>{deal.contractLength + "months"}</div>
                <div>{deal.speed.label + "MB"}<br />{deal.usage.label}</div>
                {dealOffers}                
                {tvChannels}
                {mobileInfo}
                <div>{"£" + deal.prices[0].totalContractCost}</div>
            </div>    
        );
    }
}

export default CardRow;