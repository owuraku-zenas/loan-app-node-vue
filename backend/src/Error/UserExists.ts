class UserExists extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UserExists';
    }
}