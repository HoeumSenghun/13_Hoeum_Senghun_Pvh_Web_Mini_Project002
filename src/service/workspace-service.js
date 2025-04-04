export async function workspaceService() {
  const res = fetch(
    `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
    {
      headers: {
        accept: "*/*",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDM3NDI4ODksImV4cCI6MTc0MzgyOTI4OX0.4PFvvDbBxQ1vGpa5k9QTClkuJg1xDTrvNWFPDz58xIiUIncZ3rB_2S2OdL6spFMQxn-5NZQcqrQlx6IhPs5wNA",
      },
    }
  );
  const data = (await res).json()

  return data;
}


