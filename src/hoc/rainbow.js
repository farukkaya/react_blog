import React from 'react';

const Rainbow =(WrappedComponent)=>{

    const colors=['red','pink','orange','blue','green'];


    const randomColor=colors[Math.floor(Math.random()*6)];

    const className=randomColor+'-text';
    return(props)=>(
        <div className={className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )
}

export default Rainbow;
