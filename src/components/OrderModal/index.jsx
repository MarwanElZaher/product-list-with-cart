import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import { hideModal } from '../../redux/actions/modalActions';
import { ReactSVG } from 'react-svg';
import CartProductDetail from '../CartProductDetail';
import "./style.css"
import ReusableButton from '../ReusableButton';
import { clearCart } from '../../redux/actions/cartActions';


const OrderModal = () => {
    const dispatch = useDispatch();
    
    const { isModalOpen, orderDetails } = useSelector(state => state.modal);
    
    const handleClose = () => {
        dispatch(hideModal());
    };
    
    const handleStartingNewOrder = () => {
        handleClose();
        dispatch(clearCart());  
    }


    return (
        <Modal isOpen={isModalOpen} onClose={handleClose} orderDetails={orderDetails}>
            {orderDetails && (
                <div className='checkout-modal'>
                    <ReactSVG src='/assets/images/icon-order-confirmed.svg' alt="icon-order-confirmed" />
                    <h2>Order Confirmed</h2>
                    <p>We hope you enjoyed your food!</p>
                    <div className='product-details-modal'>
                        <CartProductDetail priceMap={orderDetails?.priceMap} cartItems={orderDetails?.cartItems} totalPrice={orderDetails?.totalPrice} showProductImage={true} showPriceLarge={true} />        
                    </div>
                    <ReusableButton className="submit-order" label="Submit Order" onClick={handleStartingNewOrder}/>
                </div>
            )}
        </Modal>
  );
};

export default OrderModal;
