"use client";

import { useLoginForm } from "@/hooks";
import { Label } from "@/components/common/labels/Label";
import { Input } from "@/components/common/inputs/Input";
import { Button } from "@/components/common/buttons/Button";
import { LoaderTriangle } from "../common/loaders/LoaderTriangle";
import { Spinner } from "../svgs/Spinner";

export const Form = () => {
  const {
    handleLogin,
    setEmail,
    setPassword,
    email,
    password,
    error,
    loading,
  } = useLoginForm();

  return (
    <form onSubmit={handleLogin} className="space-y-8 w-full sm:w-[400px]">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          className="w-full"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
        />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input
          className="w-full"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
        />
      </div>
      <div className="w-full">
        {loading ? (
          <Button disabled className="w-full" size="lg">
            <Spinner />
          </Button>
        ) : (
          <Button className="w-full" size="lg">
            Login
          </Button>
        )}
      </div>
      {loading && <LoaderTriangle />}
    </form>
  );
};
