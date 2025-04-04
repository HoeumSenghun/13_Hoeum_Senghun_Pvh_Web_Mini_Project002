const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export async function apiRequest(
  endpoint,
  method = "GET",
  body = null,
  token = "",
  fetchOptions = {}
) {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = {
    method,
    headers,
    ...fetchOptions,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  const data = await response.json();
  return data;
}
