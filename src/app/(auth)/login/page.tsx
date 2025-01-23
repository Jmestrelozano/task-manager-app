import { Form } from "@/components/forms/FormLogin";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="shadow-xl px-8 pb-8 pt-12 bg-white rounded-xl space-y-12 w-[90%] md:w-auto">
        <h1 className="font-semibold text-2xl">Login</h1>
        <Form />
      </div>
    </div>
  );
}
