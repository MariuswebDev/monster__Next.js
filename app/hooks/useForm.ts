"use client";

import { FormEvent, useCallback, useState } from "react";

export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
}

export interface UseFormReturn<T> extends FormState<T> {
  setFieldValue: <K extends keyof T>(field: K, value: T[K]) => void;
  setFieldError: (field: keyof T, error: string) => void;
  setFieldTouched: (field: keyof T, touched: boolean) => void;
  handleSubmit: (
    onSubmit: (values: T) => Promise<void>,
  ) => (e: FormEvent) => Promise<void>;
  reset: () => void;
}

export function useForm<T extends object>(initialValues: T): UseFormReturn<T> {
  const [state, setState] = useState<FormState<T>>({
    values: initialValues,
    errors: {},
    touched: {},
    isSubmitting: false,
  });

  const setFieldValue = useCallback(
    <K extends keyof T>(field: K, value: T[K]) => {
      setState((prev) => ({
        ...prev,
        values: { ...prev.values, [field]: value },
      }));
    },
    [],
  );

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setState((prev) => ({
      ...prev,
      errors: { ...prev.errors, [field]: error },
    }));
  }, []);

  const setFieldTouched = useCallback((field: keyof T, touched: boolean) => {
    setState((prev) => ({
      ...prev,
      touched: { ...prev.touched, [field]: touched },
    }));
  }, []);

  const handleSubmit = useCallback(
    (onSubmit: (values: T) => Promise<void>) =>
      async (e: FormEvent) => {
        e.preventDefault();
        setState((prev) => ({ ...prev, isSubmitting: true }));
        try {
          await onSubmit(state.values);
        } finally {
          setState((prev) => ({ ...prev, isSubmitting: false }));
        }
      },
    [state.values],
  );

  const reset = useCallback(() => {
    setState({
      values: initialValues,
      errors: {},
      touched: {},
      isSubmitting: false,
    });
  }, [initialValues]);

  return {
    ...state,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    handleSubmit,
    reset,
  };
}
}
