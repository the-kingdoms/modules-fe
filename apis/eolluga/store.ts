import eolluga from "@modules/apis/network";

export interface StoreResponse {
  storeId: string;
  name: string;
  image: string;
  phone: string;
  operatingTime: string;
  address: string;
  reviewCount: number;
  reviewRating: number;
}

export interface StorePostParams {
  name: string;
  content: string;
  image: string;
  phone: string;
  operaratingTime: string;
  url: string;
  address: string;
  paymentType: string;
}

export async function getStoreList(): Promise<StoreResponse[]> {
  const { data } = await eolluga.get("/stores");
  return data.data;
}

export async function getStore(storeId: string): Promise<StoreResponse> {
  const { data } = await eolluga.get(`/stores/${storeId}`);
  return data;
}

export async function postStore(params: StorePostParams): Promise<void> {
  await eolluga.post("/stores", params);
}

export async function putStore(
  storeId: string,
  params: StorePostParams,
): Promise<void> {
  await eolluga.put(`/stores/${storeId}`, params);
}
