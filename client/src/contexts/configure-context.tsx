import { createContext, ReactNode, useState } from "react";
import { ConfigurationType } from "../types/configuration-types";

export const ConfigureContext = createContext({
  type: ConfigurationType.TABLES,
  setType: (value: ConfigurationType) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function ConfigureContextProvider({ children }: ProviderProps) {
  const [type, setType] = useState<ConfigurationType>(ConfigurationType.TABLES);

  return (
    <ConfigureContext.Provider value={{ type, setType }}>
      {children}
    </ConfigureContext.Provider>
  );
}
