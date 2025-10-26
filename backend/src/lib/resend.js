import { Resend } from "resend";
import { ENV } from "./env.js";

export const resendClient = new Resend(ENV.RESEND_API_KEY);

// Use Resend’s test domain (no verification required)
export const sender = {
  email: "onboarding@resend.dev", // ✅ free test domain
  name: "Talkify Team",
};
