import React from 'react'

function BankCardInfo() {
  return (
    <div>  <div className="bg-white m-6 p-6">
    <div className="head-title">Bank Card Information</div>
    <div className="flex mt-6 ">
      <div style={{ width: "30%" }} className="">
        <div className="plain-text">Full Name On The Card</div>
        <div>
          <input
            id="fullNameOnCard"
            name="fullNameOnCard"
            type="fullNameOnCard"
            className="classic-input pl-4 "
            placeholder="Anna Carina"
            onChange={formik.handleChange}
            value={formik.values.fullNameOnCard}
          />
          <div className="flex">
            <div className="error-field ">
              {formik.errors.fullNameOnCard && (
                <div>{formik.errors.fullNameOnCard}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "30%" }} className="">
        <div className="plain-text">Card Number</div>
        <div>
          <input
            id="cardNumber"
            name="cardNumber"
            type="cardNumber"
            style={{ width: "150px" }}
            className="classic-input pl-4 ml-4 mr-4"
            placeholder="........................."
            onChange={formik.handleChange}
            value={formik.values.cardNumber}
          />
          <div className="flex">
            <div className="error-field ">
              {formik.errors.cardNumber && (
                <div>{formik.errors.cardNumber}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "15%" }} className="">
        <div className="plain-text">Exp Date</div>
        <div>
          <input
            id="cardExpDate"
            name="cardExpDate"
            type="cardExpDate"
            className="short-input pl-4 "
            placeholder="**/**"
            onChange={formik.handleChange}
            value={formik.values.cardExpDate}
          />
        </div>
        <div className="flex">
          <div className="error-field ">
            {formik.errors.cardExpDate && (
              <div>{formik.errors.cardExpDate}</div>
            )}
          </div>
        </div>
      </div>
      <div style={{ width: "15%" }} className="">
        <div className="plain-text">CVC</div>
        <div>
          <input
            id="cardCvc"
            name="cardCvc"
            type="cardCvc"
            placeholder="***"
            className="short-input pl-4 "
            onChange={formik.handleChange}
            value={formik.values.cardCvc}
          />
          <div className="flex">
            <div className="error-field ">
              {formik.errors.cardCvc && (
                <div>{formik.errors.cardCvc}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-6">
      <div>
        <div>Promo Code</div>
        <div className="flex">
          <div>
            <input
              placeholder="mindx"
              id="promoCode"
              name="promoCode"
              type="promoCode"
              className="classic-input pl-4 "
              onChange={formik.handleChange}
              value={formik.values.promoCode}
              disabled={disablePromo ? true : false}
            />
          </div>
          <div>
            <button
              className="payment-button ml-6"
              onClick={() => {
                console.log(formik.values.promoCode);
                toast.success("Successfully apply promocode", {
                  position: "top-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                setDisablePromo(true);
                localStorage.setItem(
                  "promoCode",
                  formik.values.promoCode
                );
              }}
            >
              {" "}
              Apply Code
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="error-field ">
            {" "}
            {formik.errors.cardCvc && (
              <div>{formik.errors.cardCvc}</div>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-6">
      <div>
        <button className="save-in-shortcut ">
          Save In Shortcut
        </button>
      </div>
      <div>
        <button className="payment-button ml-6" type="submit">
          Payment
        </button>
      </div>
    </div>
  </div></div>
  )
}

export default BankCardInfo