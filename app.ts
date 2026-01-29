import { InvalidEmailError } from "./src/errors";

/**
 * Normalizes an email for consistent storage:
 * - trims whitespace
 * - lowercases
 * - validates basic format
 */
export async function normalizeEmail(rawEmail: string): Promise<string> {
  const email = rawEmail.trim().toLowerCase();

  // Simple, real-world validation (not RFC insanity)
  const isValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    throw new InvalidEmailError(rawEmail);
  }


  return email;
}
