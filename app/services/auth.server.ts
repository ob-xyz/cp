import { redirect } from "@remix-run/node";
import type { Request } from "@remix-run/node";

export const authenticator = {
  isAuthenticated: async (request: Request, options: { failureRedirect: string }) => {
    // Fake auth check — replace this with real cookie/session logic
    const cookie = request.headers.get("Cookie") || "";
    const isLoggedIn = cookie.includes("session=valid");

    if (!isLoggedIn) {
      throw redirect(options.failureRedirect);
    }

    return true;
  }
};