import countries from "i18n-iso-countries";
import Select from "react-select";
import { CountrySelectOption } from "./CountrySelectOption";
import {AppSettingsTypes} from "../settings/SettingsSelector";

// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

// Props
export interface CountryValueTypes {
  name: string
  code: string
}

interface CountryOptionsTypes {
  value: CountryValueTypes
  label: string
}

interface CountrySelectProps {
  value?: any;
  onChange?: (value: (prevState: AppSettingsTypes) => { country: any; currency: string; language: string }) => void;
}

// Constants
export const DEFAULT_COUNTRY = {
  code: "US",
  name: "United States of America",
};

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {
  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });

  const defaultValue = { value: value, label: value.name };

  // Render
  return (
    <div className="modal-select">
      <label>
        <p>Country</p>
        <Select
          options={data}
          components={{ Option: CountrySelectOption }}
          defaultValue={defaultValue}
          onChange={(newValue: any) => {
            if (onChange) onChange((prevState: AppSettingsTypes) => ({
              ...prevState, country: newValue!.value}))
          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
