function introduce(language) {
    console.log(`Hello, I am a ${this.profession} who speaks ${language}.`);
}

let developer = { profession: "developer" };
let teacher = { profession: "teacher" };

introduce.call(developer, "JavaScript"); // Output: Hello, I am a developer who speaks JavaScript.
introduce.call(teacher, "English"); // Output: Hello, I am a teacher who speaks English.