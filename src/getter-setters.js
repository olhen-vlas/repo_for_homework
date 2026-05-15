const userProfile = {
    personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    },
    job: {
        title: 'Developer',
        experience: 3
    },

    get fullName() {
        return `${this.personalInfo.firstName} ${this.personalInfo.lastName}`;
    },

    set fullName(name) {
        const parts = name.split(' ');
        if (parts.length >= 2) {
            this.personalInfo.firstName = parts[0];
            this.personalInfo.lastName = parts[1];
        }
    },

    get experienceInfo() {
        return `${this.job.title} with ${this.job.experience} years of experience`;
    },

    set yearsOfExperience(years) {
        if (years >= 0) {
            this.job.experience = years;
        }
    },

    getSummary() {
        return `User ${this.fullName} works as a ${this.experienceInfo}.`;
    }
};

console.log('Initial summary:', userProfile.getSummary());

userProfile.fullName = 'Olha Vlasenko';
userProfile.yearsOfExperience = 5;

console.log('Updated summary:', userProfile.getSummary());
console.log('Full name via getter:', userProfile.fullName);
