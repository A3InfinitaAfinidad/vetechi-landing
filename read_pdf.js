const fs = require('fs');
const pdf = require('pdf-parse');

async function readPdfs() {
    console.log('Reading first PDF...');
    let dataBuffer1 = fs.readFileSync('c:\\Users\\aizpr\\vetechi-landing\\VETECHI_Documentacion_Institucional_2026.pdf');
    let data1 = await pdf(dataBuffer1);
    console.log('--- VETECHI_Documentacion_Institucional_2026.pdf ---');
    console.log(data1.text);
    console.log('\n\n======================================================\n\n');

    console.log('Reading second PDF...');
    let dataBuffer2 = fs.readFileSync('c:\\Users\\aizpr\\vetechi-landing\\VETECHI · Hospital Veterinario Chiriquí · Emergencias 24_7.pdf');
    let data2 = await pdf(dataBuffer2);
    console.log('--- VETECHI · Hospital Veterinario Chiriquí · Emergencias 24_7.pdf ---');
    console.log(data2.text);
}

readPdfs().catch(console.error);
