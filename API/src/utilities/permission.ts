import bitwise from 'bitwise'

const Access = {
    default: 1,
    administrator: 8,
    owner: 16,
}

// Create Default User Permissions Object
export class User {
    name: string;
    permission: number;

    constructor(name: string, permission: number = 0) {
        this.name = name,
        this.permission = permission
    }
    getPermissions(){
        return {
            [Access.default]: !! (this.permission & Access.default),
            [Access.administrator]: !! (this.permission & Access.administrator),
            [Access.owner]: !! (this.permission & Access.owner)
        }
    }
}
