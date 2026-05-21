"use client";

import React, { useCallback, useState } from "react";

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
  ) => (e: React.FormEvent) => Promise<void>;
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
    (onsubmit: (values: T) => Promise<void>) => async (e: React.FormEvent) => {
      e.preventDefault();
      setState((prev) => ({ ...prev, isSubmitting: true }));

      try {
        await onsubmit(state.values);
        setState((prev) => ({ ...prev, isSubmitting: false }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isSubmitting: false,
          errors: {
            ...prev.errors,
            submit: error instanceof Error ? error.message : "Unknown error",
          },
        }));
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
