
<script setup>
import { useFormStore } from './stores/formStore'

const form = useFormStore()

function submit() {
  alert('Registration Successful!')
  form.reset()
}
</script>

<template>
  <div class="container">
    <h1>Registration Form</h1>
    <h3>Step {{ form.step }} of 3</h3>

    <div v-if="form.step == 1">
      <h2>Personal Details</h2>
      <input v-model="form.name" placeholder="Enter Name">
      <button @click="form.next()" :disabled="!form.name">Next</button>
    </div>

    <div v-if="form.step == 2">
      <h2>Contact Details</h2>
      <input v-model="form.email" placeholder="Enter Email">
      <input v-model="form.phone" placeholder="Enter Phone">
      <button @click="form.back()">Back</button>
      <button @click="form.next()" :disabled="!form.email || !form.phone">Next</button>
    </div>

    <div v-if="form.step == 3">
      <h2>Summary</h2>
      <p>Name: {{ form.name }}</p>
      <p>Email: {{ form.email }}</p>
      <p>Phone: {{ form.phone }}</p>
      <button @click="form.back()">Back</button>
      <button @click="submit()">Submit</button>
    </div>
  </div>
</template>

<style>
.container {
  text-align: center;
  margin: 50px;
}
input {
  display: block;
  padding: 10px;
  margin: 15px auto;
}
button {
  padding: 10px;
  margin: 5px;
  cursor: pointer;
}
</style>
