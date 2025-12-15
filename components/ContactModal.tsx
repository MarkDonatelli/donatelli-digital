'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { getLenisInstance } from './SmoothScroll';

/* ----------------------------------------
   ZOD SCHEMA
---------------------------------------- */
const FormSchema = z.object({
  name: z.string().min(2, 'Name is required.'),
  email: z.string().email('Enter a valid email.'),
  services: z.array(z.string()).min(1, 'Select at least one service.'),
  budget: z.string().min(1, 'Select a budget range.'),
  details: z.string().min(10, 'Tell us a little more about your project.')
});

type FormValues = z.infer<typeof FormSchema>;

const servicesList = ['Web Design', 'Development', 'Branding', 'Site Audit'];
const budgetsList = [
  '$0 - $5k',
  '$5k - $10k',
  '$10k - $25k',
  '$25k - $50k',
  '$50k+'
];

export default function ContactModal({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      services: [],
      budget: '',
      details: ''
    }
  });

  const selectedServices = watch('services');
  const selectedBudget = watch('budget');
  const [success, setSuccess] = useState(false);

  /* ----------------------------------------
     BODY SCROLL LOCK
  ---------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  /* ----------------------------------------
     PAUSE / RESUME LENIS
  ---------------------------------------- */
  useEffect(() => {
    const lenis = getLenisInstance();
    if (!lenis) return;

    if (open) {
      lenis.stop(); // CRITICAL
    } else {
      lenis.start();
    }
  }, [open]);

  /* ----------------------------------------
     SUBMIT
  ---------------------------------------- */
  const onSubmit = async () => {
    setSuccess(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-tertiary/40 backdrop-blur-sm flex items-start justify-center px-4 py-8"
        >
          {/* MODAL PANEL (THIS SCROLLS) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
            data-lenis-prevent
            className="
     bg-white max-w-3xl w-full mx-auto rounded-xl relative
              max-h-[calc(100vh-2rem)]
              md:max-h-[calc(100vh-4rem)]
              overflow-y-auto
              overscroll-contain
              p-8 md:p-10
  "
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-neutral-400 hover:text-tertiary transition"
            >
              <Icon icon="lucide:x" width={20} />
            </button>

            {/* HEADER */}
            <h2 className="font-playfair text-5xl font-semibold text-tertiary">
              Let&apos;s build something.
            </h2>
            <p className="mt-2 text-neutral-500">
              Tell us about your project. We respond within 24 hours.
            </p>

            {/* SUCCESS */}
            {success && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center text-center p-10">
                <div>
                  <Icon
                    icon="lucide:check-circle"
                    width={48}
                    className="text-accent mx-auto mb-4"
                  />
                  <h3 className="font-playfair text-3xl font-semibold text-tertiary mb-3">
                    Message Sent
                  </h3>
                  <p className="text-neutral-600 max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you within
                    24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setSuccess(false);
                      onClose();
                    }}
                    className="mt-8 bg-tertiary text-white px-8 py-3 rounded-md hover:bg-accent transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* FORM */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-10 pb-4"
            >
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-500">
                    Name
                  </label>
                  <input
                    {...register('name')}
                    className="mt-1 w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-tertiary"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-neutral-500">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    className="mt-1 w-full border-b border-neutral-300 py-2 focus:outline-none focus:border-tertiary"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* SERVICES */}
              <div>
                <label className="text-xs uppercase tracking-wider text-neutral-500">
                  I&apos;m Interested In…
                </label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {servicesList.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => {
                        const current = selectedServices || [];
                        setValue(
                          'services',
                          current.includes(s)
                            ? current.filter((i) => i !== s)
                            : [...current, s],
                          { shouldValidate: true }
                        );
                      }}
                      className={`px-4 py-1.5 border rounded-full text-sm transition ${
                        selectedServices?.includes(s)
                          ? 'bg-tertiary text-white border-tertiary'
                          : 'border-neutral-300 hover:border-tertiary'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.services.message}
                  </p>
                )}
              </div>

              {/* BUDGET */}
              <div>
                <label className="text-xs uppercase tracking-wider text-neutral-500">
                  Project Budget (USD)
                </label>
                <div className="flex flex-wrap gap-3 mt-3">
                  {budgetsList.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() =>
                        setValue('budget', selectedBudget === b ? '' : b, {
                          shouldValidate: true
                        })
                      }
                      className={`px-4 py-1.5 border rounded-full text-sm transition ${
                        selectedBudget === b
                          ? 'bg-tertiary text-white border-tertiary'
                          : 'border-neutral-300 hover:border-tertiary'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                {errors.budget && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              {/* DETAILS */}
              <div>
                <label className="text-xs uppercase tracking-wider text-neutral-500">
                  Project Details
                </label>
                <textarea
                  {...register('details')}
                  className="mt-3 w-full border-b border-neutral-300 py-2 h-24 focus:outline-none focus:border-tertiary"
                />
                {errors.details && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.details.message}
                  </p>
                )}
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-tertiary text-white px-8 py-3 rounded-md flex items-center gap-2 hover:bg-accent transition"
                >
                  Send Message
                  <Icon icon="lucide:send" width={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
