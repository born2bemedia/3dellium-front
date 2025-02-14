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
              <input type="checkbox" {...register("terms")} />
              <span>
                I have read and agree to 3Dellium’s Terms and Conditions.
              </span>
            </label>
            {errors.terms && (
              <p>
                {errors.terms.message}
              </p>
            )}
          </div>

          <div>
            <label>
              <input type="checkbox" {...register("refundPolicy")} />{" "}
              <span>I have read and agree to the Refund Policy.</span>
            </label>
            {errors.refundPolicy && (
              <p>
                {errors.refundPolicy.message}
              </p>
            )}
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
