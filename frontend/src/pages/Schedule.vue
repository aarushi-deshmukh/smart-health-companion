<template>
  <div>
    <label for="reportType">Select Report Type:</label>
    <select v-model="selectedReport" id="reportType">
      <option value="elisa">ELISA Reports</option>
      <option value="blood">Blood Test Reports</option>
    </select>
    
    <p>Selected Report: {{ selectedReport }}</p>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const selectedReport = ref("elisa");
</script>

<style scoped>
  div {
    font-family: Arial, sans-serif;
    padding: 10px;
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