<script setup lang="ts">
import LoanRecord from "@/components/LoanRecord.vue";
import {onMounted, ref} from "vue";

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  maritalStatus: string;
  employmentStatus: string;
  employer: string;
  dateOfBirth: Date;
  idCard: string;
  address: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  loans: Loan[];
}

export interface Loan {
  id: number;
  amount: number;
  interest: number;
  total: number;
  customerId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}


let customers = ref([]);
onMounted(async ()  => {
  try {
    fetch('http://localhost:8000/customer', {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    }).then(response => {
      return response.json()
    }).then(data => {
      customers.value = data.customers
      console.log(customers.value)
    })
  } catch (e) {

  }
})


</script>

<template>

  <div v-for="customer in customers" class="relative overflow-x-auto sm:rounded-lg flex flex-col gap-5 my-5">
      <section class="font-semibold text-gray-900 bg-white w-[100%] items-center">
        <div class="flex justify-between">
          <h2 class=" text-lg">
           Name: {{ customer!.firstName }} {{ customer!.lastName }}
          </h2>
          <div>
            <p>ID: {{ customer!.idCard }}</p>
          </div>
        </div>

      </section>
    <table class="w-full text-sm text-left text-gray-500 shadow-md">
        <thead class="text-xs text-gray-700 bg-gray-50 text-center">
        <tr>
          <th scope="col" class="px-6 py-3 sr-only">
            No.
          </th>
          <th scope="col" class="px-6 py-3">
            Loan (Ghc)
          </th>
          <th scope="col" class="px-6 py-3">
            Simple Interest (Ghc)
          </th>
          <th scope="col" class="px-6 py-3">
            Total Amount (Ghc)
          </th>
          <th scope="col" class="px-6 py-3">
            Date
          </th>
        </tr>
        </thead>
        <tbody>
        <LoanRecord v-for="loan in customer.loans" :number="loan.id" :loan="loan.amount" :interest="loan.interest"
                    :total="loan.total" :date="loan.createdAt"/>

        </tbody>
    </table>
  </div>
</template>