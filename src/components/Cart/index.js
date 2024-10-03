import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }

      const getOrderTotal = () => {
        const orderTotal = cartList.reduce((total, Item) => {
          return total + Item.price * Item.quantity
        }, 0)
        return orderTotal
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  onClick={onClickRemoveAll}
                  className="remove-all-button"
                >
                  Remove All
                </button>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
                <div className="summary-container">
                  <h1>
                    Order Total:{' '}
                    <span className="amount">Rs {getOrderTotal()}/-</span>
                  </h1>
                  <p>{cartList.length} items in cart</p>
                  <button type="button" className="checkout-button">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
