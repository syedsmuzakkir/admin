// app/admin/login/page.js
'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication
    if (credentials.email && credentials.password) {
      router.push("/admin/dashboard");
    }
  };

  return (
    <Card className="mx-auto mt-20 w-full max-w-md p-6">
      <form onSubmit={handleLogin} className="space-y-4">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        <Input
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
        />
        <Input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
        />
        <Button type="submit" className="w-full">Sign In</Button>
      </form>
    </Card>
  );
}