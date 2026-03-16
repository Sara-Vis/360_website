
import { Button } from "flowbite-react";
import { FaPhoneAlt } from "react-icons/fa";

function CallButton(){
    return(
            <div className="flex justify-center mt-20">
                <Button color="[#d6bea6]" className="bg-[#b5855a] text-white text-2xl px-10 py-8">
                    <FaPhoneAlt className="mr-3 h-7 w-7" />
                    CHIAMA ORA
                </Button>
            </div>
    )
}

export default CallButton