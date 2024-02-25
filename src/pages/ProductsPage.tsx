import { useEffect } from "react";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

const ProductsPage = () => {
  const router = useNavigate();
  const { user } = useRouteLoaderData("root");

  useEffect(() => {
    if (!user) {
      router("/auth");
    }
  }, [user]);

  return <div>ProductsPage</div>;
};

export default ProductsPage;
