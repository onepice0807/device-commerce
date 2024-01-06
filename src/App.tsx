import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  OrderPage,
  CartPage,
  CategoryPage,
  CheckoutPage,
  HomePage,
  ProductsPage,
  Root,
  ErrorPage,
  AuthPage,
} from "@/pages";
import { ThemeProvider } from "@/lib/theme-provider";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "category", element: <CategoryPage /> },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "order", element: <OrderPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "cart", element: <CartPage /> },
      ],
    },
    { path: "/auth", element: <AuthPage /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
