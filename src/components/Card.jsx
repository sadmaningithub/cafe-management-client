import { useEffect, useState } from "react";


const Card = () => {

  const [order, setOrder] = useState(coffeeData)

  const coffeeData = {
    _id: "123",
    itemName: "Chocolate Cold Coffee",
    prepTime: 300, // seconds
    startedAt: null,
    status: "idle"
  };

  useEffect(()=>{

  },[order.startedAt, order.prepTime])

  const handleOrder = () =>{
    console.log('order clicked');
    setOrder({
      ...order,
      startedAt: Date.now(),
      status: "Preparing"
    })
  }

  return (
    <div className="ml-10">

      <div className="max-w-md w-full flex flex-row gap-2 font-roboto shadow-sm rounded-xl">

        <div className="w-1/3">

          <img
            src="/img/coffee.jpg"
            className="rounded-l-xl"
            alt="coffee"
          />

        </div>

        <div className="flex flex-col justify-between p-2">

          <div>

            <h3 className="text-base font-bold">
              {coffeeData.itemName}
            </h3>

            <p className="text-xs text-gray-500">
              Order and have a great start of the day.
            </p>

          </div>

          <div className="flex flex-row items-center gap-2">

            <button onClick={handleOrder} className="px-4 py-2 text-white bg-amber-800 rounded-md">
              Order
            </button>

            <span>
              something here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
