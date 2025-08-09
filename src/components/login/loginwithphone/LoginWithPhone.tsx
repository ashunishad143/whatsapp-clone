import { useState } from "react";
import CountryDropdown from "./CountryDropdown";
import { countries } from "../../../constants/countries";
import AnchorTagWithIcon from "../../util/AnchorTagWithIcon";
import { Constants } from "../../../constants/constants";

interface LoginWithPhoneProps {
  setLoginWithQr?: (value: boolean) => void;
}

export default function LoginWithPhone({
  setLoginWithQr = () => {},
}: LoginWithPhoneProps) {
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const len = selectedCountry.dial_code.length;
 const getPaddingLeft = (dialCodeLength: number) => {
  // Base padding = 48px, for every extra digit +4px
  return 48 + Math.max(0, dialCodeLength - 3) * 4;
};
const paddingLeft = getPaddingLeft(len);
console.log(paddingLeft);

  const {
    TITLE,
    DESCRIPTION,
    INPUT_PLACEHOLDER,
    NEXT_BUTTON_TEXT,
    QR_CODE_LINK_TEXT,
  } = Constants.LOGIN_WITH_PHONE;

  const handlePhoneChange = (phone: string) => {
    if (phone.length > 10) {
      setPhone(phone.slice(0, 10));
    } else {
      setPhone(phone);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <h1 className="font-normal text-4xl mt-2">{TITLE}</h1>
      <p className="font-light text-xl mt-1">{DESCRIPTION}</p>

      <CountryDropdown
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <div className="relative w-64 mt-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
          {selectedCountry.dial_code}
        </span>
        <label htmlFor="phone" className="sr-only">Phone number</label>
        <input
          type="number"
          value={phone}
          inputMode="numeric"
          pattern="[0-9]*"
          id="phone"
          name="phone"
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder={INPUT_PLACEHOLDER}
          className={`w-full border border-black rounded-full pr-4 py-2 
               focus:outline-none focus:ring-1 focus:ring-green-900`}
          style={{ paddingLeft: `${paddingLeft}px` }}
          autoComplete="tel"
        />
      </div>

      <div>
        <button className="w-20 mt-5 bg-green-800 p-2 text-white rounded-full hover:bg-green-900">
          {NEXT_BUTTON_TEXT}
        </button>
      </div>

      <div className="mt-4" onClick={() => setLoginWithQr(true)}>
        <AnchorTagWithIcon href="#" text={QR_CODE_LINK_TEXT} />
      </div>
    </div>
  );
}
