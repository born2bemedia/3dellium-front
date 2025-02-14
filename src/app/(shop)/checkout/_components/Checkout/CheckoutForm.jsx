import styles from "./Checkout.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./validation";
import useCartStore from "@/stores/cartStore";
import useAuthStore from "@/stores/authStore";
import { useRouter } from "next/navigation";
import Cart from "../Cart/Cart";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import TermsAndConditions from "./TermsAndConditions";
import { handleCreateOrder } from "./orderUtils";
import countryList from "react-select-country-list";
import ThanksPopup from "@/components/ThanksPopup/ThanksPopup";
import usePopupStore from "@/stores/popupStore";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const CheckoutForm = () => {
  const { cart, clearCart, totalAmount } = useCartStore();
  const { user, fetchUserByEmail, registerUser } = useAuthStore();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopupStore();

  const formMethods = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      city: user?.city || "",
      street: user?.street || "",
      address: user?.address || "",
      country: user.country ? getCountryOptionByCode(user.country) : null,
      postalCode: user?.zip || "",
      phone: user?.phone || "",
      email: user?.email || "",
      termsAccepted: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await handleCreateOrder(
        data,
        user,
        cart,
        totalAmount,
        clearCart,
        fetchUserByEmail,
        registerUser
      );
      setIsSubmitting(false);
      setThanksPopupDisplay(true);
      //clearCart();
    } catch (error) {
      setSubmitError(
        error.message || "Failed to process order. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className={styles.body}
      >
        <div className={styles.col1}>
          <h2>Your Order</h2>
          <Cart />
        </div>

        <div className={styles.col2}>
          <h2>Billing Data</h2>
          <BillingForm formMethods={formMethods} />
        </div>

        <div className={styles.col3}>
          <h2>Order Summary</h2>
          <OrderSummary cart={cart} totalAmount={totalAmount} />
          <TermsAndConditions
            formMethods={formMethods}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
