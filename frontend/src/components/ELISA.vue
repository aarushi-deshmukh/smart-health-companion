<template>
  <div class="form-container">
    <h2>ELISA Test Report</h2>
    <form @submit.prevent="submitForm">
      <label>Antibody Level (U/mL):</label>
      <input v-model="antibodyLevel" type="number" required />

      <label>Sample Type:</label>
      <select v-model="sampleType">
        <option value="serum">Serum</option>
        <option value="plasma">Plasma</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const antibodyLevel = ref("");
const sampleType = ref("serum");

const submitForm = () => {
  alert(`ELISA Report Submitted:\nAntibody Level: ${antibodyLevel.value} U/mL\nSample Type: ${sampleType.value}`);
};
</script>

<style scoped>
.form-container {
  margin-top: 20px;
  padding: 15px;
  max-width: 100%;
}

input, select {
  display: block;
  margin: 8px 0;
  padding: 5px;
  width: 100%;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
