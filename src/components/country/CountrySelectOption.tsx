
import * as React from 'react';
import { OptionProps, components } from "react-select";

/* --- [TASK] ---
Country flags in select field

CURRENT SCENARIO
- The `CountrySelect` displays only the names of the countries.

DESIRED SCENARIO
- The `CountrySelect` displays the corresponding country flag next to the title.
- Flags are visible in both the options and the input field, drawing inspiration from this example:

FURTHER DETAILS
- No expectation to alter the dimensions of the select field, though it's optional.
- Implement a well-considered layout strategy.
- Retrieve flag icons from:
    `https://catamphetamine.gitlab.io/country-flag-icons/3x2/<ISO_CODE>.svg` (codes are in uppercase)
- Note that the `'i18n-iso-countries'` package in use already contains the compatible codes.
- Flags appearing on the `SettingsSelector`-Button is optional
--- [TASK] --- */

// Component
export const CountrySelectOption = (props: OptionProps<any>) => {
    return (
        <div>
            <components.Option {...props}>
                <div className="select-option">
                    <img src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${props.data.value.code}.svg`}
                         height="30" width="30" alt="country-icon"/>
                    <p>{props.data.label}</p>
                </div>
            </components.Option>
        </div>
    );
};
