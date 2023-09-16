<script setup lang="ts">
import LoanRecords from "@/components/LoanRecords.vue";
import {onMounted, ref} from "vue";
import router from "@/router";

const message = ref("")

onMounted(async () => {
  try {
    fetch('http://localhost:8000/user', {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    }).then(response => {
      return response.json()
    })
        .then(data => message.value = data.user.email)
  } catch (e) {

  }
})

const signOut = async () => {
  try {
    fetch('http://localhost:8000/signout', {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    }).then(async response => {
      if (response.ok) {
        alert("Logout Successful")
        await router.push("/signin")
      }

    })
  } catch (e) {
    alert(e)
  }

}

</script>

<template>
  <div class="max-w-3xl mx-auto min-h-screen p-2 sm:p-8 flex flex-col gap-5">
    <header class="flex justify-between items-center">
      <div>
        <h1 class="font-bold text-2xl">Company XYZ</h1>
      </div>
      <div class="flex items-center gap-5">
        <span>{{ message }}</span>
        <button @click="signOut" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded">Sign
          Out
        </button>
      </div>
    </header>
    <main class="flex flex-col gap-2">
      <div class="w-full flex flex-col gap-2 text-center">
        <a class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded w-full" href="/loan">Record Loan</a>
        <a class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded w-full" href="/customer/register">Register Customer</a>
      </div>
      <LoanRecords/>
    </main>
  </div>
</template>
