import { useState } from "react";

const Tabs = () =>{
    
    const [active, setActive] = useState(1);

    const onClickHandler=(btn)=>{
        setActive(btn);
    }


    return(
        <div className="tabs-container">
            <div className="btn-container">
                <button onClick={()=>onClickHandler(1)}>Recent</button>
                <button onClick={()=>onClickHandler(2)}>Popular</button>
                <button onClick={()=>onClickHandler(3)}>Trending</button>
            </div>
            {active===1?
            <div className="tab-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi quia reprehenderit necessitatibus libero, repudiandae accusamus temporibus ratione facilis dolorem veritatis neque, perspiciatis consequuntur iure. Ea, facilis sunt. Sit, optio.</p>
            </div>:''}
            {active===2?
            <div className="tab-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo fuga non, officia distinctio corrupti ea quae rem minus tempore voluptas velit libero quos excepturi. Quod perferendis facere ducimus quas.</p>
            </div>:''}
            {active===3?
            <div className="'tab-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et est nam veniam, incidunt quae facilis similique cumque dignissimos suscipit fuga molestiae veritatis expedita! Fugit aperiam cumque saepe dolorem tempore nemo.</p>
            </div>:''}
        </div>
    )
}

export default Tabs;