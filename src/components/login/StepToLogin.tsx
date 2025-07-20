import { Images } from "../../assets/images";
import { ArrowRightIcon } from "../icons/icons";
import AnchorTagWithIcon from "../util/AnchorTagWithIcon";
import RoundedListItem from "../util/RoundedListItem";


interface StepsToLoginProps {
    setLoginWithQr: (value: boolean) => void;
}

function StepsToLogin({  setLoginWithQr}: StepsToLoginProps) {
  return (
    <>
      {/* left side content start */}
      <div>
        <h2 className="font-bold text-2xl mt-5 text-left">Steps to log in</h2>
        <ol className="list-image-none ml-5 mt-3">
          <li className="flex gap-2 my-5">
            <RoundedListItem itemNumber={1} />
            <p className="text-left flex font-semibold">
              Open WhatsApp &nbsp; <img src={Images.greenLogo} alt="whatsApp Icon" /> &nbsp;
              on your phone.
            </p>
          </li>
          <li className="flex gap-2 my-5">
            <RoundedListItem itemNumber={2} />
            <div className="text-left flex font-semibold justify-center items-center">
              On Android tap &nbsp;{" "}
              <div className="bg-gray-100 rounded-sm mt-1">
                <img src={Images.verticleMenu} alt="verticle Menu" />
              </div>
              &nbsp;On iPhone tap Settings &nbsp;
              <div className="bg-gray-100 rounded-sm mt-1">
                <img src={Images.iphoneSettings} alt="iphone settings" />
              </div>
            </div>
            .
          </li>
          <li className="flex gap-2 my-5">
            <RoundedListItem itemNumber={3} />
            <div className="text-left flex font-semibold">
              Tap Linked Devices, then Link Device.
            </div>
          </li>
          <li className="flex gap-2 my-5">
            <RoundedListItem itemNumber={4} />
            <div className="text-left flex font-semibold">
              Scan the QR code to confirm
            </div>
          </li>
        </ol>

        <div className="flex items-center justify-items-center gap-2 mt-10">
          <input
            type="checkbox"
            id="stayLoggedIn"
            className="accent-green-500 w-4 h-4 border-2 border-black rounded"
          />
          <h3>Stay logged in on this browser</h3>
          <div className="relative mt-1 group">
            <img src={Images.infoIcon} alt="info icon" className="cursor-pointer" />
            <div
              className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border
               border-gray-300 rounded shadow-lg p-2 text-sm text-gray-700 opacity-0 
               group-hover:opacity-100 transition-opacity pointer-events-none z-10"
            >
              If selected, you will stay logged in on this browser even if you
              close the tab or browser.
            </div>
          </div>
        </div>
      </div>
      {/* left side content end */}

      {/* Right side content start */}
      <div className="flex flex-col justify-center justify-items-center">
        <div className="">
          <img src={Images.Qr} alt="Qr code" className="mx-auto" />
        </div>

        <div className="flex flex-col items-center" onClick={() => setLoginWithQr(false)}>
          <AnchorTagWithIcon
            href="#"
            text="Log in with phone number"
            icon={ArrowRightIcon}
          />
        </div>
      </div>
      {/* Right side content end */}
    </>
  );
}

export default StepsToLogin;
