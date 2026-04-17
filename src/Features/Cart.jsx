

function Cart ({ cart }){
    const total = cart.reduce((sum,item) => sum + item.price , 0);

 return(
    <div className="container">
        <h2 className="title">Cart</h2>

        {cart.map((item,index)=> (
            <p key ={index}>{item.name} - ${item.price}</p>
        ))}
        <h3 className="total">Total: ${total}</h3>
    </div>
    );
}

export default Cart;
