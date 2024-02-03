import eolluga from "../network";

export interface MenuResponse {
  menuId: number;
  storeId: number;
  ownerId: number;
  name: string;
  content: string;
  price: number;
  image: string;
  createdDate: string;
  modifiedDate: string;
  menuCategoryIds: string;
  optionType: string;
}

export interface MenuPostParams {
  name: string;
  introduction: string;
  price: number;
  menuImage: string;
  menuCategory: string;
}

export async function getMenu(
  storeId: string,
  menuId: string,
): Promise<MenuResponse> {
  const { data } = await eolluga.get(`/stores/${storeId}/menus/${menuId}`);
  return data;
}

export async function postMenu(
  storeId: string,
  params: MenuPostParams,
): Promise<void> {
  await eolluga.post(`/stores/${storeId}/menus`, params);
}

export async function putMenu(
  storeId: string,
  menuId: string,
  params: MenuPostParams,
): Promise<void> {
  await eolluga.put(`/stores/${storeId}/menus/${menuId}`, params);
}

export async function deleteMenu(
  storeId: string,
  menuId: string,
): Promise<void> {
  await eolluga.delete(`/stores/${storeId}/menus/${menuId}`);
}
