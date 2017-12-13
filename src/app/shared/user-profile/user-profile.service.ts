import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
    roles(): string[] {
        const roles: string[] = JSON.parse(localStorage.getItem('profile')).roles as string[];
        return roles || [];
    }

    checkRoles(rolesToCheck: string[]): boolean {
        if (!rolesToCheck || !rolesToCheck.length)
            return false;

        const userRoles = this.roles();
        let allow: boolean;

        for(let role of rolesToCheck) {
            if (userRoles.indexOf(role) >= 0) {
                allow = true;
                break;
            }
        }

        return allow;
    }
}
