<script setup lang="ts">
defineProps<{
  number: number,
  loan: number,
  interest: number,
  total: number,
  date: Date
}>()
</script>

<template>
  <tr class="bg-white border-b text-center">
    <th class="px-6 py-4 font-medium text-gray-600">
      {{number}}
    </th>
    <th class="px-6 py-4 font-medium text-gray-900">
      {{loan}}
    </th>
    <td class="px-6 py-4">
      {{interest}}
    </td>
    <td class="px-6 py-4">
      {{total}}
    </td>
    <td class="px-6 py-4">
      {{date}}
    </td>
  </tr>
</template>