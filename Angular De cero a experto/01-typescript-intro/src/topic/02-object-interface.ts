const skills: string[] = ['Bash', 'Counter', 'Healing']
interface Character{
    name: string;
    hp: number;
    skill: string[];
    hometown?: string;
}
const strider:Character = {
    name: 'Strider',
    hp: 100,
    skill: skills,
    // hometown: ""
}

strider.hometown = 'Rivendell'

console.log(strider)

export {}