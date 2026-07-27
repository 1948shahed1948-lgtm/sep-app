import { base44 } from '@/api/base44Client';

// Admin status is determined solely by the backend-enforced user role.
// No client-side passcode is used — access is gated by base44.auth.me().
export async function isCurrentUserAdmin() {
  try {
    const user = await base44.auth.me();
    return !!user && user.role === 'admin';
  } catch {
    return false;
  }
}