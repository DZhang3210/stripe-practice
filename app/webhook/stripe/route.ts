import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature");
  let event: Stripe.Event;

  try {
  } catch (error) {
    console.log(error);
  }
}
