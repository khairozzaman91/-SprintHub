import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: Backend API Login
    navigate("/");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-violet-600">SprintHub</h1>
          <p className="mt-2 text-sm text-slate-500">
            Welcome back! Sign in to continue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="font-medium text-violet-600 hover:text-violet-700"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span className="px-3 text-sm text-slate-400">OR</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <button className="w-full rounded-lg border border-slate-300 py-3 font-medium text-slate-700 transition hover:bg-slate-100">
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-violet-600 hover:text-violet-700"
          >
            Register
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;