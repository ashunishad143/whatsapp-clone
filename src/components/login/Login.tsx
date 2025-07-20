import { useState } from "react";
import { Images } from "../../assets/images";
import { ArrowOut, } from "../icons/icons";
import StepsToLogin from "./StepToLogin";
import AnchorTagWithIcon from "../util/AnchorTagWithIcon";
import LoginWithPhone from "./LoginWithPhone";
function Login() {
  const [loginWithQr, setLoginWithQr] = useState<boolean>(false);
  console.log(loginWithQr)
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef9f3] via-[#fcf4e2] to-[#f8e8c0]">
      {/*  Header Section Strat */}
      <header className="py-5 px-14 logo-heder flex gap-1 justify-items-center">
        <img src={Images.logo} alt="whatsApp Logo" className="w-10" />
        <h1 className="justify-items-center justify-center font-bold text-lg my-2 text-green-500">
          WhatsApp
        </h1>
      </header>
      {/*  Header Section End */}

      {/*  Main Section Start */}
      <div className="justify-center justify-items-center">
        <h1 className="font-bold text-4xl">WhatsApp Web</h1>
        <div className="flex gap-1">
          <img src={Images.lock} alt="lock_icon" />
          <p className="font-light">
            Your personal messages are end-to-end encrypted on all of your
            devices.
          </p>
        </div>
      </div>

      {/* Steps to Login Section start*/}
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 bg-white my-10 mx-10 
      sm:mx-20 md:mx-20 lg:mx-60 rounded-4xl py-5 px-10 border-black border-1">
       {loginWithQr? <StepsToLogin setLoginWithQr={setLoginWithQr} /> : <LoginWithPhone />}
      </div>
      {/* Steps to Login Section end*/}
      
      {/* Footer Section Start */}
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="flex flex-row gap-2">
          <h1>Don't have a whatsApp Account?</h1>
          <AnchorTagWithIcon
            href="#"
            text="Get started"
            icon={ArrowOut}
            marginTop={1}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
