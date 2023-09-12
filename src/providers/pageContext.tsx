import { MutableRefObject, createContext, useRef, useState } from "react";
import {
  AuthPageContextType,
  IPageProviderProps,
} from "../interfaces/interfacePage";

const defaultAuthPageContext: AuthPageContextType = {
  isVisible: true,
  setIsVisible: () => {}, // A função vazia aqui é apenas um valor de exemplo
  companyRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina areasRef com null
  servicesRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina contactRef com null
  clientsRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina clientsRef com null
  contactRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina contactRef com null
  whoAreWeRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina contactRef com null
  whyHireRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina contactRef com null
  expertisesRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina contactRef com null
  differentialsRef: null as unknown as MutableRefObject<HTMLDivElement | null>, // Defina contactRef com null
};

export const AuthPageContext = createContext<AuthPageContextType>(
  defaultAuthPageContext
);

export const AuthPageProvider = ({ children }: IPageProviderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const companyRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const whyHireRef = useRef<HTMLDivElement | null>(null);
  const whoAreWeRef = useRef<HTMLDivElement | null>(null);
  const expertisesRef = useRef<HTMLDivElement | null>(null);
  const differentialsRef = useRef<HTMLDivElement | null>(null);

  return (
    <AuthPageContext.Provider
      value={{
        isVisible,
        setIsVisible,
        companyRef,
        clientsRef,
        contactRef,
        servicesRef,
        whyHireRef,
        whoAreWeRef,
        differentialsRef,
        expertisesRef,
      }}
    >
      {children}
    </AuthPageContext.Provider>
  );
};
