import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
    roles(): any[] {
        const roles: any[] = JSON.parse(localStorage.getItem('profile')).roles as any[];
        return roles || [];
    }
}
