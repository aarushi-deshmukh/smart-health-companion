<template>
  <div class="form-container">
    <h2>Complete Blood Count (CBC) Report</h2>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="form-group">
          <label>Hemoglobin (g/dL):</label>
          <input v-model="hemoglobin" type="number" step="0.1" required />
          <p :class="checkRange(hemoglobin, 13, 17)">{{ hemoglobinStatus }}</p>
        </div>

        <div class="form-group">
          <label>Total RBC Count (mill/cumm):</label>
          <input v-model="rbcCount" type="number" step="0.1" required />
          <p :class="checkRange(rbcCount, 4.5, 5.5)">{{ rbcCountStatus }}</p>
        </div>

        <div class="form-group">
          <label>Packed Cell Volume (PCV) (%):</label>
          <input v-model="pcv" type="number" step="0.1" required />
          <p :class="checkRange(pcv, 40, 50)">{{ pcvStatus }}</p>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Mean Corpuscular Volume (MCV) (fL):</label>
          <input v-model="mcv" type="number" step="0.1" required />
          <p :class="checkRange(mcv, 83, 101)">{{ mcvStatus }}</p>
        </div>

        <div class="form-group">
          <label>Total WBC Count (cumm):</label>
          <input v-model="wbcCount" type="number" required />
          <p :class="checkRange(wbcCount, 4000, 11000)">{{ wbcCountStatus }}</p>
        </div>

        <div class="form-group">
          <label>Neutrophils (%):</label>
          <input v-model="neutrophils" type="number" required />
          <p :class="checkRange(neutrophils, 50, 62)">{{ neutrophilsStatus }}</p>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Lymphocytes (%):</label>
          <input v-model="lymphocytes" type="number" required />
          <p :class="checkRange(lymphocytes, 20, 40)">{{ lymphocytesStatus }}</p>
        </div>

        <div class="form-group">
          <label>Eosinophils (%):</label>
          <input v-model="eosinophils" type="number" required />
          <p :class="checkRange(eosinophils, 0, 6)">{{ eosinophilsStatus }}</p>
        </div>

        <div class="form-group">
          <label>Monocytes (%):</label>
          <input v-model="monocytes" type="number" required />
          <p :class="checkRange(monocytes, 0, 10)">{{ monocytesStatus }}</p>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>Basophils (%):</label>
          <input v-model="basophils" type="number" required />
          <p :class="checkRange(basophils, 0, 2)">{{ basophilsStatus }}</p>
        </div>

        <div class="form-group">
          <label>Platelet Count (cumm):</label>
          <input v-model="plateletCount" type="number" required />
          <p :class="checkRange(plateletCount, 150000, 410000)">{{ plateletCountStatus }}</p>
        </div>

        <div class="form-group">
          <label>ESR (mm/hr):</label>
          <input v-model="esr" type="number" required />
          <p :class="checkRange(esr, 0, 15)">{{ esrStatus }}</p>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const hemoglobin = ref("");
const rbcCount = ref("");
const pcv = ref("");
const mcv = ref("");
const wbcCount = ref("");
const neutrophils = ref("");
const lymphocytes = ref("");
const eosinophils = ref("");
const monocytes = ref("");
const basophils = ref("");
const plateletCount = ref("");
const esr = ref("");

const checkRange = (value, min, max) => {
  if (value === "") return "";
  return value < min || value > max ? "out-of-range" : "normal";
};

const hemoglobinStatus = computed(() => (checkRange(hemoglobin.value, 13, 17) === "out-of-range" ? "Low" : "Normal"));
const rbcCountStatus = computed(() => (checkRange(rbcCount.value, 4.5, 5.5) === "out-of-range" ? "Abnormal" : "Normal"));
const pcvStatus = computed(() => (checkRange(pcv.value, 40, 50) === "out-of-range" ? "High" : "Normal"));
const mcvStatus = computed(() => (checkRange(mcv.value, 83, 101) === "out-of-range" ? "Abnormal" : "Normal"));
const wbcCountStatus = computed(() => (checkRange(wbcCount.value, 4000, 11000) === "out-of-range" ? "Abnormal" : "Normal"));
const neutrophilsStatus = computed(() => (checkRange(neutrophils.value, 50, 62) === "out-of-range" ? "Abnormal" : "Normal"));
const lymphocytesStatus = computed(() => (checkRange(lymphocytes.value, 20, 40) === "out-of-range" ? "Abnormal" : "Normal"));
const eosinophilsStatus = computed(() => (checkRange(eosinophils.value, 0, 6) === "out-of-range" ? "Abnormal" : "Normal"));
const monocytesStatus = computed(() => (checkRange(monocytes.value, 0, 10) === "out-of-range" ? "Abnormal" : "Normal"));
const basophilsStatus = computed(() => (checkRange(basophils.value, 0, 2) === "out-of-range" ? "Abnormal" : "Normal"));
const plateletCountStatus = computed(() => (checkRange(plateletCount.value, 150000, 410000) === "out-of-range" ? "Borderline" : "Normal"));
const esrStatus = computed(() => (checkRange(esr.value, 0, 15) === "out-of-range" ? "Abnormal" : "Normal"));

const submitForm = () => {
  alert("CBC Report Submitted!");
};
</script>

<style scoped>
.form-container {
  margin-top: 20px;
  padding: 15px;
  max-width: 100%;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.form-group {
  flex: 1;
  margin-right: 10px;
}

.form-group:last-child {
  margin-right: 0;
}

input {
  display: block;
  margin: 5px 0;
  padding: 5px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
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

.normal {
  color: green;
}

.out-of-range {
  color: red;
  font-weight: bold;
}
</style>
