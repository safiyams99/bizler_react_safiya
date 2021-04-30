import React from 'react'

function CounterCard({icon, counter,title,cls}) {
     
  // const [count, setCount] = React.useState(counter)
  // React.useEffect(() => {
  //     for(let i=0; i<=count; i++){
  //    setTimeout(setCount(i), i);
  //           }
  // }, [])
    return (
        <div className="counter-column col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="count_icon"> <i className={`flat flaticon-${icon}`}></i> </div>
            <div className="counter_content">
              <h2 className={cls}><span className="counter">{counter}</span>+</h2>
              <div className="title">{title}</div>
            </div>
          </div>
    )
}

export default CounterCard
