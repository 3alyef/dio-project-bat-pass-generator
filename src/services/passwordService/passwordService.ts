export default function passwordService(passLength: number): string {
    let newPass: string = '';
    const characters: string = "aAbcdefghijklmnopqrstuvwxyzZ123456789!@";
    
    for(let i = 0; i < passLength; i++ ){
        newPass += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return newPass;
}