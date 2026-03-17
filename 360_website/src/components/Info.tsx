import { CiDeliveryTruck, CiClock2, CiLocationOn, CiInstagram, CiFacebook} from "react-icons/ci";


function Info() {
  return (
    <div className="flex justify-center mt-16 px-4">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl max-w-xl w-full flex flex-col items-center text-center">

            <div className="space-y-5 text-base md:text-lg w-full">

            <div className="flex items-start gap-3">
                <CiDeliveryTruck className="text-[#b5855a] mr-3 h-7 w-7 shrink-0" />
                <span className="text-left leading-snug">Consegna gratuita a Carignano (fuori zona +3€)</span>
            </div>

            <div className="flex items-center gap-3">
                <CiClock2 className="text-[#b5855a] mr-3 h-7 w-7 shrink-0"/>
                <span className="text-left leading-snug">Mar - Dom | 17:30 - 21:30</span>
            </div>

            <div className="flex items-center gap-3">
                <CiLocationOn className="text-[#b5855a] mr-3 h-7 w-7 shrink-0"/>
                <span className="text-left leading-snug">Via Pier Luigi Vigada 34, Carignano</span>
            </div>

            <a href="https://www.instagram.com/pizzeria380gradi/" className="flex items-center gap-3">
                <CiInstagram className="text-[#b5855a] mr-3 h-7 w-7 shrink-0"/>
                <span className="text-left leading-snug">@pizzeria380gradi</span>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61583408297688&ref=PROFILE_EDIT_xav_ig_profile_page_web#" className="flex items-center gap-3">
                <CiFacebook className="text-[#b5855a] mr-3 h-7 w-7 shrink-0"/>
                <span className="text-left leading-snug">@pizzeria380gradi</span>
            </a>

            </div>

        </div>
    </div>
  );
}

export default Info