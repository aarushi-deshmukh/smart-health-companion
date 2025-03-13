<template>
  <div class="container">
    <div class="profile-section">
      <h2>Patient Profiles</h2>
      <select v-model="selectedPatient" @change="viewProfile(selectedPatient)">
        <option v-for="(patient, index) in patients" :key="index" :value="patient">
          {{ patient.firstName }} {{ patient.lastName }}
        </option>
      </select>
      
      <div v-if="selectedPatient" class="profile">
        <h2>Profile</h2>
        <div class="profile-card">
          <p><strong>Name:</strong> {{ selectedPatient.firstName }} {{ selectedPatient.lastName }}</p>
          <p><strong>Age:</strong> {{ selectedPatient.age }}</p>
          <p><strong>Gender:</strong> {{ selectedPatient.gender }}</p>
          <p><strong>Email:</strong> <a :href="'mailto:' + selectedPatient.email">{{ selectedPatient.email }}</a></p>
          <p><strong>Phone:</strong> <a :href="'tel:' + selectedPatient.phone">{{ selectedPatient.phone }}</a></p>
          <p><strong>Medical History:</strong> <span v-if="selectedPatient.medical_history.length">{{ selectedPatient.medical_history.join(', ') }}</span>
            <span v-else>No medical history available</span></p>
        </div>
      </div>
    </div>

    <div class="form-section">
      <h2>Add Patient</h2>
      <div class="form-fields">
        <div class="name-row">
          <input v-model="newPatient.firstName" title="First Name" placeholder="First Name" required />
          <input v-model="newPatient.lastName" placeholder="Last Name" required />
        </div>
        <input v-model.number="newPatient.age" type="number" placeholder="Age" required />
        <select v-model="newPatient.gender" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input v-model="newPatient.email" type="email" placeholder="Email" required />
        <input v-model="newPatient.phone" type="tel" placeholder="Phone" required />
        <input v-model="medicalHistory" placeholder="Medical History (comma-separated)" />
        <button @click="addPatient">Add Patient</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const newPatient = ref({ firstName: "", lastName: "", age: "", gender: "", email: "", phone: "" });
  const medicalHistory = ref("");
  const patients = ref([]);
  const selectedPatient = ref(null);

  const addPatient = () => {
    const historyArray = medicalHistory.value.split(",").map(item => item.trim());
    const newEntry = { ...newPatient.value, medical_history: historyArray };
    patients.value.push(newEntry);
    selectedPatient.value = newEntry;
    newPatient.value = { firstName: "", lastName: "", age: "", gender: "", email: "", phone: "" };
    medicalHistory.value = "";
  };

  const viewProfile = (patient) => {
    selectedPatient.value = patient;
  };
</script>

<style scoped>
.container {
  display: flex;
  gap: 35px;
  align-items: flex-start;
  width: 70%;
  height: 100%;
}

h2 {
  padding: 10px;
}

.profile-section {
  width: 50%;
}

.profile-card {
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-card p {
  margin: 8px 0;
}

.profile-card a {
  color: #2F4156;
  text-decoration: none;
}

.profile-card a:hover {
  text-decoration: underline;
}

.form-section {
  flex: 1;
  width: 50%;
  background: transparent;
  border: none;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.name-row {
  display: flex;
  gap: 15px;
}

input, select {
  width: 100%;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 10px 0px;
}

button {
  background: #2F4156;
  color: white;
  padding: 6px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin: 10px 0px;
}

button:hover {
  background: #567C8D;
}
</style>