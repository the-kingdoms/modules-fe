import eolluga from "../network";

export interface OrderDetailResponse {
  orderDetailId: string;
  orderId: string;
  menuId: string;
  menuDetail: string;
  createdDate: string;
  modifiedDate: string;
  price: number;
  quantity: number;
}

export interface OrderDetailPostParams {
  orderId: string;
  menuId: string;
  menuDetail: string;
  price: number;
  quantity: number;
}

export async function getOrderDetail(
  orderId: string,
): Promise<OrderDetailResponse[]> {
  const { data } = await eolluga.get(`/order-details/${orderId}`);
  return data;
}

export async function postOrderDetail(
  orderId: string,
  params: OrderDetailPostParams,
): Promise<string> {
  const { data } = await eolluga.post(`/order-details/${orderId}`, params);
  return data.orderDetail;
}
