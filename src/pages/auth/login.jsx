import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ROUTES } from "@/constants/routes";
import InventoryImage from "@/assets/images/Inventory.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Successfully logged in!");
    navigate(ROUTES.ADMIN);
  };

  return (
    <div className="min-h-screen w-full flex bg-slate-50">
      <div className="hidden lg:flex flex-1 relative bg-primary/10 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <img
          src={InventoryImage}
          alt="Inventory Management"
          className="relative z-10 w-full max-w-2xl object-contain drop-shadow-2xl"
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md shadow-xl border-slate-100">
          <CardHeader className="space-y-2 text-center mb-4">
            <CardTitle className="text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-base">
              Please enter your credentials to login
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-slate-700">
                    Password
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <Button type="submit" className="w-full h-11 text-base font-medium mt-6 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                Log In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
