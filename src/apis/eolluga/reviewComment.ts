import eolluga from "../network";

export interface ReviewCommentPostParams {
  content: string;
}

export async function postReviewComment(
  storeId: string,
  reviewId: string,
  params: ReviewCommentPostParams,
): Promise<void> {
  await eolluga.post(
    `/stores/${storeId}/reviews/${reviewId}/review-comments`,
    params,
  );
}
