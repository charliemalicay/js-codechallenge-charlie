import CurrencyData from "currency-codes/data";
import Select from "react-select";
import {AppSettingsTypes} from "../settings/SettingsSelector";
import {CountryValueTypes} from "../country/CountrySelect";

// Props
interface SetCurrencyDataTypes {
  code: string
  currency: string
}

interface CurrencySelectProps {
  value?: string;
  onChange?: (currency: (prevState: AppSettingsTypes) => { country: CountryValueTypes; currency: string; language: string }) => void;
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

  // Render
  return (
    <div className="modal-select">
      <label>
        <p>Currency</p>
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue: any) => {
            if (onChange) onChange(
                (prevState: AppSettingsTypes) => (
                    {...prevState, currency: newValue!.value}
                ));
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
