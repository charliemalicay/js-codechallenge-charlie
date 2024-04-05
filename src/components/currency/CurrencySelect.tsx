import CurrencyData from "currency-codes/data";
import Select from "react-select";
import {useEffect} from "react";

// Props
interface SetCurrencyDataTypes {
  code: string
  currency: string
}

interface CurrencySelectProps {
  value?: string;
  onChange?: (currency: string) => void;
}

// Constants
export const DEFAULT_CURRENCY = "USD - US Dollar";

// Component
const CurrencySelect = ({
  value = DEFAULT_CURRENCY,
  onChange,
}: CurrencySelectProps) => {
  // Prepare data
  const data = CurrencyData.map(( {code, currency}: SetCurrencyDataTypes ) => {
    return {
      value: code + " - " + currency,
      label: code + " - " + currency,
    };
  });

  const defaultValue = { value: value, label: value };

  useEffect(() => {
    console.log("CurrencyData:", CurrencyData);
  }, []);

  // Render
  return (
    <div>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue: any) => {
            if (onChange) onChange(newValue!.value);
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
