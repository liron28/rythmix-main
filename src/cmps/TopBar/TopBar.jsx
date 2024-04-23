import { LeftArrow } from "../icons/LeftArrow";
import { RightArrow } from "../icons/RightArrow";

export function TopBar() {
  return (
    <header className="top-bar br-none flex row p-12">
      <nav className="flex row align-center">
        <button className="rounded-full flex align-center justify-center p-0">
          <LeftArrow />
        </button>
        <button className="rounded-full flex align-center justify-center p-0">
          <RightArrow />
        </button>
      </nav>

      <div className="account-controls-wrapper ml-auto flex row align-center">
        <button className="sign-up-btn fs14 font-medium bg-transparent">Sign Up</button>
        <button className="login-btn fs14 font-medium">Login</button>
        <button className="account-btn">Account</button>
      </div>
    </header>
  );
}
