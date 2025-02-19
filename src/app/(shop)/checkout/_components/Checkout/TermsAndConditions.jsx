"use client";
import AddToCartArrow2 from "@/icons/AddToCart/AddToCartArrow2";
import styles from "./Checkout.module.scss";
import AddToCartArrow1 from "@/icons/AddToCart/AddToCartArrow1";

const TermsAndConditions = ({ formMethods, isSubmitting, submitError }) => {
  const {
    register,
    formState: { errors },
  } = formMethods;

  return (
    <>
      <div className={styles.orderSubmit}>
        <div className={styles.terms}>
          <div>
            <label>
              <input
                className={errors.terms ? styles.error : ""}
                type="checkbox"
                {...register("terms")}
              />
              <span>
                I have read and agree to 3Dellium’s Terms and Conditions.
              </span>
            </label>
          </div>

          <div>
            <label>
              <input
                className={errors.refundPolicy ? styles.error : ""}
                type="checkbox"
                {...register("refundPolicy")}
              />{" "}
              <span>I have read and agree to the Refund Policy.</span>
            </label>
          </div>
        </div>
        <button type="submit" disabled={isSubmitting}>
          <div>
            <AddToCartArrow2 />
            <span>{isSubmitting ? "Loading..." : "Order"}</span>
            <AddToCartArrow1 />
          </div>
        </button>
      </div>
      {submitError && (
        <div
          style={{
            color: "red",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {submitError}
        </div>
      )}
    </>
  );
};

export default TermsAndConditions;
