import { useState } from 'react';

type LeadCaptureModalProps = {
  onClose: () => void;
};

export function LeadCaptureModal({ onClose }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    industry: '',
    companyEmail: '',
  });

  const handleChange = (field: keyof typeof formData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.alert(`Example request captured for ${formData.companyEmail}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 px-4 py-6" onClick={onClose}>
      <div
        className="w-full max-w-[520px] rounded-[24px] bg-white p-6 shadow-[0px_24px_80px_rgba(12,12,13,0.28)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#2952e8]">Quick lead form</p>
            <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-1px] text-[#18181b]">Send me a real example</h2>
            <p className="text-[16px] leading-[1.5] text-[#52525b]">
              Leave your details and we can route this to the upcoming example-request workflow.
            </p>
          </div>
          <button
            aria-label="Close form"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e4e4e7] text-[20px] text-[#3f3f46]"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-[14px] font-medium text-[#18181b]">First name</span>
              <input
                className="w-full rounded-[14px] border border-[#d4d4d8] px-4 py-3 text-[16px] text-[#18181b] outline-none transition focus:border-[#2952e8]"
                onChange={handleChange('firstName')}
                required
                type="text"
                value={formData.firstName}
              />
            </label>
            <label className="space-y-2">
              <span className="text-[14px] font-medium text-[#18181b]">Last name</span>
              <input
                className="w-full rounded-[14px] border border-[#d4d4d8] px-4 py-3 text-[16px] text-[#18181b] outline-none transition focus:border-[#2952e8]"
                onChange={handleChange('lastName')}
                required
                type="text"
                value={formData.lastName}
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-[14px] font-medium text-[#18181b]">Industry</span>
            <input
              className="w-full rounded-[14px] border border-[#d4d4d8] px-4 py-3 text-[16px] text-[#18181b] outline-none transition focus:border-[#2952e8]"
              onChange={handleChange('industry')}
              required
              type="text"
              value={formData.industry}
            />
          </label>

          <label className="space-y-2">
            <span className="text-[14px] font-medium text-[#18181b]">Company email</span>
            <input
              className="w-full rounded-[14px] border border-[#d4d4d8] px-4 py-3 text-[16px] text-[#18181b] outline-none transition focus:border-[#2952e8]"
              onChange={handleChange('companyEmail')}
              required
              type="email"
              value={formData.companyEmail}
            />
          </label>

          <div className="flex justify-end pt-2">
            <button
              className="rounded-[12px] bg-[#2952e8] px-5 py-3 text-[16px] font-semibold text-white"
              type="submit"
            >
              Submit request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
