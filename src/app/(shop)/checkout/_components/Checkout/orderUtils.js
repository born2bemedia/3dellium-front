export const handleCreateOrder = async (
  data,
  user,
  cart,
  totalAmount,
  clearCart,
  fetchUserByEmail,
  registerUser
) => {
  try {
    let userId = null;
    const existingUser = await fetchUserByEmail(data.email);

    if (existingUser) {
      userId = existingUser.id;
      await updateUserProfile(userId, data, user);
    } else {
      const password = Math.random().toString(36).slice(-8);
      const newUser = await registerUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password,
      });

      userId = newUser.id;
    }

    const orderData = {
      orderNumber: `ORD_${Math.floor(Math.random() * 900000) + 100000}`,
      user: userId,
      items: cart.map((item) => ({
        product: item.id,
        quantity: item.quantity,
        price: item.attributes.price,
      })),
      total: totalAmount,
      status: "pending",
      paymentMethod: "bank_transfer",
      billingAddress: {
        street: data.street,
        address: data.address,
        city: data.city,
        state: data.state || "N/A",
        zip: data.postalCode,
        country: data.country.value,
      },
      orderNotes: data.orderNotes || "",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(orderData),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Failed to create order. Status:", response.status);
      console.error("Error details:", responseData);
      throw new Error(
        `Failed to create order: ${JSON.stringify(responseData)}`
      );
    }

    const emailPayload = {
      orderNumber: orderData.orderNumber,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      items: orderData.items,
      total: orderData.total,
      paymentMethod: orderData.paymentMethod,
      billingAddress: orderData.billingAddress,
      notes: orderData.orderNotes,
    };

    const emailResponse = await fetch("/api/emails/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!emailResponse.ok) {
      console.error("Failed to send order email.");
    }

    return responseData;
  } catch (error) {
    console.error("Order creation failed:", error);
    throw error;
  }
};

export const updateUserProfile = async (userId, data, user) => {
  try {
    const userUpdatePayload = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      street: data.street,
      address: data.address,
      city: data.city,
      country: data.country.value,
      postalCode: data.postalCode,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_URL}/api/users/${userId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
        body: JSON.stringify(userUpdatePayload),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Failed to update user. Status:", response.status);
      console.error("Error details:", responseData);
      throw new Error(`User update failed: ${JSON.stringify(responseData)}`);
    }

    return responseData;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
