import React from 'react';



function PricingCard(props){
    return(
        <>
                    <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 "  >
                        <div className={props.card} >
                        <div className="plan-title">
                            <h4>{props.heading}</h4>
                            <div className="separator">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            </div>
                        </div>
                        <div className="price_amount"> From<strong>{props.price}</strong>/mo </div>
                        <div className="features">
                            <ul>
                            <li>One Feature</li>
                            <li className={props.l1}>Another Feature</li>
                            <li className={props.l2}>More Feature</li>
                            <li className={props.l3}>Extra Feature</li>
                            </ul>
                        </div>
                        <div className="purchase"> <a className="purchase_now" href="javascript:void(0)" title="Purchase Now">Purchase Now</a> </div>
                        </div>
                        </div>


                


        </>
    )
}

export default PricingCard;