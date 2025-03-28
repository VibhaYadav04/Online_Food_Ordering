import {api} from '../../config/api'
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from './ActionType';

export const updateOrderStatus = ({orderId, orderStatus, jwt})=>{
    return async (dispatch) => {
        dispatch({type:{UPDATE_ORDER_STATUS_REQUEST}});
         try {
            const response = await api.put(`/api/admin/order//${orderId}/${orderStatus}`,{},{
                headers : {
                    Authorization : `Bearer ${jwt}`,
                },
            });
            const updateOrder = response.data;
            console.log("update order status ", updateOrder);
            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS, payload:updateOrder});
        } catch (error){
            console.log("error", error);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE, payload:error});
        }
    }
}

export const fetchRestaurantOrder = ({restaurantId, orderStatus, jwt})=>{
    return async (dispatch) => {
        dispatch({type:{GET_RESTAURANTS_ORDER_REQUEST}});
         try {
            const {data} = await api.get(`/api/admin/order/restaurant/${orderStatus}`,{
                params: {order_status:orderStatus}
                headers : {
                    Authorization : `Bearer ${jwt}`,
                },
            });
            const orders = data;
            console.log("restaurant order ", orders);
            dispatch({type:GET_RESTAURANTS_ORDER_SUCCESS, orders});
        } catch (error){
            console.log("error", error);
            dispatch({type:GET_RESTAURANTS_ORDER_FAILURE, payload:error});
        }
    }
}

