var historico = []; // Array para armazenar os resultados das conversões

function convertDNA() {
    var dnaSequencia = document.getElementById("dnaInput").value.toUpperCase(); // Obtém a sequência de DNA
    
    // Verifica se a sequência contém caracteres válidos
    if (/[^ATCG]/.test(dnaSequencia)) {
        alert("Por favor, insira apenas os caracteres A, T, C e G.");
        return;
    }

    var dnaOposto = ""; // Variável para armazenar a sequência do DNA oposto
    var rnaSequencia = ""; // Variável para armazenar a sequência de RNA-m

    // Percorre a sequência de DNA e realiza as conversões para oposto e RNA-m
    for (var i = 0; i < dnaSequencia.length; i++) {
        var base = dnaSequencia[i];
        
        // Conversão para DNA oposto
        if (base == 'A') {
            dnaOposto += 'T'; // A adenina vira timina
        } else if (base == 'T') {
            dnaOposto += 'A'; // A timina vira adenina
        } else if (base == 'C') {
            dnaOposto += 'G'; // A citosina vira guanina
        } else if (base == 'G') {
            dnaOposto += 'C'; // A guanina vira citosina
        }
        
        // Conversão para RNA-m
        if (base == 'A') {
            rnaSequencia += 'A'; // Adenina permanece igual no RNA
        } else if (base == 'T') {
            rnaSequencia += 'U'; // Timina vira Uracila no RNA
        } else if (base == 'C') {
            rnaSequencia += 'C'; // Citosina permanece igual no RNA
        } else if (base == 'G') {
            rnaSequencia += 'G'; // Guanina permanece igual no RNA
        }
    }

    // Exibe os resultados de DNA oposto e RNA-m
    document.getElementById("resultadoOposto").textContent = dnaOposto;
    document.getElementById("resultadoRNA").textContent = rnaSequencia;

    // Adiciona os resultados ao histórico
    historico.push("DNA Oposto: " + dnaOposto);
    historico.push("RNA-m: " + rnaSequencia);

    // Atualiza o histórico na página
    var listaHistorico = document.getElementById("historico");
    listaHistorico.innerHTML = ""; // Limpa a lista antes de adicionar novos itens
    
    for (var i = 0; i < historico.length; i++) {
        var li = document.createElement("li");
        li.textContent = "Conversão " + (i + 1) + ": " + historico[i];
        listaHistorico.appendChild(li);
    }
}