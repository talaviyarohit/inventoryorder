import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../../configfirebase";


const viewProducts = (viewPro)=>{
    return{
        type: 'VIEWPRODUCTS',
        payload : viewPro
    }
}


const productsinfo =(proInfo) =>{
    return{
        type: 'PRODUCTINFO',
        payload : proInfo
    }
}

export const addToCart = (pro) => ({
    type: 'ADD_TO_CART',
    payload: pro,
});

export const removeFromCart = (proId) => ({
    type: 'REMOVE_FROM_CART',
    payload: proId,
});

const Showoredr =(orderSucdata) =>{
    console.log("showOrder",orderSucdata);
    return{
        type : 'ORDERSUCDATA',
        payload : orderSucdata
    }
}


export const getProductsAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'));
            let proData = [];

            querySnapshot.forEach((doc) => {
                proData = [...proData, doc.data()];
            });

            dispatch(viewProducts(proData));
        } catch (err) {
            console.log("Error fetching documents: ", err);
        }
    };
};

export const productInfoAsync = (info) => {
    return async (dispatch) => {
        try {
            dispatch(productsinfo(info))
            console.log("action id", info);
        } catch (err) {
            console.log("error", err);
        }
    }
}

export const addUserOrderAsync =(userOrder) =>{
    console.log("userOrder",userOrder);
    
    return async (dispatch) => {
        try{
            await setDoc(doc(db, 'UserOrder', `${userOrder.id}`), userOrder);
        }catch(err){
            console.log("can not gat data",err);
            
        }
    }
}


export const oredrShowAsync = (showOrder) => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, 'UserOrder'));

            let foundOrder = null
            querySnapshot.forEach((doc) => {

                if (doc.id === showOrder) {
                    foundOrder = { id: doc.id, ...doc.data() };
                }
            });
            dispatch(Showoredr(foundOrder))

        } catch (err) {
            console.error(err);
        }
    }
}

