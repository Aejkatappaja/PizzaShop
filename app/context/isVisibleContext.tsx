"use client";

import { PizzaType } from "@/types/types";
import React from "react";

interface VisibleContextType {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  clickedPizza: PizzaType;
  setClickedPizza: (pizza: PizzaType) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const useVisibleContext = () => React.useContext(VisibleContext);

export const VisibleContext = React.createContext<VisibleContextType>({
  isVisible: false,
  setIsVisible: () => {},
  clickedPizza: {
    id: 0,
    name: "",
    description: "",
    priceLg: 0,
    priceMd: 0,
    priceSm: 0,
    image: "",
    toppings: [],
  },
  setClickedPizza: () => {},
});

export const VisibleContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [clickedPizza, setClickedPizza] = React.useState<PizzaType>({
    id: 0,
    name: "",
    description: "",
    priceLg: 0,
    priceMd: 0,
    priceSm: 0,
    image: "",
    toppings: [],
  });

  const contextValue: VisibleContextType = {
    isVisible,
    setIsVisible,
    clickedPizza,
    setClickedPizza,
  };

  return (
    <VisibleContext.Provider value={contextValue}>
      {children}
    </VisibleContext.Provider>
  );
};
