<template>
  <div>
    <div
      id="term-modal"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-[99] hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-lg max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex items-center justify-center pt-5 border-b rounded-t">
            <h3
              :class="
                'font-medium text-gold font-katibeh self-center text-2xl ' +
                (language == 'EN' ? 'lg:text-4xl' : 'lg:text-2xl')
              "
            >
              {{
                language == 'EN'
                  ? 'Policy and Terms & Conditions'
                  : 'លក្ខខណ្ឌនៃការប្រើប្រាស់'
              }}
            </h3>
          </div>
          <!-- Modal body -->
          <div class="p-6 space-y-6 px-6 lg:px-9 text-xs lg:text-sm">
            <ul class="list-disc">
              <p class="font-bold font-sans">CHECK-IN & CHECK-OUT POLICY:</p>
              <li>
                <span class="text-red-600">NOTE: </span> Check-in time is after
                14:00 pm and check-out time is 11:00 am. Late check-out can be
                arranged in advance with the front desk based on availability.
                Any late check-out not confirmed by the front desk will be
                subject to a charge of a half-day rate before 18:00 pm and a day
                rate after 18:00 pm.
              </li>
              <li>A $50 Cash Deposit will be collected upon check-in.</li>
              <li>
                A government-issued photo ID, credit card, or cash deposit is
                required at check-in to cover incidental charges.
              </li>
              <li>
                Bringing in outside food and own speaker is not permitted. No
                Pet Policy inside the rooms
              </li>
            </ul>
            <ul class="list-disc">
              <p class="font-bold font-sans">
                CANCELLATION, NO SHOW & EARLY DEPARTURE POLICY:
              </p>
              <li>
                Cancellations made less than 48 hours prior to the check-in date
                will be charged one night's room rate.
              </li>
              <li>
                No Show: For "no-show" guaranteed reservations, the full night's
                room rate will be charged.
              </li>
              <li>
                In case of early check-out/shortened stay on the first day of
                stay, 100% of the total room rate for the entire shortened stay
                will be charged.
              </li>
              <li>
                {{
                  language == 'EN'
                    ? 'Policy and Terms & conditions are subject to change without prior notice.'
                    : 'យើងរក្សាសិទ្ធិក្នុងការផ្លាស់ប្តូរលក្ខខណ្ឌនៃការប្រើប្រាស់ដោយមិនចាំបាច់ប្រាប់ដំណឹងជាមុន'
                }}
              </li>
            </ul>
          </div>
          <!-- Modal footer -->
          <div
            class="flex justify-center items-center p-3 space-x-2 border-t border-gray-200 rounded-b"
          >
            <button
              data-modal-hide="term-modal"
              type="button"
              class="text-white bg-primary rounded-lg border text-sm font-medium px-5 py-2.5"
            >
              {{ language == 'EN' ? 'Close' : 'បិទ' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const language = useLanguague();
</script>

<style>
li {
  hyphens: none;
}
</style>
