import React from "react";

export const FormContext = React.createContext();

export const FormStorage = ({ children }) => {
  const [personalInfo, setPersonalInfo] = React.useState({});
  const [selectedPlan, setSelectedPlan] = React.useState('arcade');
  const [period, setPeriod] = React.useState("monthly");
  const [addOns, setAddOns] = React.useState([]);

  return (
    <FormContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        selectedPlan,
        setSelectedPlan,
        period,
        setPeriod,
        addOns,
        setAddOns
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
