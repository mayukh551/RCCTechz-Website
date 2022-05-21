import React from "react";

const HFooter = () => {
    return (
        <div className="py-24 px-12 bg-black text-white flex flex-row justify-center space-x-48">
            <div>
                <h4 className="font-bold">Title Here</h4>
                <p className="w-44 mt-7">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi, veritatis.
                </p>
            </div>
            <div>
                <h4 className="font-bold">About</h4>
                <ul className="mt-7 space-y-3">
                    <li>History</li>
                    <li>Our Team</li>
                    <li>Brand Guidelines</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold">Services</h4>
                <ul className="mt-7 space-y-3">
                    <li>How to Order</li>
                    <li>Our Product</li>
                    <li>Order Status</li>
                    <li>Promo</li>
                    <li>Payment Method</li>
                </ul>
            </div>
            <div>
            <h4 className="font-bold">Other</h4>
                <ul className="mt-7 space-y-3">
                    <li>Contact Us</li>
                    <li>Help</li>
                    <li>Privacy</li>
                    </ul>
            </div>
        </div>
    );
};

export default HFooter;
