import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

// Hidden entry point to the admin dashboard. Access is authorized by the
// backend-enforced user role on the /admin page itself — no client passcode.
export default function AdminPasscodeButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/admin')}
      className="absolute top-1 end-2 z-10 p-1.5 opacity-10 hover:opacity-50 transition-opacity"
      aria-label="Admin Access"
    >
      <Lock className="w-2 h-2 text-white" />
    </button>
  );
}