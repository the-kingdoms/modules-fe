import eolluga from "../network";

export interface MemberSigninParams {
  email: string;
  password: string;
}

export interface MemberSigninResponse {
  id: number;
  accessToken: string;
  refreshToken: string;
}

export interface MemberSignupParams {
  email: string;
  password: string;
  name: string;
}

export interface MemberSignupResponse {
  id: number;
}

export async function postMemberSignin(
  params: MemberSigninParams,
): Promise<MemberSigninResponse> {
  const { data } = await eolluga.post("/members/sign-in", params);
  return data;
}

export async function postMemberSignup(
  params: MemberSignupParams,
): Promise<MemberSignupResponse> {
  const { data } = await eolluga.post("/members/sign-up", params);
  return data;
}
