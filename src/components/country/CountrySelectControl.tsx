
import * as React from 'react';
import {ControlProps , components } from "react-select";


// Component
export const CountrySelectControl = (props: ControlProps <any>) => {
    const [countryCodes, setCountryCodes] = React.useState('');

    React.useEffect(() => {
        if (props.getValue().length > 0) {
            setCountryCodes(props.getValue()[0].value.code)
        }

        console.log("CountryControl props:", props);
    }, [props]);

    return (
        <div>
            <components.Control  {...props}>
                <img src={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCodes}.svg`}
                     height="30" width="30" alt="country-icon" className="select-control-img"/>
                {props.children}
            </components.Control >
        </div>
    );
};
