import React, { useState, useEffect } from 'react';
import { SERVICES, MOMENTS_DATA } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function InquiryModal({ isOpen, onClose, initialScope, selectedMoments = [], onToggleMoment }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Wedding
    weddingDate: '',
    venueName: '',
    ceremonyTime: '',
    coverageScope: initialScope || 'ceremony-companion',
    // Step 2: Dog
    dogName: '',
    dogBreed: '',
    dogAge: '',
    temperament: 'Friendly & Calmer',
    handlingNotes: '',
    needsMeetAndGreet: 'yes',
    // Step 3: Contact
    coupleNames: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    notes: ''
  });

  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({ ...prev, coverageScope: initialScope }));
    }
  }, [initialScope]);

  if (!isOpen) return null;

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div className="bg-[#FEFEFB] border border-[#D8DED5] rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-wedding-raised relative my-8">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#59645E] hover:text-[#26322D] hover:bg-[#F0F2EC] transition-colors"
          aria-label="Close qualification form"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#345744]/15 text-[#345744] flex items-center justify-center border border-[#345744]/30">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <span className="text-xs uppercase font-semibold tracking-wider text-[#345744]">
              Inquiry Received Successfully
            </span>

            <h3 className="font-serif text-3xl font-medium text-[#26322D]">
              We�re excited to meet your pup!
            </h3>

            <div className="p-5 rounded-2xl bg-[#F0F2EC] border border-[#D8DED5] text-xs sm:text-sm text-[#26322D] text-left max-w-lg mx-auto space-y-2">
              <p className="font-semibold text-[#345744]">
                �We�ve received your request. Your date is not reserved yet. Melissa will review our availability and your dog�s needs before sending your tailored proposal.�
              </p>
              <p className="text-[#59645E]">
                We typically respond within 24 business hours. If your date is open, you�ll receive an itemized proposal with clear terms and a link to lock your date with a booking deposit.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="btn-accent text-sm !py-3 !px-8"
              >
                Return To Website
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Form */
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
                // Wedding Qualification & Availability
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#26322D] mt-1">
                Check Your Wedding Date
              </h3>
              <p className="text-xs text-[#59645E] mt-1">
                Step {step} of 3 � Tell us about your celebration and your pup.
              </p>

              {/* Progress Indicator */}
              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      s <= step ? 'bg-[#345744]' : 'bg-[#D8DED5]'
                    }`}
                  />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* STEP 1: Wedding Logistics */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                        Wedding Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.weddingDate}
                        onChange={(e) => handleChange('weddingDate', e.target.value)}
                        className="input-wedding"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                        Venue Name or City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Birmingham Botanical Gardens"
                        value={formData.venueName}
                        onChange={(e) => handleChange('venueName', e.target.value)}
                        className="input-wedding"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                      Approximate Ceremony / Portrait Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4:30 PM (or TBD)"
                      value={formData.ceremonyTime}
                      onChange={(e) => handleChange('ceremonyTime', e.target.value)}
                      className="input-wedding"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-2">
                      Requested Coverage Scope
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {SERVICES.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => handleChange('coverageScope', s.id)}
                          className={`p-3 rounded-xl text-left border text-xs transition-all ${
                            formData.coverageScope === s.id
                              ? 'border-[#345744] bg-[#EAF0EB] text-[#26322D] font-semibold'
                              : 'border-[#D8DED5] bg-white text-[#59645E] hover:border-[#7C897F]'
                          }`}
                        >
                          <span className="block font-serif text-sm font-medium">{s.title}</span>
                          <span className="text-[11px] text-[#59645E] mt-0.5 block">{s.duration}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!formData.weddingDate || !formData.venueName}
                      className="btn-accent text-xs !py-3 !px-6 disabled:opacity-50"
                    >
                      <span>Continue To Dog Details</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Dog Profile */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                        Dog's Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Cooper"
                        value={formData.dogName}
                        onChange={(e) => handleChange('dogName', e.target.value)}
                        className="input-wedding"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                        Breed / Size
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Golden Retriever, 65 lbs"
                        value={formData.dogBreed}
                        onChange={(e) => handleChange('dogBreed', e.target.value)}
                        className="input-wedding"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                        Age
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 3 years"
                        value={formData.dogAge}
                        onChange={(e) => handleChange('dogAge', e.target.value)}
                        className="input-wedding"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                      Temperament & Energy Level
                    </label>
                    <select
                      value={formData.temperament}
                      onChange={(e) => handleChange('temperament', e.target.value)}
                      className="input-wedding"
                    >
                      <option value="Calm & Easygoing">Calm & Easygoing</option>
                      <option value="Friendly & Playful">Friendly & Playful</option>
                      <option value="Excitable in Crowds">Excitable in Crowds (needs calming walks)</option>
                      <option value="Nervous / Sound Sensitive">Nervous / Sensitive to loud noise or clapping</option>
                    </select>
                  </div>

                  {/* Included Moments Selection */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                      Selected Wedding Moments
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {MOMENTS_DATA.map((moment) => {
                        const isIncluded = selectedMoments.includes(moment.id);
                        return (
                          <button
                            key={moment.id}
                            type="button"
                            onClick={() => onToggleMoment && onToggleMoment(moment.id)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                              isIncluded
                                ? 'bg-[#345744] text-white shadow-sm'
                                : 'bg-[#F0F2EC] text-[#59645E] hover:text-[#26322D]'
                            }`}
                          >
                            <span>{moment.shortLabel}</span>
                            <span>{isIncluded ? '?' : '+'}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                      Any special handling cues, sensitivities, or favorite treats?
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Loves peanut butter treats, gets nervous around thunder or loud fireworks..."
                      value={formData.handlingNotes}
                      onChange={(e) => handleChange('handlingNotes', e.target.value)}
                      className="input-wedding"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-semibold text-[#59645E] hover:text-[#26322D]"
                    >
                      ? Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.dogName}
                      className="btn-accent text-xs !py-3 !px-6 disabled:opacity-50"
                    >
                      <span>Continue To Contact Details</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submit */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                      Your Names (Bride & Groom / Couple) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Savannah & Tyler Mitchell"
                      value={formData.coupleNames}
                      onChange={(e) => handleChange('coupleNames', e.target.value)}
                      className="input-wedding"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="savannah@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="input-wedding"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                        Mobile Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(205) 555-0199"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="input-wedding"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1.5">
                      Any questions or details you�d like us to know?
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Tell us about your wedding planner, wedding party size, or specific photo shots..."
                      value={formData.notes}
                      onChange={(e) => handleChange('notes', e.target.value)}
                      className="input-wedding"
                    />
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F0F2EC] text-[11px] text-[#59645E]">
                    ?? We respect your privacy. We will only contact you regarding your wedding care request. No spam, ever.
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-semibold text-[#59645E] hover:text-[#26322D]"
                    >
                      ? Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.coupleNames || !formData.email}
                      className="btn-accent text-xs !py-3 !px-7 disabled:opacity-50"
                    >
                      <span>Send My Wedding Details</span>
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
