import { CiDeliveryTruck, CiClock2, CiLocationOn, CiInstagram} from "react-icons/ci";


function Info() {
  return (
    <div className="flex justify-center mt-16 ">
        <div className="bg-white p-12 rounded-2xl shadow-xl max-w-xl w-full flex flex-col items-center text-center">

            <div className="space-y-4 text-xl">

            <div className="flex items-center gap-3">
                <CiDeliveryTruck className="text-[#b5855a] mr-3 h-7 w-7" />
                <span>Consegna gratuita a Carignano (fuori zona +3€)</span>
            </div>

            <div className="flex items-center gap-3">
                <CiClock2 className="text-[#b5855a] mr-3 h-7 w-7"/>
                <span>Mar - Dom | 17:30 - 21:30</span>
            </div>

            <div className="flex items-center gap-3">
                <CiLocationOn className="text-[#b5855a] mr-3 h-7 w-7"/>
                <span>Via Pier Luigi Vigada 34, Carignano</span>
            </div>

            <div className="flex items-center gap-3">
                <CiInstagram className="text-[#b5855a] mr-3 h-7 w-7"/>
                <span>@pizzeria380gradi</span>
            </div>

            </div>

        </div>
    </div>
  );
}

export default Info