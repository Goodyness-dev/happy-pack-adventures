import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ProposalView({ onBackToSite }) {
  const [agreementSigned, setAgreementSigned] = useState(false);
  const [signerName, setSignerName] = useState('');
  const [status, setStatus] = useState('review'); // 'review' | 'paid' | 'declined' | 'change_requested'
  const [declineReason, setDeclineReason] = useState('');
  const [changeNotes, setChangeNotes] = useState('');

  // Sample proposal details
  const proposal = {
    token: 'HPA-2026-COOPER-0418',
    couple: 'Savannah & Tyler Mitchell',
    dog: 'Cooper (Golden Retriever, 3 yrs)',
    date: 'Saturday, October 17, 2026',
    venue: 'Birmingham Botanical Gardens (Rose Garden)',
    coverageHours: '1:30 PM � 6:30 PM (5 Hours)',
    scopeTitle: 'Ceremony Companion Experience',
    items: [
      { name: 'Ceremony Companion Primary Chaperone (5 Hours on-site)', cost: 525 },
      { name: 'Climate-Controlled Roundtrip Transit (Mountain Brook to Gardens)', cost: 75 },
      { name: 'Wedding Attire Dressing & Scent Familiarization', cost: 0, note: 'Complimentary' },
      { name: 'Photo Attention Staging (Squeakers & Organic Beef Treats)', cost: 0, note: 'Included' },
      { name: 'Safe Evening Return Home, Fresh Meal & Bedtime Tuck-in', cost: 50 }
    ],
    total: 650,
    depositDue: 150,
    balanceRemaining: 500,
    balanceDueDate: 'October 3, 2026 (14 days prior to wedding)',
    expiresAt: '7 days from issuance'
  };

  const handlePayDeposit = (e) => {
    e.preventDefault();
    if (!agreementSigned || !signerName.trim()) {
      alert('Please check the agreement acceptance box and enter your full name as digital signature.');
      return;
    }
    setStatus('paid');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF6] text-[#26322D] py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#D8DED5]">
          <div>
            <span className="font-serif text-2xl font-medium tracking-tight text-[#26322D]">
              Happy Pack Adventures
            </span>
            <span className="block text-xs uppercase tracking-widest text-[#59645E]">
              Private Wedding Care Proposal
            </span>
          </div>

          <button
            onClick={onBackToSite}
            className="text-xs font-semibold text-[#59645E] hover:text-[#26322D] px-3 py-1.5 rounded-lg border border-[#D8DED5]"
          >
            ? Back To Site
          </button>
        </div>

        {/* Status: PAID CONFIRMATION */}
        {status === 'paid' && (
          <div className="card-thick p-8 sm:p-12 text-center space-y-6 shadow-wedding-raised animate-in zoom-in-95">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#345744]/15 text-[#345744] flex items-center justify-center border border-[#345744]/30">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <span className="text-xs uppercase font-bold tracking-widest text-[#345744]">
              Booking Officially Confirmed
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#26322D]">
              Your Wedding Date Is Locked!
            </h2>

            <p className="text-sm text-[#59645E] max-w-lg mx-auto leading-relaxed">
              Thank you, {signerName}! Your deposit of <strong>${proposal.depositDue}.00</strong> has been processed successfully. Your agreement is signed and stored with timestamp. Melissa is reserved for your wedding on {proposal.date}.
            </p>

            <div className="p-5 rounded-2xl bg-[#F0F2EC] border border-[#D8DED5] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#59645E]">Confirmation Code:</span>
                <span className="font-mono font-bold text-[#26322D]">{proposal.token}-CONFIRMED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#59645E]">Deposit Paid:</span>
                <span className="font-bold text-[#345744]">${proposal.depositDue}.00 USD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#59645E]">Remaining Balance:</span>
                <span className="font-semibold text-[#26322D]">${proposal.balanceRemaining}.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#59645E]">Balance Due:</span>
                <span className="text-[#26322D]">{proposal.balanceDueDate}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onBackToSite}
                className="btn-accent text-xs !py-3 !px-6"
              >
                Return To Homepage
              </button>
            </div>
          </div>
        )}

        {/* Status: DECLINED */}
        {status === 'declined' && (
          <div className="card-thick p-8 text-center space-y-4 shadow-sm animate-in fade-in">
            <h3 className="font-serif text-2xl font-medium text-[#26322D]">
              Proposal Declined
            </h3>
            <p className="text-sm text-[#59645E] max-w-md mx-auto">
              We appreciate you letting us know. The date hold has been released and all automated notifications have stopped.
            </p>
            <button onClick={onBackToSite} className="btn-secondary text-xs mt-4">
              Return To Site
            </button>
          </div>
        )}

        {/* Status: CHANGE REQUESTED */}
        {status === 'change_requested' && (
          <div className="card-thick p-8 text-center space-y-4 shadow-sm animate-in fade-in">
            <h3 className="font-serif text-2xl font-medium text-[#26322D]">
              Change Request Sent To Melissa
            </h3>
            <p className="text-sm text-[#59645E] max-w-md mx-auto">
              Thank you! Melissa has received your notes regarding adjustments to your coverage or schedule. An updated proposal will be issued shortly.
            </p>
            <button onClick={onBackToSite} className="btn-secondary text-xs mt-4">
              Return To Site
            </button>
          </div>
        )}

        {/* Status: ACTIVE REVIEW */}
        {status === 'review' && (
          <div className="space-y-8">
            
            {/* Header Card */}
            <div className="card-thick p-6 sm:p-8 bg-[#FEFEFB] border border-[#D8DED5]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#D8DED5]">
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#345744]">
                    Proposal Reference: {proposal.token}
                  </span>
                  <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#26322D] mt-1">
                    Care Proposal for {proposal.dog}
                  </h1>
                  <p className="text-xs text-[#59645E] mt-0.5">
                    Prepared for {proposal.couple}
                  </p>
                </div>

                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF0EB] text-[#345744] border border-[#D8DED5]">
                    Available & Approved
                  </span>
                  <p className="text-[11px] text-[#59645E] mt-1.5">Expires in 7 days</p>
                </div>
              </div>

              {/* Event Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs">
                <div className="p-3.5 rounded-xl bg-[#F0F2EC]/70 border border-[#D8DED5]">
                  <span className="text-[#59645E] block font-medium">Wedding Date</span>
                  <span className="font-semibold text-[#26322D] text-sm mt-0.5 block">{proposal.date}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F0F2EC]/70 border border-[#D8DED5]">
                  <span className="text-[#59645E] block font-medium">Venue Location</span>
                  <span className="font-semibold text-[#26322D] text-sm mt-0.5 block">{proposal.venue}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F0F2EC]/70 border border-[#D8DED5]">
                  <span className="text-[#59645E] block font-medium">Chaperone Window</span>
                  <span className="font-semibold text-[#26322D] text-sm mt-0.5 block">{proposal.coverageHours}</span>
                </div>
              </div>
            </div>

            {/* Itemized Services Breakdown */}
            <div className="card-thick p-6 sm:p-8 bg-[#FEFEFB] border border-[#D8DED5]">
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#26322D] mb-4">
                Itemized Services & Logistics
              </h3>

              <div className="space-y-3">
                {proposal.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2.5 border-b border-[#D8DED5]/60 text-xs sm:text-sm">
                    <span className="text-[#26322D] font-medium">{item.name}</span>
                    <span className="font-mono font-semibold text-[#26322D]">
                      {item.note ? item.note : `$${item.cost}.00`}
                    </span>
                  </div>
                ))}
              </div>

              {/* Financial Totals */}
              <div className="mt-6 pt-4 border-t-2 border-[#D8DED5] space-y-2 text-sm">
                <div className="flex justify-between text-[#59645E]">
                  <span>Total Care Investment:</span>
                  <span className="font-mono font-bold text-[#26322D] text-base">${proposal.total}.00</span>
                </div>
                <div className="flex justify-between text-[#345744] font-semibold text-base py-1">
                  <span>Required Date-Lock Deposit (Due Now):</span>
                  <span className="font-mono text-lg">${proposal.depositDue}.00</span>
                </div>
                <div className="flex justify-between text-xs text-[#59645E]">
                  <span>Remaining Balance (Due {proposal.balanceDueDate}):</span>
                  <span className="font-mono font-semibold text-[#26322D]">${proposal.balanceRemaining}.00</span>
                </div>
              </div>
            </div>

            {/* Service Agreement & Policies */}
            <div className="card-thick p-6 sm:p-8 bg-[#FEFEFB] border border-[#D8DED5] space-y-4 text-xs text-[#59645E]">
              <h3 className="font-serif text-xl font-medium text-[#26322D]">
                Wedding Day Pet Care Agreement & Policies
              </h3>
              
              <div className="p-4 rounded-xl bg-[#F0F2EC]/60 border border-[#D8DED5] space-y-2 text-[11px] leading-relaxed max-h-48 overflow-y-auto">
                <p><strong>1. Reservation & Deposit:</strong> Your date is officially reserved once this agreement is digitally signed and the ${proposal.depositDue} booking deposit is received. Dates are not held without deposit.</p>
                <p><strong>2. Balance Due Date:</strong> The remaining balance of ${proposal.balanceRemaining} is due on or before {proposal.balanceDueDate}.</p>
                <p><strong>3. Cancellation & Rescheduling:</strong> Rescheduling is honored subject to Melissa's availability. In the event of client cancellation more than 30 days prior to the wedding, deposit may be credited toward future chaperone services.</p>
                <p><strong>4. Pet Health & Safety:</strong> Client confirms that {proposal.dog} is up to date on rabies and essential vaccinations. In the unlikely event of medical emergency, chaperone is authorized to transport pet to nearest emergency veterinary clinic.</p>
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreementSigned}
                    onChange={(e) => setAgreementSigned(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-[#7C897F] text-[#345744] focus:ring-[#345744]"
                  />
                  <span className="text-xs text-[#26322D] font-medium leading-snug">
                    I have reviewed and agree to the terms, cancellation policies, and emergency care authorization outlined above.
                  </span>
                </label>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#26322D] mb-1">
                  Digital Signature (Type Full Legal Name)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Savannah Mitchell"
                  value={signerName}
                  onChange={(e) => setSignerName(e.target.value)}
                  className="input-wedding"
                />
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setStatus('declined')}
                  className="text-xs text-[#59645E] hover:text-red-700 underline underline-offset-4 py-2"
                >
                  Decline Proposal
                </button>
                <span className="text-[#D8DED5]">|</span>
                <button
                  onClick={() => setStatus('change_requested')}
                  className="text-xs text-[#59645E] hover:text-[#26322D] underline underline-offset-4 py-2"
                >
                  Request A Change
                </button>
              </div>

              <button
                onClick={handlePayDeposit}
                disabled={!agreementSigned || !signerName.trim()}
                className="btn-accent text-sm !py-3.5 !px-8 disabled:opacity-50"
              >
                <span>Accept Agreement & Pay Deposit (${proposal.depositDue})</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
