import React from 'react';
import Image from 'next/image';
import { Order } from '@/types/types';
import { useCartContext } from '@/context/CartContext';
import { useVisibleContext } from '@/context/isVisibleContext';

export const CheckoutDetails = () => {
  const { setIsCheckoutVisible, setIsVisible } = useVisibleContext();
  const { cart, setCart, totalPrice, setIsCartVisible } = useCartContext();
  const [successMsg, setSuccessMsg] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(5);

  React.useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        if (count > 1) {
          setCount(count - 1);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  });

  React.useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => {
        setSuccessMsg(false);
        setCart([]);
        setIsCheckoutVisible(false);
        setIsCartVisible(false);
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successMsg]);

  return (
    <div>
      {successMsg ? (
        <div className='z-50 flex h-[100vh] flex-col items-center justify-center px-6 lg:h-[600px]'>
          <h2 className='text-center text-2xl font-semibold'>
            Thank you ! The order has been placed !
          </h2>
          <Image
            src={'/success-1.gif'}
            width={150}
            height={150}
            alt='success message'
          />
          <div>
            This window will close in <span>{count}</span> seconds
          </div>
        </div>
      ) : (
        <div className='h-100vh z-30 lg:h-full lg:gap-x-8 lg:px-12 lg:py-8'>
          <h2 className='mb-6 pt-6 text-center text-[20px] font-extrabold uppercase lg:pt-0 lg:text-left'>
            Shipping & Checkout
          </h2>
          <div className='lg-py-0 flex h-[86vh] flex-col overflow-scroll px-8 py-4 lg:h-[29.5rem] lg:flex-row lg:gap-x-4 lg:overflow-visible lg:px-0'>
            <div className='h-full flex-1 overflow-y-auto px-8 py-4 lg:overflow-visible lg:px-0 lg:py-0'>
              <div className='flex h-full flex-col gap-4'>
                <div className='flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4'>
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='First Name'
                  />
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Last Name'
                  />
                </div>
                <div className='flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4'>
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Phone'
                  />
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Email Address'
                  />
                </div>
                <div className='flex flex-col justify-between gap-4 lg:flex-row lg:gap-0 lg:gap-x-4'>
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Street Name'
                  />
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Street No.'
                  />
                </div>
                <div className='flex justify-between gap-x-4'>
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Block'
                  />
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Floor'
                  />
                  <input
                    type='text'
                    className='input w-full'
                    placeholder='Apt. No.'
                  />
                </div>
                <div className='h-full flex-1 '>
                  <textarea
                    className='textarea h-full w-full'
                    placeholder='Mentions (optional)'
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='flex h-full flex-1 flex-col justify-between px-8 pt-3 lg:max-w-[40%] lg:p-0'>
              <div className='mb-4 flex h-[30.2vh] flex-col rounded-lg border p-4'>
                <h3 className='mb-4 border-b pb-4 text-base font-extrabold uppercase'>
                  Your order
                </h3>
                <div className='scrollbar-track-white-500 flex h-[240px] flex-col gap-y-4 overflow-hidden overflow-y-scroll py-2 font-semibold scrollbar-thin scrollbar-thumb-gray-200 '>
                  {cart.map((pizza: Order, index: number) => {
                    return (
                      <div
                        key={index}
                        className='flex justify-between text-[15px]'
                      >
                        <div className='flex gap-x-2'>
                          <div className='capitalize'>{pizza.name}</div>
                          <div>
                            {pizza.quantity > 1 && `x ${pizza.quantity}`}
                          </div>
                        </div>
                        <div>${(pizza.price * pizza.quantity).toFixed(2)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                className='btn btn-lg gradient w-full'
                onClick={() => setSuccessMsg(true)}
              >
                Pay ${totalPrice.toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};