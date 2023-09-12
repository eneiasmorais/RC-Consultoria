export interface IPageProviderProps {
  children: React.ReactNode;
}

export interface AuthPageContextType {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  companyRef: React.MutableRefObject<HTMLDivElement | null>;
  servicesRef: React.MutableRefObject<HTMLDivElement | null>;
  clientsRef: React.MutableRefObject<HTMLDivElement | null>;
  contactRef: React.MutableRefObject<HTMLDivElement | null>;
  whyHireRef: React.MutableRefObject<HTMLDivElement | null>;
  whoAreWeRef: React.MutableRefObject<HTMLDivElement | null>;
  expertisesRef: React.MutableRefObject<HTMLDivElement | null>;
  differentialsRef: React.MutableRefObject<HTMLDivElement | null>;
}
