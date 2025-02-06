// app/api/orders/route.js
import payload from "payload";

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const whereParam = searchParams.get("where");
    const where = whereParam ? JSON.parse(whereParam) : {};

    // Fetch orders from Payload
    const result = await payload.find({
      collection: "orders",
      where,
    });

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
