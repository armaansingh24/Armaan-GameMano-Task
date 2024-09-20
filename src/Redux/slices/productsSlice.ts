import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import exp from "constants";

interface Review {
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  dimensions: Object;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
  sku: string;
}

interface Category {
  slug: string;
  name: string;
  url: string;
}

interface ProductsState {
  products: Product[];
  categories: Category[];
  productDetails: Product | null;
  isLoading: boolean;
  error: string | null;
  total: number;
}

const initialState: ProductsState = {
  products: [],
  categories: [],
  productDetails: null,
  isLoading: false,
  error: null,
  total: 0,
};

// Async Thunks
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (skip: number = 0) => {
    console.log(skip);
    const response = await axios.get(
      `https://dummyjson.com/products?skip=${skip}&limit=30`
    );
    return response.data;
  }
);


export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: number) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (categories: string[]) => {
    // Create an array of promises for each category
    const requests = categories.map((category) => axios.get(`${category}`));

    // Wait for all promises to resolve
    const responses = await Promise.all(requests);

    // Combine all products from each category into a single array
    const allProducts = responses.flatMap((response) => response.data.products);

    return { products: allProducts };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    emptyProduct: (state) => {
      state.products = [];
      state.total = 0; // Reset total if needed
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        // Filter out duplicates based on product ID
        const newProducts = action.payload.products.filter(
          (product: Product) => !state.products.some((p) => p.id === product.id)
        );
        state.products = [...state.products, ...newProducts];
        state.total = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch products";
      })
      // Fetch Products by Category
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || "Failed to fetch products by category";
      })
      // Fetch Product by ID
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch product details";
      })
      // Fetch Categories
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});

export const { emptyProduct } = productsSlice.actions;
export default productsSlice.reducer;
