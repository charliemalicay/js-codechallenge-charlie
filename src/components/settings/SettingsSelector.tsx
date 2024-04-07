import React, { useRef } from "react";
import Modal from "react-modal";
import CountrySelect, {CountryValueTypes, DEFAULT_COUNTRY} from "../country/CountrySelect";
import LanguageSelect, { DEFAULT_LANGUAGE } from "../language/LanguageSelect";
import CurrencySelect, { DEFAULT_CURRENCY } from "../currency/CurrencySelect";
import SettingsButton from "../widgets/SettingsButton";

import '../../styles/main.css';
import '../../styles/select.css';

/* --- [TASK] ---
Changes on modal are only applied on SAVE

CURRENT SCENARIO
- Clicking the `SettingsSelector`-Button opens a modal dialog.
- Changes to any of the select inputs are immediately effective.
- The modal is dismissed using the **[Close]** button

DESIRED SCENARIO
- Clicking the `SettingsSelector`-Button opens a modal dialog.
- There is a **[Save]** and a **[Cancel]** button, both serving to dismiss the modal.
- Changes are taking effect only on **[Save]**

FURTHER DETAILS
- Positioning of the buttons within the modal is not in the scope of this task
--- [TASK] --- */

/* --- [TASK] ---
Reduced number of unnecessary re-renders

CURRENT SCENARIO
- The `SettingsSelector`-Button re-renders too often
- It re-renders every time the modal is opened, closed, or on changing the select inputs

DESIRED SCENARIO
- The `SettingsSelector`-Button only re-renders when relevant data changes (Country, Language, Currency)

FURTHER DETAILS
- The `SettingsSelector`-Button has a render counter that will log to the console (do not remove)
- Be aware that #1 changes some relevant behaviour for this task
--- [TASK] --- */

/* --- [TASK] ---
Improved layout and styling of modal dialog (CSS)

CURRENT SCENARIO
- The modal dialog lacks intentional layout (spacings, dimensions).
- On smaller devices, the available space is not utilized effectively.

DESIRED SCENARIO
- Ensure consistent spacing, padding, and dimensions.
- Implement responsive or adaptive behavior for the modal, especially on smaller devices.

FURTHER DETAILS
- Focus on injecting and structuring CSS, using selectors and properties effectively.
- Feel free to apply your preferred spacing and dimensions; the provided designs mereley serve as examples. Just make sure it is consistent.
- Bonus points awarded for aesthetically appealing re-design of elements.
--- [TASK] --- */

/* --- [TASK] ---
Improved use of TypeScript

CURRENT SCENARIO
- In `SettingsSelector`, there are individual `useState()` calls for `Country`, `Language`, and `Currency`.
- Throughout the entire project, there are several instances of type `any`.
    Example: 
    ```typescript
    ... = React.useState<any>(DEFAULT_COUNTRY);
    ```
- Default values are constants that are exported by each component. 
    Example:
    ```typescript
    .... { DEFAULT_COUNTRY } from "../country/CountrySelect";
    ```

DESIRED SCENARIO
- Consolidate `Country`, `Language`, and `Currency` into a single "state".
- Extract default values from the components and make them configurable from a central point.
- Eliminate any remaining instances of type `any`.

OPTIONAL BONUS
- Replace `any` in the `*.stories.tsx`  files with appropriate typings.
--- [TASK] --- */

/* --- [TASK] ---
 ReactDOM.render is no longer supported

CURRENT SCENARIO
- There is an error logging in the console
    `Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot`

DESIRED SCENARIO
- The error log does not appear
- The cause of the the warning is fixed

FURTHER DETAILS
- Downgrading to React 17 is not an option 😉
--- [TASK] --- */

// Types
export interface AppSettingsTypes {
  country: CountryValueTypes
  currency: string
  language: string
}

// Component
const SettingsSelector = (): JSX.Element => {
  // States
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);

  const [selectedSettings, setSelectedSettings] = React.useState<AppSettingsTypes>({
    country: DEFAULT_COUNTRY,
    currency: DEFAULT_CURRENCY,
    language: DEFAULT_LANGUAGE
  });

  const [cacheSettings, setCacheSettings] = React.useState<AppSettingsTypes>({
    country: DEFAULT_COUNTRY,
    currency: DEFAULT_CURRENCY,
    language: DEFAULT_LANGUAGE
  });

  // Render Counter
  const counter = useRef(0);

  // Actions
  const handleOpen = () => {
    setModalIsOpen(true);
  };

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleSave = () => {
    setModalIsOpen(false);

    if (cacheSettings.country !== selectedSettings.country) {
      setSelectedSettings((prevState: AppSettingsTypes) =>
          ({ ...prevState, country: cacheSettings.country }));
    }

    if (cacheSettings.currency !== selectedSettings.currency) {
      setSelectedSettings((prevState: AppSettingsTypes) =>
          ({ ...prevState, currency: cacheSettings.currency}));
    }

    if (cacheSettings.language !== selectedSettings.language) {
      setSelectedSettings((prevState: AppSettingsTypes) =>
          ({ ...prevState, language: cacheSettings.language }));
    }
  }

  // const button = () => {
  //   if (!buttonRendered) return ;
  //
  //   // Increase render count.
  //   counter.current++;
  //
  //   // Log current render count.
  //   console.log("Render count of button is: " + counter.current);
  //
  //   setButtonRendered(false);
  //
  //   /* Button */
  //   return (
  //     <button onClick={handleOpen}>
  //       {selectedCountry.name} - ({selectedCurrency} - {selectedLanguage})
  //     </button>
  //   );
  // };

  const MemoSettingsButton = React.useMemo(() => {
    return <SettingsButton
        handleOpenModal={handleOpen}
        country={selectedSettings.country}
        currency={selectedSettings.currency}
        language={selectedSettings.language}
        currentCount={counter.current}
    />;
  }, [selectedSettings.country, selectedSettings.currency, selectedSettings.language]);


  // Render
  return (
    <div>
      {/*{button()}*/}

      {MemoSettingsButton}

      {/* Modal */}
      <Modal isOpen={modalIsOpen} className="modal-layout" shouldCloseOnOverlayClick={true}
             onRequestClose={() => setModalIsOpen(false)}>
        {/* Header */}
        <h2>Select your region, currency and language.</h2>

        {/* Country */}
        <CountrySelect value={selectedSettings.country} onChange={setCacheSettings} />

        {/* Currency */}
        <CurrencySelect value={selectedSettings.currency} onChange={setCacheSettings} />

        {/* Language */}
        <LanguageSelect language={selectedSettings.language} onChange={setCacheSettings} />

        {/* Modal button */}
        <div className="modal-button">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleClose}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
};

export default SettingsSelector;
