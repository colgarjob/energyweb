// ============================================
// CALCULADORAS DE ENERGÍA - 15 TIPOS
// ============================================

// ============================================
// 1. Energía Cinética
// ============================================
function calcularCinetica() {
    const m = parseFloat(document.getElementById('cinetica-masa').value);
    const v = parseFloat(document.getElementById('cinetica-velocidad').value);
    
    if (isNaN(m) || isNaN(v) || m <= 0 || v < 0) {
        document.getElementById('cinetica-resultado').innerHTML = '❌ Ingresa valores válidos (masa > 0, velocidad ≥ 0).';
        return;
    }
    
    const Ec = 0.5 * m * v * v;
    document.getElementById('cinetica-resultado').innerHTML = `
        ⚡ Energía Cinética = <strong>${Ec.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(Ec/1000).toFixed(4)} kJ)
        </span>
    `;
}

// ============================================
// 2. Energía Potencial Gravitatoria
// ============================================
function calcularPotencialGravitatoria() {
    const m = parseFloat(document.getElementById('gravitatoria-masa').value);
    const h = parseFloat(document.getElementById('gravitatoria-altura').value);
    const g = parseFloat(document.getElementById('gravitatoria-gravedad').value) || 9.8;
    
    if (isNaN(m) || isNaN(h) || m <= 0 || h < 0) {
        document.getElementById('gravitatoria-resultado').innerHTML = '❌ Ingresa valores válidos (masa > 0, altura ≥ 0).';
        return;
    }
    
    const Ep = m * g * h;
    document.getElementById('gravitatoria-resultado').innerHTML = `
        🌍 Energía Potencial Gravitatoria = <strong>${Ep.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(Ep/1000).toFixed(4)} kJ) | g = ${g.toFixed(1)} m/s²
        </span>
    `;
}

// ============================================
// 3. Energía Potencial Elástica
// ============================================
function calcularPotencialElastica() {
    const k = parseFloat(document.getElementById('elastica-k').value);
    const x = parseFloat(document.getElementById('elastica-x').value);
    
    if (isNaN(k) || isNaN(x) || k <= 0 || x < 0) {
        document.getElementById('elastica-resultado').innerHTML = '❌ Ingresa valores válidos (k > 0, x ≥ 0).';
        return;
    }
    
    const Ee = 0.5 * k * x * x;
    document.getElementById('elastica-resultado').innerHTML = `
        🏹 Energía Potencial Elástica = <strong>${Ee.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            k = ${k.toFixed(1)} N/m | x = ${x.toFixed(2)} m
        </span>
    `;
}

// ============================================
// 4. Energía Mecánica
// ============================================
function calcularMecanica() {
    const m = parseFloat(document.getElementById('mecanica-masa').value);
    const v = parseFloat(document.getElementById('mecanica-velocidad').value);
    const h = parseFloat(document.getElementById('mecanica-altura').value);
    const g = parseFloat(document.getElementById('mecanica-gravedad').value) || 9.8;
    
    if (isNaN(m) || isNaN(v) || isNaN(h) || m <= 0 || v < 0 || h < 0) {
        document.getElementById('mecanica-resultado').innerHTML = '❌ Ingresa valores válidos.';
        return;
    }
    
    const Ec = 0.5 * m * v * v;
    const Ep = m * g * h;
    const Em = Ec + Ep;
    
    document.getElementById('mecanica-resultado').innerHTML = `
        ⚡ Energía Mecánica Total = <strong>${Em.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            Cinética: ${Ec.toFixed(2)} J | Potencial: ${Ep.toFixed(2)} J
        </span>
    `;
}

// ============================================
// 5. Energía Térmica (Calor)
// ============================================
function calcularTermica() {
    const m = parseFloat(document.getElementById('termica-masa').value);
    const c = parseFloat(document.getElementById('termica-calor-especifico').value);
    const ΔT = parseFloat(document.getElementById('termica-delta-t').value);
    
    if (isNaN(m) || isNaN(c) || isNaN(ΔT) || m <= 0 || c <= 0) {
        document.getElementById('termica-resultado').innerHTML = '❌ Ingresa valores válidos.';
        return;
    }
    
    const Q = m * c * ΔT;
    document.getElementById('termica-resultado').innerHTML = `
        🔥 Energía Térmica (Calor) = <strong>${Q.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(Q/1000).toFixed(4)} kJ) | ΔT = ${ΔT.toFixed(1)} °C
        </span>
    `;
}

// ============================================
// 6. Energía Eléctrica
// ============================================
function calcularElectrica() {
    const V = parseFloat(document.getElementById('electrica-voltaje').value);
    const I = parseFloat(document.getElementById('electrica-corriente').value);
    const t = parseFloat(document.getElementById('electrica-tiempo').value);
    
    if (isNaN(V) || isNaN(I) || isNaN(t) || V <= 0 || I < 0 || t < 0) {
        document.getElementById('electrica-resultado').innerHTML = '❌ Ingresa valores válidos.';
        return;
    }
    
    const Ee = V * I * t;
    document.getElementById('electrica-resultado').innerHTML = `
        ⚡ Energía Eléctrica = <strong>${Ee.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(Ee/3600000).toFixed(6)} kWh) | V = ${V.toFixed(1)} V | I = ${I.toFixed(2)} A | t = ${t.toFixed(1)} s
        </span>
    `;
}

// ============================================
// 7. Energía Radiante (Fotones)
// ============================================
function calcularRadiante() {
    const f = parseFloat(document.getElementById('radiante-frecuencia').value);
    const h = 6.626e-34; // Constante de Planck
    
    if (isNaN(f) || f <= 0) {
        document.getElementById('radiante-resultado').innerHTML = '❌ Ingresa una frecuencia válida (> 0 Hz).';
        return;
    }
    
    const E = h * f;
    const eV = E / 1.602e-19; // Convertir a electronvoltios
    
    document.getElementById('radiante-resultado').innerHTML = `
        🌈 Energía del Fotón = <strong>${E.toExponential(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${eV.toFixed(2)} eV) | f = ${f.toExponential(2)} Hz
        </span>
    `;
}

// ============================================
// 8. Energía Luminosa (Potencia lumínica)
// ============================================
function calcularLuminosa() {
    const P = parseFloat(document.getElementById('luminosa-potencia').value);
    const t = parseFloat(document.getElementById('luminosa-tiempo').value);
    
    if (isNaN(P) || isNaN(t) || P <= 0 || t < 0) {
        document.getElementById('luminosa-resultado').innerHTML = '❌ Ingresa valores válidos.';
        return;
    }
    
    const E = P * t;
    document.getElementById('luminosa-resultado').innerHTML = `
        💡 Energía Luminosa = <strong>${E.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(E/3600000).toFixed(6)} kWh) | P = ${P.toFixed(1)} W | t = ${t.toFixed(1)} s
        </span>
    `;
}

// ============================================
// 9. Energía Sonora (Intensidad)
// ============================================
function calcularSonora() {
    const I = parseFloat(document.getElementById('sonora-intensidad').value);
    const A = parseFloat(document.getElementById('sonora-area').value);
    const t = parseFloat(document.getElementById('sonora-tiempo').value);
    
    if (isNaN(I) || isNaN(A) || isNaN(t) || I < 0 || A <= 0 || t < 0) {
        document.getElementById('sonora-resultado').innerHTML = '❌ Ingresa valores válidos.';
        return;
    }
    
    const E = I * A * t;
    document.getElementById('sonora-resultado').innerHTML = `
        🔊 Energía Sonora = <strong>${E.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            I = ${I.toFixed(2)} W/m² | A = ${A.toFixed(2)} m² | t = ${t.toFixed(1)} s
        </span>
    `;
}

// ============================================
// 10. Energía Nuclear (Fisión)
// ============================================
function calcularNuclear() {
    const masaPerdida = parseFloat(document.getElementById('nuclear-masa').value);
    const c = 3e8; // Velocidad de la luz
    
    if (isNaN(masaPerdida) || masaPerdida <= 0) {
        document.getElementById('nuclear-resultado').innerHTML = '❌ Ingresa una masa válida (> 0 kg).';
        return;
    }
    
    const E = masaPerdida * c * c;
    document.getElementById('nuclear-resultado').innerHTML = `
        ☢️ Energía Nuclear = <strong>${E.toExponential(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(E/4.184e15).toFixed(6)} megatones de TNT) | Δm = ${masaPerdida.toFixed(6)} kg
        </span>
    `;
}

// ============================================
// 11. Energía Gravitacional (Universal)
// ============================================
function calcularGravitacional() {
    const M = parseFloat(document.getElementById('gravitacional-masa1').value);
    const m = parseFloat(document.getElementById('gravitacional-masa2').value);
    const r = parseFloat(document.getElementById('gravitacional-distancia').value);
    const G = 6.674e-11;
    
    if (isNaN(M) || isNaN(m) || isNaN(r) || M <= 0 || m <= 0 || r <= 0) {
        document.getElementById('gravitacional-resultado').innerHTML = '❌ Ingresa valores válidos (masas > 0, distancia > 0).';
        return;
    }
    
    const Eg = - (G * M * m) / r;
    document.getElementById('gravitacional-resultado').innerHTML = `
        🌌 Energía Gravitacional = <strong>${Eg.toExponential(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (El signo negativo indica atracción) | r = ${r.toFixed(2)} m
        </span>
    `;
}

// ============================================
// 12. Energía de Masa (E=mc²)
// ============================================
function calcularMasa() {
    const m = parseFloat(document.getElementById('masa-masa').value);
    const c = 3e8;
    
    if (isNaN(m) || m <= 0) {
        document.getElementById('masa-resultado').innerHTML = '❌ Ingresa una masa válida (> 0 kg).';
        return;
    }
    
    const E = m * c * c;
    document.getElementById('masa-resultado').innerHTML = `
        ⚛️ E = mc² = <strong>${E.toExponential(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(E/4.184e15).toFixed(6)} megatones de TNT) | m = ${m.toFixed(4)} kg
        </span>
        <br><span style="font-size: 0.85rem; color: var(--secondary);">
            💡 1 gramo de masa = 89.9 billones de julios
        </span>
    `;
}

// ============================================
// 13. Energía Química (Entalpía)
// ============================================
function calcularQuimica() {
    const moles = parseFloat(document.getElementById('quimica-moles').value);
    const ΔH = parseFloat(document.getElementById('quimica-delta-h').value);
    
    if (isNaN(moles) || isNaN(ΔH) || moles <= 0) {
        document.getElementById('quimica-resultado').innerHTML = '❌ Ingresa valores válidos (moles > 0).';
        return;
    }
    
    const E = moles * ΔH * 1000; // Convertir kJ a J
    document.getElementById('quimica-resultado').innerHTML = `
        🧪 Energía Química = <strong>${E.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            (${(E/1000).toFixed(4)} kJ) | ${moles.toFixed(2)} moles × ${ΔH.toFixed(1)} kJ/mol
        </span>
    `;
}

// ============================================
// 14. Energía Electromagnética
// ============================================
function calcularElectromagnetica() {
    const B = parseFloat(document.getElementById('electromagnetica-campo').value);
    const μ = parseFloat(document.getElementById('electromagnetica-permeabilidad').value) || 4 * Math.PI * 1e-7;
    const V = parseFloat(document.getElementById('electromagnetica-volumen').value);
    
    if (isNaN(B) || isNaN(V) || B <= 0 || V <= 0) {
        document.getElementById('electromagnetica-resultado').innerHTML = '❌ Ingresa valores válidos (B > 0, V > 0).';
        return;
    }
    
    const E = (B * B) / (2 * μ) * V;
    document.getElementById('electromagnetica-resultado').innerHTML = `
        🔋 Energía Electromagnética = <strong>${E.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            B = ${B.toFixed(2)} T | V = ${V.toFixed(2)} m³
        </span>
    `;
}

// ============================================
// 15. Energía Magnética (Inductor)
// ============================================
function calcularMagnetica() {
    const L = parseFloat(document.getElementById('magnetica-inductancia').value);
    const I = parseFloat(document.getElementById('magnetica-corriente').value);
    
    if (isNaN(L) || isNaN(I) || L <= 0 || I < 0) {
        document.getElementById('magnetica-resultado').innerHTML = '❌ Ingresa valores válidos (L > 0, I ≥ 0).';
        return;
    }
    
    const E = 0.5 * L * I * I;
    document.getElementById('magnetica-resultado').innerHTML = `
        🧲 Energía Magnética = <strong>${E.toFixed(4)} J</strong><br>
        <span style="font-size: 0.9rem; color: var(--text-muted);">
            L = ${L.toFixed(4)} H | I = ${I.toFixed(2)} A
        </span>
    `;
}

// ============================================
// FUNCIÓN PARA LIMPIAR RESULTADOS (opcional)
// ============================================
function limpiarResultado(id) {
    document.getElementById(id).innerHTML = '';
}