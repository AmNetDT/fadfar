import { getOrderById } from "@/lib/actions/order.actions";
import { APP_NAME } from "@/lib/constants";
import { notFound } from "next/navigation";
import { auth } from "@/auth";

export const metadata = {
  title: `Order Details - ${APP_NAME}`,
};

const OrderDetailsPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const session = await auth();
  const order = await getOrderById(id);
  if (!order) notFound();

  order.user;
};

export default OrderDetailsPage;
