const API_BASE_URL = 'http://localhost:3001'; // Or your API URL

export const fetchProducts = async (accessToken) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("fetch product error", error)
    throw error;
  }
};