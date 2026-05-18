"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function joinWaitlist(email: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Invalid email address." };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabase as any)
    .from("waitlist")
    .insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { error: "You have already applied for access." };
    }
    return { error: "A system error occurred. Please try again." };
  }

  return { success: true };
}
