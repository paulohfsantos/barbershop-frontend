import { ref } from 'vue';
import { defineStore } from 'pinia';
import { AuthService } from '../services/authService';
import { useRouter } from 'vue-router';
import { killToken, killUser, saveToken } from '../common/headerAuth';

export const useAuth = defineStore('auth', () => {
  const authService = new AuthService();
  const router = useRouter()
  const token = ref(localStorage.getItem('token') || '')

  async function login(email: string, password: string) {
    const response = await authService.login(email, password)
    token.value = response.access_token

    saveToken(token.value)
  }

  async function register(name: string, email: string, password: string) {
    await authService.register(name, email, password)
    
    if (token.value !== '') {
      router.push('/login')
    }
  }

  const logout = () => {
    token.value = ''
    killToken()
    killUser()
  }

  return {
    token,
    login,
    register,
    logout
  }

})