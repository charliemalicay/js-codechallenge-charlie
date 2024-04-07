import * as React from 'react';
import {CountryValueTypes} from "../country/CountrySelect";


// Props Types
interface SettingsButtonProps {
    handleOpenModal?: React.MouseEventHandler<HTMLButtonElement>
    country: CountryValueTypes
    currency: string
    language: string
    currentCount: number
}

const SettingsButton = ({handleOpenModal, country, currency, language, currentCount}: SettingsButtonProps) => {
    // Increase render count.
    currentCount++;

    // Log current render count.
    console.log("Render count of button is: " + currentCount);

    return (
        <button className="settings-button" onClick={handleOpenModal}>
            <img src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${country.code}.svg`}
                 height="30" width="30" alt="country-icon" className="select-control-img"/>
            {country.name} - ({currency} - {language})
        </button>
    )
}

export default SettingsButton;
