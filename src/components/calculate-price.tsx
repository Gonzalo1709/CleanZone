import { Button } from "./ui/button";

function CalculatePrice() {
  return (
    <div className="lg:flex lg:px-12" id="calculate">
      {/* Text */}
      <div className="p-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste labore
          optio voluptas facere? Repudiandae, ut non? Iste saepe blanditiis
          assumenda quibusdam amet. Nulla a soluta, quaerat modi reiciendis
          maiores architecto.
        </p>
      </div>

      {/* Buttons */}
      <div className="p-10 pt-0 text-center lg:pt-10 lg:justify-center lg:justify-center">
        <div className="pb-3">
          <Button variant="outline">VIEW OUR SERVICES</Button>
        </div>
        <div>
          <Button variant="outline">CALCULATE YOUR PRICE</Button>
        </div>
      </div>
    </div>
  );
}

export default CalculatePrice;
