import { Button } from "./ui/button";
import Link from "next/link";

function CalculatePrice() {
  return (
    <div className="lg:flex px-0.5 lg:px-24 py-0.5 md:py-20" id="calculate">
      {/* Text */}
      <div className="p-10">
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore
          optio voluptas facere? Repudiandae, ut non? Iste saepe blanditiis
          assumenda quibusdam amet. Nulla a soluta, quaerat modi reiciendis
          maiores architecto.
        </p>
      </div>

      {/* Buttons */}
      <div className="p-10 pt-0 text-center lg:pt-10 lg:justify-center">
        <div className="pb-3">
          <Link href="/services">
            <Button variant="outline" className="bg-[#0B132A] text-white shadow-lg">VIEW OUR SERVICES</Button>
          </Link>
        </div>
        <div>
          <Link href="/calculate-price">
            <Button variant="outline" className="bg-[#0B132A] text-white shadow-lg">CALCULATE YOUR PRICE</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CalculatePrice;
