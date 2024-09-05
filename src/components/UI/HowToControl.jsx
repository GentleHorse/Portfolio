import escKeyIcon from "../../../public/images/icons/esc-key.svg";
import moveKeysIcon from "../../../public/images/icons/move-keys.svg";
import mouseIcon from "../../../public/images/icons/mouse.svg";

export default function HowToControl() {
  return (
    <>
      <section className="fixed flex flex-col justify-between w-[100vw] h-[100vh] z-20">
        <div className="flex items-center mt-8">
          <img src={escKeyIcon} className="ml-6 mr-2 w-14 h-14" />
          <p className="font-roboto text-slate-50 text-[20px]">
            Go back to Menu
          </p>
        </div>

        <div className="mb-[50px] flex justify-between">
          <div className="ml-6 flex items-center">
            <img src={moveKeysIcon} className="mx-2 w-20 h-20" />
            <p className="font-roboto text-slate-50 text-[20px]">
              WASD/AQSD/arrow keys to move
            </p>
          </div>
          <div className="mr-12 flex items-center">
            <img src={mouseIcon} className="mx-2 w-14 h-14" />
            <p className="font-roboto text-slate-50 text-[20px]">
              Change the camera angle
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
