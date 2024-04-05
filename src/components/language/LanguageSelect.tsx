import ISO_6391_Languages from "iso-639-1";

import Select from "react-select";
import {AppSettingsTypes} from "../settings/SettingsSelector";
import {CountryValueTypes} from "../country/CountrySelect";

// Props
interface LanguageSelectProps {
  language?: string;
  onChange?: (language: (prevState: AppSettingsTypes) => { country: CountryValueTypes; currency: string; language: any }) => void;
}

// Constants
export const DEFAULT_LANGUAGE = "English - English";

// Component
const LanguageSelect = ({
  language = DEFAULT_LANGUAGE,
  onChange,
}: LanguageSelectProps) => {
  // Prepare data
  const data = ISO_6391_Languages.getLanguages([
    "en",
    "de",
    "pl",
    "fr",
    "it",
    "es",
  ]).map(({ name, nativeName }) => {
    return {
      value: name + " - " + nativeName,
      label: name + " - " + nativeName,
    };
  });
  const defaultValue = { value: language, label: language };

  // Render
  return (
    <div className="modal-select">
      <label>
        <p>Language</p>
        <Select
            options={data}
            defaultValue={defaultValue}
            onChange={(newValue: any) => {
              if (onChange) onChange(
                (prevState: AppSettingsTypes) => (
                    {...prevState, language: newValue!.value}
                  ));
          }}
        />
      </label>
    </div>
  );
};

export default LanguageSelect;
