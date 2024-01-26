import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import ErrorPage from "./ErrorPage"
import WelcomeView from "./components/WelcomeView";
import MenuView from "./components/MenuView";
import { useOrderContext } from "./hooks/useOrderContext";
import BeerDetailsView from "./components/BeerDetailsView";
import OrderView from "./components/OrderView";

export default function AppRouter() {
  // const context = useOrderContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />}>
          <Route index element={<WelcomeView onStartOrder={startOrder} />} />
          <Route path="menu" element={<MenuView />} />
          <Route path="beer/:beerId" element={<BeerDetailsView />} />
          <Route path="tab" element={<OrderView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  function startOrder(table: string, orderName: string): void {
    // context.table = table;
    // context.orderName = orderName;
  }
}