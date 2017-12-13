import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileMockService {
    constructor() { ; }
    roles(): any[] {
        return [];
    }
    checkRoles(rolesToCheck: string[]): boolean {
        return true;
    }
}
