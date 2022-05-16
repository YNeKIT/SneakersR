function Drawer() {
    return (
       
       <div style={{ display: 'none'}}  className="drawer">
           <div style={{ display: 'none'}} className="overlay"></div>
         <h2 className="d-flex justify-between mb-30">
             Bag <img className="cu-p " src="/img/btnremovee.svg" alt="Remove"/>
             </h2>

              <div className="items">
        <div className="cartItem d-flex align-center mb-20 " >
         <div 
           style={{backgroundImage: 'url(img/sneakers/1.jpg)' }}
            className="cartItemImg"></div>

           <div className="mr-20 flex">
             <p className="mb-5">Nike Blazer Mid Suede</p>
             <b>12 999 lei.</b>
           </div>
           <img className="removeBtn" src="/img/btnremovee.svg" alt="Remove"/>
         </div>

         <div className="cartItem d-flex align-center" >
            <div
            style={{backgroundImage: 'url(img/sneakers/2.jpg)' }}
            className="cartItemImg"></div>

           <div className="mr-20 flex">
             <p className="mb-5">Nike Blazer Mid Suede</p>
             <b>12 999 lei.</b>
           </div>
           <img className="removeBtn" src="/img/btnremovee.svg" alt="Remove"/>
         </div>
            </div>
                 <div className="cartTotalBlock">
                <ul>
                 <li>
                  <span>Total:</span>
                   <div> </div>
                   <b>21 403 lei. </b>
                  </li>
                   <li>
                   <span>Impozite 5%:</span>
                   <div></div>
                  <b>1074 lei. </b>
                 </li>
                </ul>
                 <button className="greenButton"> 
                 Aproba Cumparatura <img src="/img/arrow1.svg" alt="Arrow"/> 
                </button>
             </div>
           </div>
      
    );  
}

export default Drawer;