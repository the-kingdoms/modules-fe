import eolluga from "../network";

export interface MenuOptionResponse {
  menuOptionId: number;
  menuId: number;
  name: string;
  content: string;
  price: number;
  createdDate: string;
  modifiedDate: string;
}

export interface MenuOptionPostParams {
  menuId: number;
  name: string;
  content: string;
  price: number;
}

export async function getMenuOption(
  menuId: string,
  menuOptionId: string,
): Promise<MenuOptionResponse> {
  const { data } = await eolluga.get(
    `/menus/${menuId}/menu-options/${menuOptionId}`,
  );
  return data;
}

export async function postMenuOption(
  menuId: string,
  params: MenuOptionPostParams,
): Promise<void> {
  await eolluga.post(`/menus/${menuId}/menu-options`, params);
}

export async function putMenuOption(
  menuId: string,
  menuOptionId: string,
  params: MenuOptionPostParams,
): Promise<void> {
  await eolluga.put(`/menus/${menuId}/menu-options/${menuOptionId}`, params);
}

export async function deleteMenuOption(
  menuId: string,
  menuOptionId: string,
): Promise<void> {
  await eolluga.delete(`/menus/${menuId}/menu-options/${menuOptionId}`);
}
