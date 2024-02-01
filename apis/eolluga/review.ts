import eolluga from "@modules/apis/network";

export interface ReviewResponse {
  reviewId: string;
  memId: number;
  storeId: string;
  content: string;
  createdDate: string;
  modifiedDate: string;
  image: string;
  rating: number;
}

export interface ReviewPostParams {
  userId: number;
  storeId: string;
  content: string;
  image: string;
  rating: number;
}

export interface ReviewPutParams {
  content: string;
  image: string;
  rating: number;
}

export async function getReviewListFromStore(
  storeId: string,
): Promise<ReviewResponse[]> {
  const { data } = await eolluga.get(`/stores/${storeId}/reviews`);
  return data.reviews;
}

export async function getReviewListFromMember(
  memberId: string,
): Promise<ReviewResponse[]> {
  const { data } = await eolluga.get(`/members/${memberId}/reviews`);
  return data.reviews;
}

export async function getReview(
  storeId: string,
  reviewId: string,
): Promise<ReviewResponse> {
  const { data } = await eolluga.get(`/stores/${storeId}/reviews/${reviewId}`);
  return data;
}

export async function postReview(
  storeId: string,
  params: ReviewPostParams,
): Promise<string> {
  const { data } = await eolluga.post(`/stores/${storeId}/reviews`, params);
  return data.reviewId;
}

export async function putReview(
  storeId: string,
  reviewId: string,
  params: ReviewPutParams,
): Promise<void> {
  await eolluga.put(`/stores/${storeId}/reviews/${reviewId}`, params);
}

export async function deleteReview(
  storeId: string,
  reviewId: string,
): Promise<void> {
  await eolluga.delete(`/stores/${storeId}/reviews/${reviewId}`);
}
