// import { use, useState } from "react";
// import Cart from "../Cart/page";
// import Navbar from "@/components/Navbar";
// import { Component } from "lucide-react";
// import Footer from "@/components/Footer";
// import { it } from "node:test";
// import { useEffect } from "react";


// interface CartFunctionProps {
//     components: any;
//     pageProps: any;
// }

// function CartFunction ({components, pageProps}: CartFunctionProps) {
//     const [cart, setCart] = useState({})
//     const [total, setTotal] = useState(0)
//     useEffect(() => {
//         console.log("Hey i am useEffect from ")
//         try {
//             if(localStorage.getItem("Cart")){
//                 setCart(JSON.parse(localStorage.getItem("Cart")))
    
//             }

//         } catch (error) {
//             console.error(error);
//             localStorage.clear()
            

//         }
        
        
       
//     }, [])

        
        


//     const saveCart = (cart) => {
//         localStorage.setItem('cart', myCart)
//         let subt=0;
//         let keys =
//         for(let i=0; object.keys.length; i ++) {
//             subt += myCart [keys[i]].price * myCart[keys[i]].qty;
//         }
//         setSubTotal(subt)
//     }
//     const addTocart = (itemCode, qty, price,name,size,varien: string) => {
//         let myCart = cart;
//         if(itemCode in Cart){
//             newCart[itemCode].qty = cart[itemCode].qty + qty;
//         }
//         else{
//             newCart[itemCode] = {qty: 1, price,name,size,varien};
//         }
//         setCart(newCart)
//         saveCart(newCart)
//     }
//     const clearCart = () => {
//         setCart({})
//         saveCart({})
//     }
//     const removeFromCart = (itemCode, qty, price,name,size,varien) => {
//         let newCart = cart;
//        if(itemCode in Cart){
//         newCart[itemCode].qty = cart[itemCode].qty - qty;
//        }
//     }
//     if(newCart["qty"] <= 0){
//         delete newCart[itemCode]
//     }
   
//         setCart(newCart)
//         saveCart(newCart)
//     }
//     return <>
//     <Navbar cart={cart} addToCart= {addToCart } removeFromCart={removeFromCart} clearCart={clearCart} />
//     <Component  cart={cart} addToCart= {addToCart } removeFromCart={removeFromCart} clearCart={clearCart}{...pageProps} />
//     <Footer />
//     </>
// }



//     export default CartFunction;

// import { useState, useEffect } from "react";
// import Cart from "../Cart/page";
// import Navbar from "@/components/Navbar";
// import { Component } from "lucide-react";
// import Footer from "@/components/Footer";

// interface CartFunctionProps {
//     components: any;
//     pageProps: any;
// }

// function CartFunction({ components, pageProps }: CartFunctionProps) {
//     const [cart, setCart] = useState<{ [key: string]: { qty: number; price: number; name: string; size: string; varien: string } }>({});
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         console.log("Hey, I am useEffect from CartFunction");
//         try {
//             const storedCart = localStorage.getItem("Cart");
//             if (storedCart) {
//                 setCart(JSON.parse(storedCart));
//             }
//         } catch (error) {
//             console.error(error);
//             localStorage.clear();
//         }
//     }, []);

//     const saveCart = (myCart: any) => {
//         localStorage.setItem('Cart', JSON.stringify(myCart));
//         let subt = 0;
//         const keys = Object.keys(myCart);
//         for (let i = 0; i < keys.length; i++) {
//             subt += myCart[keys[i]].price * myCart[keys[i]].qty;
//         }
//         setTotal(subt);
//     };

//     const addToCart = (itemCode: string, qty: number, price: number, name: string, size: string, varien: string) => {
//         const newCart = { ...cart };
//         if (itemCode in newCart) {
//             newCart[itemCode].qty += qty;
//         } else {
//             newCart[itemCode] = { qty, price, name, size, varien };
//         }
//         setCart(newCart);
//         saveCart(newCart);
//     };

//     const clearCart = () => {
//         setCart({});
//         saveCart({});
//     };

//     const removeFromCart = (itemCode: string, qty: number) => {
//         const newCart = { ...cart };
//         if (itemCode in newCart) {
//             newCart[itemCode].qty -= qty;
//             if (newCart[itemCode].qty <= 0) {
//                 delete newCart[itemCode];
//             }
//         }
//         setCart(newCart);
//         saveCart(newCart);
//     };

//     return (
//         <>
//             <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} />
//             <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} {...pageProps} />
//             <Footer />
//         </>
//     );
// }

// export default CartFunction;
