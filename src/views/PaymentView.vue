<template>
  <!-- Gene - Oct 1, 2026: PaymentView component reproducing authentic 'Pay Here / Payment Options' page (post 1801) with BPI Bank Transfer details, PayPal options, GCash, and deposit confirmation. -->
  <div class="py-12 sm:py-16 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto">
      <span class="text-xs font-bold uppercase tracking-wider text-ocean-600 bg-ocean-50 px-3.5 py-1.5 rounded-full">
        Secure Reservations
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
        Payment Options & Deposit
      </h1>
      <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        Lock in your private vehicle, guide, and tour date. Choose your preferred payment method below.
      </p>
    </div>

    <!-- Security Assurance Banner -->
    <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 text-emerald-900 text-xs sm:text-sm">
      <ShieldCheck class="w-6 h-6 text-emerald-600 shrink-0" />
      <div>
        <span class="font-bold">100% Safe & DOT-Accredited Operator:</span>
        <span class="text-emerald-800 ml-1">We issue official reservation vouchers immediately upon receipt verification. Remaining balances can be settled in cash to your driver upon tour day pickup.</span>
      </div>
    </div>

    <!-- Payment Methods Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <!-- Method 1: BPI Bank Deposit & Online Transfer (Original authentic method) -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-28 h-28 bg-red-500/5 rounded-bl-full pointer-events-none"></div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-red-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
              BPI
            </div>
            <div>
              <h2 class="text-lg font-extrabold text-slate-900">Bank Transfer (BPI)</h2>
              <p class="text-xs text-slate-500">Bank of the Philippine Islands</p>
            </div>
          </div>
          <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            0% Surcharge
          </span>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3 font-mono text-xs sm:text-sm">
          <div>
            <span class="text-slate-500 block text-[11px] font-sans">Account Name:</span>
            <span class="font-bold text-slate-900 select-all">Rosalie Flores</span>
          </div>

          <div class="pt-2 border-t border-slate-200">
            <span class="text-slate-500 block text-[11px] font-sans">Account Number:</span>
            <div class="flex items-center justify-between">
              <span class="font-black text-base sm:text-lg text-slate-900 select-all tracking-wider">1089 2872 82</span>
              <button
                type="button"
                class="px-2.5 py-1 rounded-lg text-xs font-sans font-bold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                @click="copyToClipboard('1089287282')"
              >
                Copy
              </button>
            </div>
          </div>

          <div class="pt-2 border-t border-slate-200">
            <span class="text-slate-500 block text-[11px] font-sans">Account Type:</span>
            <span class="font-semibold text-slate-800">Savings Account</span>
          </div>
        </div>

        <p class="text-xs text-slate-500 leading-relaxed">
          Transfer via BPI Mobile App, Online Banking, or over-the-counter deposit at any BPI branch nationwide.
        </p>
      </div>

      <!-- Method 2: GCash & Maya E-Wallet -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-sm">
              G
            </div>
            <div>
              <h2 class="text-lg font-extrabold text-slate-900">GCash / Maya</h2>
              <p class="text-xs text-slate-500">Instant Mobile Wallet Transfer</p>
            </div>
          </div>
          <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Instant Confirmation
          </span>
        </div>

        <div class="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3 font-mono text-xs sm:text-sm">
          <div>
            <span class="text-slate-500 block text-[11px] font-sans">GCash Registered Name:</span>
            <span class="font-bold text-slate-900 select-all">Rosalie F. / Cebu Bohol Adventure</span>
          </div>

          <div class="pt-2 border-t border-slate-200">
            <span class="text-slate-500 block text-[11px] font-sans">GCash Mobile Number:</span>
            <div class="flex items-center justify-between">
              <span class="font-black text-base sm:text-lg text-slate-900 select-all tracking-wider">0917 520 7191</span>
              <button
                type="button"
                class="px-2.5 py-1 rounded-lg text-xs font-sans font-bold bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                @click="copyToClipboard('09175207191')"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        <p class="text-xs text-slate-500 leading-relaxed">
          Open your GCash app, select "Send Money" or "Express Send", input the number above, and enter your booking reference in the message box.
        </p>
      </div>

      <!-- Method 3: PayPal & Major International Credit Cards (Authentic method) -->
      <div class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 md:col-span-2">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-sky-700 text-white font-black text-sm flex items-center justify-center shadow-sm">
              PP
            </div>
            <div>
              <h2 class="text-lg font-extrabold text-slate-900">PayPal & Credit / Debit Cards</h2>
              <p class="text-xs text-slate-500">Visa, Mastercard, American Express, Discover</p>
            </div>
          </div>
          <span class="text-xs text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 w-fit">
            * 5% standard online processing fee applies
          </span>
        </div>

        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="text-xs text-slate-600 max-w-xl">
            <p class="font-semibold text-slate-800 mb-1">International Travelers Welcome:</p>
            <p>You can pay using any debit or credit card via our secure PayPal merchant gateway. A PayPal account is not required to complete checkout.</p>
          </div>

          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" class="shrink-0">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="5EYRLDHRRL89N" />
            <button
              type="submit"
              class="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 active:scale-95 text-slate-900 font-extrabold text-sm shadow-sm transition-all flex items-center gap-2"
            >
              <CreditCard class="w-4 h-4 text-slate-900" />
              <span>Pay with PayPal / Card</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Step-by-Step Payment Instructions -->
    <div class="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6">
      <h3 class="text-xl font-extrabold text-white flex items-center gap-2">
        <CheckCircle class="w-6 h-6 text-emerald-400" />
        Reservation & Confirmation Steps
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 text-xs sm:text-sm">
        <div class="space-y-2">
          <div class="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">1</div>
          <h4 class="font-bold text-white">Book Tour Dates</h4>
          <p class="text-slate-300 text-xs">Confirm your package, date, and group size with our booking specialist.</p>
        </div>

        <div class="space-y-2">
          <div class="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">2</div>
          <h4 class="font-bold text-white">Send Deposit</h4>
          <p class="text-slate-300 text-xs">Deposit 20% – 50% reservation fee using any of the payment channels above.</p>
        </div>

        <div class="space-y-2">
          <div class="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">3</div>
          <h4 class="font-bold text-white">Send Screenshot</h4>
          <p class="text-slate-300 text-xs">Snap the deposit slip or transfer screenshot and send it via WhatsApp or email.</p>
        </div>

        <div class="space-y-2">
          <div class="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center font-bold">4</div>
          <h4 class="font-bold text-white">Receive Voucher</h4>
          <p class="text-slate-300 text-xs">Receive your confirmed digital voucher with driver name, vehicle plate, and pickup schedule.</p>
        </div>
      </div>

      <div class="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-xs text-slate-400">
          Already sent your deposit? Notify our dispatch desk immediately:
        </div>
        <a
          href="https://wa.me/639175207191?text=Hello%20Cebu%20Bohol%20Adventure!%20I%20have%20sent%20my%20deposit%20payment.%20Here%20is%20my%20proof%20of%20payment:"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-colors"
        >
          <MessageCircle class="w-4 h-4" />
          <span>Send Proof of Payment on WhatsApp</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Gene - Oct 1, 2026: Script setup for PaymentView with copy to clipboard utility and direct payment confirmation link.
import {
  ShieldCheck,
  CreditCard,
  CheckCircle,
  MessageCircle
} from 'lucide-vue-next'

function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
    alert(`Copied ${text} to clipboard!`)
  }
}
</script>
