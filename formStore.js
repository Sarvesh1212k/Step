
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    step: 1,
    name: '',
    email: '',
    phone: ''
  }),

  actions: {
    next() { this.step++ },
    back() { this.step-- },
    reset() {
      this.step = 1
      this.name = ''
      this.email = ''
      this.phone = ''
    }
  }
})
