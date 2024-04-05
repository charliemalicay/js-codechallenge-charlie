import * as React from 'react';
import {CountryValueTypes} from "../country/CountrySelect";


// Props Types
interface SettingsButtonProps {
    // handleOpenModal?: React.MouseEventHandler<HTMLButtonElement> | undefined
    // country: CountryValueTypes
    // currency: string
    // language: string
    currentCount: number
}

// const SettingsButton = ({handleOpenModal, country, currency, language, currentCount}: SettingsButtonProps) => {
const SettingsButton = ({ currentCount }: SettingsButtonProps) => {
    // Increase render count.
    currentCount++;

    // Log current render count.
    console.log("Render count of button is: " + currentCount);

    // return (
    //     <button onClick={handleOpenModal}>
    //         {country.name} - ({currency} - {language})
    //     </button>
    // )

    return (
        <button >
            Test
        </button>
    )
}

export default SettingsButton;
