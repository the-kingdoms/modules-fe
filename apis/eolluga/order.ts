import eolluga from "@modules/apis/network";

export interface OrderResponse {
  orderId: string;
  memberId: number;
  paymentId: number;
  status: string;
  createDate: string;
  modifiedDate: string;
  totalPrice: number;
}

export interface OrderPostParams {
  memberId: string;
  paymentId: string;
  totalprice: number;
}

export async function getOrder(): Promise<OrderResponse> {
  const { data } = await eolluga.get("/orders");
  return data;
}

export async function postOrder(params: OrderPostParams): Promise<string> {
  const { data } = await eolluga.post("/orders", params);
  return data.order;
}
