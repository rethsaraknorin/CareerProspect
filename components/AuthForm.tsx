"use client";

import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type AuthMode = "signin" | "signup";

interface FormValues {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
}

interface AuthFormProps {
  initialMode: AuthMode;
}

const AuthForm: React.FC<AuthFormProps> = ({ initialMode }) => {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});

  const toggleMode = () => {
    router.push(mode === "signin" ? "/sign-up" : "/sign-in");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (errors[name as keyof FormValues]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};

    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (mode === "signup") {
      if (!formValues.name) {
        newErrors.name = "Name is required";
      }
      if (!formValues.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formValues.password !== formValues.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      if (mode === "signup") {
        // Save user info to localStorage
        const newUser = {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        alert("Registration successful! Please sign in.");
        router.push("/sign-in");
      } else {
        // Sign In logic
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.email === formValues.email && user.password === formValues.password) {
            // Save fake token
            localStorage.setItem("token", "FAKE_TOKEN_123456");
            alert("Login successful!");
            router.push("/dashboard");
          } else {
            alert("Invalid email or password.");
          }
        } else {
          alert("No user found. Please sign up first.");
        }
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {mode === "signin" ? "Sign In" : "Create Account"}
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          {mode === "signin"
            ? "Sign in to access your account"
            : "Fill in the details to create your account"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {mode === "signup" && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? "border-red-300" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="Your full name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>
        )}

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail size={18} className="text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? "border-red-300" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="you@example.com"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={18} className="text-gray-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className={`block w-full pl-10 pr-10 py-2 border ${errors.password ? "border-red-300" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="••••••••"
              value={formValues.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
            </button>
          </div>
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        {mode === "signup" && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock size={18} className="text-gray-400" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                className={`block w-full pl-10 pr-10 py-2 border ${errors.confirmPassword ? "border-red-300" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                placeholder="••••••••"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff size={18} className="text-gray-400" /> : <Eye size={18} className="text-gray-400" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>
        )}

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {mode === "signin" ? "Don't have an account?" : "Already have an account?"}
          <button
            type="button"
            className="ml-1 font-medium text-blue-600 hover:text-blue-500"
            onClick={toggleMode}
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
