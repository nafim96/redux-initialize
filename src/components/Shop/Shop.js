import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../Redux/actionCreator/actionCreator';


const Shop = () =>
{
    const balanced = useSelector( state => state.amount );
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators( actionCreator, dispatch );
    return (
        <div className="container">
            <h1>Shop Your Choice</h1>
            <div className="container">
                <button onClick={ () => withdrawMoney( 90 ) } className="hover:text-yellow-300 font-bold text-2xl bg-yellow-600 w-10">-</button> Update Balance : { balanced } <button
                    onClick={ () => depositMoney( 100 ) } className="hover:text-yellow-300 font-bold text-2xl bg-yellow-600 w-10">+</button>
            </div>
        </div>
    );
};

export default Shop;
