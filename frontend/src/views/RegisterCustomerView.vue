<script lang="ts">
import router from "@/router";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      maritalStatus: "SINGLE",
      employer: "",
      employmentStatus: "EMPLOYED",
      dateOfBirth: "",
      idCard: "",
      address: "",
      phoneNumber: ""
    }
  },
  methods: {
    async createCustomer() {
      await fetch("http://localhost:8000/customer", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          maritalStatus: this.maritalStatus,
          employer: this.employer,
          employmentStatus: this.employmentStatus,
          dateOfBirth: this.dateOfBirth,
          idCard: this.idCard,
          address: this.address,
          phoneNumber: this.phoneNumber
        })
      }).then(async response => {
        const data: { message: string } = await response.json()
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
  }
}

</script>

<template>
  <div class="h-screen">

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="text-center text-2xl font-bold tracking-tight text-gray-900">Customer Registration</h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="createCustomer">
          <div>
            <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">First Name</label>
            <div class="mt-2">
              <input id="fname" v-model="firstName" name="fname" type="text" autocomplete="names" required
                     class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "/>
            </div>
          </div>

          <div>
            <label for="lname" class="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
            <div class="mt-2">
              <input id="lname" v-model="lastName" name="lname" type="text" autocomplete="names" required
                     class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "/>
            </div>
          </div>

          <div>
            <label for="marital-status" class="block text-sm font-medium leading-6 text-gray-900">Marital Status</label>
            <div class="mt-2">
              <select id="marital-status" v-model="maritalStatus" name="marital-status" type="text"
                      autocomplete="marital-status" required
                      class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm ">
                <option value="SINGLE">Single</option>
                <option value="MARRIED">Married</option>
                <option value="DIVORCED">Divorced</option>
                <option value="WIDOWED">Widowed</option>
              </select>
            </div>
          </div>

          <div>
            <label for="employment-status" class="block text-sm font-medium leading-6 text-gray-900">Employment
              Status</label>
            <div class="mt-2">
              <select id="employment-status" v-model="employmentStatus" name="employment-status" type="text" autocomplete="employment-status"
                      required=""
                      class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm ">
                <option value="EMPLOYED">Employed</option>
                <option value="UNEMPLOYED">Unemployed</option>
                <option value="SELF_EMPLOYED">Self-Employed</option>
                <option value="RETIRED">Retired</option>
              </select>
            </div>
          </div>

          <div>
            <label for="employer-name" class="block text-sm font-medium leading-6 text-gray-900">Name of
              Employer</label>
            <div class="mt-2">
              <input id="employer-name" v-model="employer" name="employer-name" type="text" autocomplete="employer-name" required
                     class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "/>
            </div>
          </div>

          <div>
            <label for="dob" class="block text-sm font-medium leading-6 text-gray-900">Date of Birth</label>
            <div class="mt-2">
              <input id="dob" v-model="dateOfBirth" name="dob" type="date" autocomplete="dob" required
                     class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "/>
            </div>
          </div>

          <div>
            <label for="id" class="block text-sm font-medium leading-6 text-gray-900">ID Card</label>
            <div class="mt-2">
              <input id="id" v-model="idCard" name="id" type="text" autocomplete="id" required
                     class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "/>
            </div>
          </div>

          <div>
            <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
              <input id="address" v-model="address" name="address" type="text" autocomplete="address" required
                     class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "/>
            </div>
          </div>

          <div>
            <label for="number" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
            <div class="mt-2">
              <input id="number" v-model="phoneNumber" name="number" type="tel" autocomplete="number" required
                     class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm "/>
            </div>
          </div>

          <div>
            <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Register Customer
            </button>
          </div>
        </form>
        <p class="mt-5 text-center text-sm text-gray-500">
          <a href="/" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Cancel</a>
        </p>
      </div>
    </div>
  </div>
</template>