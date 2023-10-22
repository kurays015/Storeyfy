import { TbTruckDelivery } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";

function GoodService() {
  return (
    <div className="good-service-container">
      <div>
        <div className="goodService-logo">
          <div className="gray-bg">
            <div className="black-bg">
              <TbTruckDelivery />
            </div>
          </div>
        </div>
        <h4>Free and Fast Delivery</h4>
        <p>Free deliver for all orders over 140$</p>
      </div>
      <div>
        <div className="goodService-logo">
          <div className="gray-bg">
            <div className="black-bg">
              <BsHeadset />
            </div>
          </div>
        </div>
        <h4>24/7 Customer Service</h4>
        <p>Friendly 24/7 customer support</p>
      </div>
      <div>
        <div className="goodService-logo">
          <div className="gray-bg">
            <div className="black-bg">
              <BiCheckShield />
            </div>
          </div>
        </div>
        <h4>Money Back Guarantee</h4>
        <p>We return money within 30 days</p>
      </div>
    </div>
  );
}

export default GoodService;
