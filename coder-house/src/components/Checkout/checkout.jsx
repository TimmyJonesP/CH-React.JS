import React, { useContext, useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { CartContext } from '../../utilitys/context';
import CartItem from '../Cart/CartList';
import { Success } from './Success';
import { Link } from 'react-router-dom';

export const Checkout = () => {
    const { cart, clear, cartTotal, cartSuma } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
            const buyer = { name: nombre, email: email, phone: telefono };
            const items = [];
            cart.forEach(item => {
                items.push({ id: item.id, title: item.nombre, price: item.precio, quantity: item.count });
            });

            const date = new Date();
            const now = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();

            const order = { buyer: buyer, items: items, date: now, total: cartSuma() };
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
            addDoc(orderCollection, order).then(({ id }) => {
                setOrderId(id);
                clear();
            });
        }
    }
    return (

        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            {cartTotal() > 0 ?
                <div>
                    <form>
                        <div className="mb-6">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Óscar Diaz" onInput={(e) => setNombre(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                            <input type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='oscardiaz@gmail.com' onInput={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label for="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teléfono</label>
                            <input type="number" id="telephone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='111222333444' onInput={(e) => setTelefono(e.target.value)} required />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 justify-center">Estoy de acuerdo con los <p className='text-blue-600 hover:underline dark:text-blue-500'>términos y cóndiciones</p></label>
                        </div>
                    </form>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                    <tr>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Nombre</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Cantidad</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-left">Precio</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Eliminar</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                    {cart.map((producto) => (
                                        <CartItem key={producto.id} producto={producto} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center font-big text-green-500">${cartSuma()}</div>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { sendOrder() }}>Enviar pedido!</button>
                </div>
                : orderId !== "" ? <Success id={orderId} /> : <Link to="/"><div className='p-5 m-5 text-xl color-red'>No se han encontrado productos en su carrito! Clickee aquí para volver al catálogo</div></Link>}
        </div>
    )
}