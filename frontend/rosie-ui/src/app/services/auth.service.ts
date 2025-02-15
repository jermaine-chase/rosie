import { Injectable } from '@angular/core';
import { Amplify  } from 'aws-amplify';
import { getCurrentUser, signIn, signOut } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {
    /*Amplify.configure({
      Auth: {
        // region: 'your-aws-region',
        userPoolId: 'your-user-pool-id',
        userPoolWebClientId: 'your-client-id',
      },
    });*/
  }

  async getCurrentUser() {
    try {
      return await getCurrentUser();
    } catch (error) {
      console.error('Error getting user:', error);
      return null;
    }
  }

  async login(username: string, password: string) {
    try {
      const response = await signIn({ username, password });
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut();
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }
}
