import React from 'react';

import './StockCard.css';

class StockCard extends React.Component{
    redirectToUrl(url) {
        window.open(url, '_blank');
    }

    render(){
        return(
            <div className="stocks-container" onClick={() => this.redirectToUrl(this.props.stocks.url)}>
        
            </div>
        );
    }
}

export default StockCard