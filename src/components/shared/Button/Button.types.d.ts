import React, { ButtonHTMLAttributes, ElementType } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode | null;
  variant?: "primary" | "secondary" | "outlined" | "rounded-full";
  label?: string;
}