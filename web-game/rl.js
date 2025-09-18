// Web version of the readline utility
export class WebReadline {
    constructor(terminal) {
        this.terminal = terminal;
    }

    async question(questionText) {
        return await this.terminal.askQuestion(questionText);
    }
}

export const createWebReadline = (terminal) => {
    return new WebReadline(terminal);
};