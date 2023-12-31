import { useCartStore } from "../libs/zustand/store";
import { ButtonLink } from "../components/button/ButtonLink";

function Checkout() {
  const items = useCartStore((state) => state.cartItems);
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const total = items?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!items?.length) return <div>Cart is empty</div>;

  const decreaseQuantity = (id: string) => {
    changeQuantity(id, -1);
  };

  const increaseQuantity = (id: string) => {
    changeQuantity(id, 1);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                {/* table header */}
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:px-6"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody className="divide-y divide-gray-200 bg-white">
                  {items?.map((item) => (
                    <tr key={item.cartId}>
                      <td className="whitespace-nowrap px-3 py-4 md:px-6">
                        <div className="flex items-center">
                          <div className="w-20 flex-shrink-0">
                            <img
                              className="h-20 w-20 rounded"
                              src={item.images[0]}
                              alt="product"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              size: {item.size}
                            </div>
                            <div className="text-sm text-gray-500">
                              ${item.price}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 md:px-6">
                        <div className="flex items-center justify-center">
                          <button
                            className="hover:bg-primary-hover h-8 w-6 bg-primary-light text-white focus:outline-none disabled:bg-gray-200 disabled:text-gray-500"
                            disabled={item.quantity === 1}
                            onClick={() =>
                              item.quantity > 1 && decreaseQuantity(item.cartId)
                            }
                          >
                            -
                          </button>
                          <span className="flex h-8 w-6 items-center px-2 font-semibold text-gray-700">
                            {item.quantity}
                          </span>
                          <button
                            className="hover:bg-primary-hover h-8 w-6 bg-primary text-white focus:outline-none"
                            onClick={() => increaseQuantity(item.cartId)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 md:px-6">
                        ${item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-3 py-4 md:px-6">
          <div className="flex items-center">
            <span className="text-gray-400">Total</span>
            <span className="ml-1 text-xl font-bold">${total}</span>
          </div>
          <ButtonLink to="/checkout" variant="primary" size="sm">
            Checkout
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
