<template>
  <div>
    <label for="reportType">Select Report Type:</label>
    <select v-model="selectedReport" id="reportType">
      <option value="">-- Select --</option>
      <option value="blood">Complete Blood Count (CBC)</option>
      <option value="elisa">ELISA Test</option>
    </select>

    <p>Selected Report: {{ selectedReport }}</p>

    <!-- Conditional Rendering for Forms -->
    <BloodReportForm v-if="selectedReport === 'blood'" />
    <ElisaReportForm v-if="selectedReport === 'elisa'" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BloodReportForm from "@/components/BloodReportForm.vue";
import ElisaReportForm from "@/components/ELISA.vue";

const selectedReport = ref("");
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
  padding: 20px;
}

label {
  font-weight: bold;
}

select {
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
