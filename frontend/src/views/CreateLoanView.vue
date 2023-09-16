<script lang="ts">

import router from "@/router";

export default {
  data() {
    return {
      amount: "",
      id: ""
    }
  },
  methods: {
    async createLoan() {
      await fetch("http://localhost:8000/loan", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          amount: this.amount,
          customerId: this.id,
          interest: 5,
          total: this.calcTotal(),
          status: "APPROVED"
        })
      }).then(async response => {
        const data: {message: string} = await response.json()
        if (!response.ok) {
          alert(data.message)
          return
        }
        await router.push({path: "/"})

      }).catch((e) => {
        alert(e)
        return
      })
    },
    calcSimpleInterest() {
      return this.amount * 5 * 1 / 100
    },
    calcTotal() {
      return this.calcSimpleInterest() + this.amount
    }
  }
}
</script>

<template>
  <div class="h-screen">
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="createLoan">
          <div>
            <div class="flex items-center justify-center">
              <label for="id" class="block text-sm font-medium leading-6 text-gray-900">Customer ID</label>
            </div>
            <div class="mt-2">
              <input id="id" v-model="id" name="id" type="text" autocomplete="id" required class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-center">
              <label for="amount" class="block text-sm font-medium leading-6 text-gray-900">Amount</label>
            </div>
            <div class="mt-2">
              <input id="amount" v-model="amount" name="amount" type="number" autocomplete="amount" required class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Record</button>
          </div>
        </form>

        <p class="mt-5 text-center text-sm text-gray-500">
          <a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Cancel</a>
        </p>
      </div>
    </div>
  </div>
</template>