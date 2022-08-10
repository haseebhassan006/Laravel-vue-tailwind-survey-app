<template>
  <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <router-link :to="{name:'Login'}" class="font-medium text-indigo-600 hover:text-indigo-500">Login If Already Have Account </router-link>
      
      </div>
      <form class="mt-8 space-y-6"  @submit="register" method="POST">
       {{errorMsg}}
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
            <div>
                <label for="username" class="sr-only">User Name</label>
                <input id="username" v-model="user.name" name="fullname" type="text" autocomplete="fullname" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full Name" />
            </div>
            <div>
                <label for="email" class="sr-only">Email Address</label>
                <input id="email-address" v-model="user.email" name="email" type="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="user.password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div>
            <label for="confirm-password" class="sr-only">Confirm Password</label>
            <input id="password" v-model="user.password_confirmation" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
</template>

<script setup>

import {LockClosedIcon} from '@heroicons/vue/solid'
import store from '../store'
import {useRouter} from 'vue-router'
import {ref} from 'vue'

const user = {
    name:'',
    email: '',
    password:'',
    password_confirmation:''
}

let errorMsg = ref('')
 const router = useRouter();
const register = (e) => {

    e.preventDefault();
      store.dispatch('register',user)
        .then(() => {
            router.push({
              name:'Dashboard'
           })
        }).catch(err => {
            errorMsg.value = err.response.data
            console.log(err.response)
        })
 
    }

</script>