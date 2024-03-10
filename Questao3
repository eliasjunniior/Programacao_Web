const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function readNumber(question) {
    return new Promise(resolve => {
        readline.question(question, (input) => {
            resolve(Number(input));
        });
    });
}

async function main() {
    try {
        const v1 = await readNumber("Digite o primeiro número: ");
        const v2 = await readNumber("Digite o segundo número: ");
        const v3 = await readNumber("Digite o terceiro número: ");

        console.log(`Os números digitados são: ${v1}, ${v2}, ${v3}`);
    } finally {
        readline.close();
    }
}

main();
