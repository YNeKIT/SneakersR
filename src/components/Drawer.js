function Drawer({onClose, items = []}) {
    return (

      <div className="overlay"> 
       <div  className="drawer">   
         <h2 className="d-flex justify-between mb-30">
             Bag {' '}
              <img onClick={onClose} className="cu-p " src="/img/btnremovee.svg" alt="Close"/>
             </h2>

              <div className="items">
                {items.map((obj) => (
        <div className="cartItem d-flex align-center mb-20 " >
         <div 
           style={{backgroundImage: `url(${obj.imageUrl})` }}
            className="cartItemImg"></div>

           <div className="mr-20 flex ">
             <p className="mb-5">{obj.title}</p>
             <b>{obj.price} lei.</b>
           </div>
           <img className="removeBtn" src="/img/btnremovee.svg" alt="Remove"/>
         </div>
         ))}
         
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
           </div>
    );  
}

export default Drawer;