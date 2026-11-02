let catalogData = {
  "vehiculos": [
    { "codigo": 1001, "marca": "Toyota", "logo": "assets/logo_toyota.png", "tipo": "Sedán 🚗", "modelo": "Toyota Corolla", "caracteristicas": "5 asientos, motor de 2.0L", "imagen": "assets/img_1001.png", "precio_venta": 23500, "precio_alquiler_dia": 120, "precio_alquiler_hora": 15 },
    { "codigo": 1002, "marca": "Honda", "logo": "assets/logo_honda.png", "tipo": "SUV 🚙", "modelo": "Honda CR-V", "caracteristicas": "7 asientos, tracción en las 4 ruedas", "imagen": "assets/img_1002.png", "precio_venta": 32000, "precio_alquiler_dia": 160, "precio_alquiler_hora": 20 },
    { "codigo": 1003, "marca": "Ford", "logo": "assets/logo_ford.png", "tipo": "Deportivo 🏎️", "modelo": "Ford Mustang", "caracteristicas": "Potente motor V8, diseño aerodinámico", "imagen": "assets/img_1003.png", "precio_venta": 45000, "precio_alquiler_dia": 250, "precio_alquiler_hora": 35 },
    { "codigo": 1004, "marca": "Volkswagen", "logo": "assets/logo_volkswagen.png", "tipo": "Compacto 🚗", "modelo": "Volkswagen Golf", "caracteristicas": "4 asientos, económico y versátil", "imagen": "assets/img_1004.png", "precio_venta": 25000, "precio_alquiler_dia": 130, "precio_alquiler_hora": 16 },
    { "codigo": 1005, "marca": "Ford", "logo": "assets/logo_ford.png", "tipo": "Camioneta 🚚", "modelo": "Ford Explorer", "caracteristicas": "Capacidad para 7 pasajeros, tracción 4x4", "imagen": "assets/img_1005.png", "precio_venta": 45000, "precio_alquiler_dia": 220, "precio_alquiler_hora": 30 },
    { "codigo": 1006, "marca": "Chevrolet", "logo": "assets/logo_chevrolet.png", "tipo": "Deportivo 🏎️", "modelo": "Chevrolet Camaro", "caracteristicas": "Potente motor V8, diseño deportivo", "imagen": "assets/camaro_PNG45.png", "precio_venta": 42000, "precio_alquiler_dia": 230, "precio_alquiler_hora": 32 },
    { "codigo": 1007, "marca": "Honda", "logo": "assets/logo_honda.png", "tipo": "Sedán 🚗", "modelo": "Honda Civic", "caracteristicas": "Espacioso y eficiente en combustible", "imagen": "assets/img_1007.png", "precio_venta": 24000, "precio_alquiler_dia": 125, "precio_alquiler_hora": 16 },
    { "codigo": 1008, "marca": "Toyota", "logo": "assets/logo_toyota.png", "tipo": "SUV 🚙", "modelo": "Toyota RAV4", "caracteristicas": "Estilo deportivo, ideal para la aventura", "imagen": "assets/img_1008.png", "precio_venta": 33000, "precio_alquiler_dia": 170, "precio_alquiler_hora": 22 },
    { "codigo": 1009, "marca": "Mazda", "logo": "assets/logo_mazda.png", "tipo": "Hatchback 🚗", "modelo": "Mazda 3", "caracteristicas": "Diseño elegante y deportivo, excelente manejo", "imagen": "assets/img_1009.png", "precio_venta": 25500, "precio_alquiler_dia": 135, "precio_alquiler_hora": 18 },
    { "codigo": 1010, "marca": "Ford", "logo": "assets/logo_ford.png", "tipo": "Pickup 🚛", "modelo": "Ford F-150", "caracteristicas": "Resistente y duradero, capacidad de remolque", "imagen": "assets/img_1010.png", "precio_venta": 52000, "precio_alquiler_dia": 260, "precio_alquiler_hora": 35 },
    { "codigo": 1011, "marca": "BMW", "logo": "assets/logo_bmw.png", "tipo": "Coupé 🏎️", "modelo": "BMW Serie 2", "caracteristicas": "Lujo y rendimiento en un diseño compacto", "imagen": "assets/img_1011.png", "precio_venta": 48000, "precio_alquiler_dia": 240, "precio_alquiler_hora": 32 },
    { "codigo": 1012, "marca": "Mercedes-Benz", "logo": "assets/logo_mercedes_benz.png", "tipo": "Furgoneta 🚐", "modelo": "Mercedes-Benz Sprinter", "caracteristicas": "Gran capacidad de carga, ideal para negocios", "imagen": "assets/img_1012.png", "precio_venta": 45000, "precio_alquiler_dia": 210, "precio_alquiler_hora": 28 },
    { "codigo": 1013, "marca": "Chevrolet", "logo": "assets/logo_chevrolet.png", "tipo": "Convertible 🚗", "modelo": "Chevrolet Corvette", "caracteristicas": "Estilo clásico y potencia deslumbrante", "imagen": "assets/img_1013.png", "precio_venta": 65000, "precio_alquiler_dia": 350, "precio_alquiler_hora": 45 },
    { "codigo": 1014, "marca": "BMW", "logo": "assets/logo_bmw.png", "tipo": "SUV 🚙", "modelo": "BMW X5", "caracteristicas": "5 asientos, potente motor y tecnología avanzada", "imagen": "assets/img_1014.png", "precio_venta": 65000, "precio_alquiler_dia": 320, "precio_alquiler_hora": 42 },
    { "codigo": 1015, "marca": "Audi", "logo": "assets/logo_audi.png", "tipo": "Sedán 🚗", "modelo": "Audi A4", "caracteristicas": "Diseño elegante, tecnología de punta", "imagen": "assets/img_1015.png", "precio_venta": 45000, "precio_alquiler_dia": 230, "precio_alquiler_hora": 30 },
    { "codigo": 1016, "marca": "Mercedes-Benz", "logo": "assets/logo_mercedes_benz.png", "tipo": "Sedán 🚗", "modelo": "Mercedes-Benz C-Class", "caracteristicas": "Lujo y rendimiento en cada detalle", "imagen": "assets/img_1016.png", "precio_venta": 48000, "precio_alquiler_dia": 250, "precio_alquiler_hora": 33 },
    { "codigo": 1017, "marca": "Tesla", "logo": "assets/logo_tesla.png", "tipo": "Eléctrico 🚗", "modelo": "Tesla Model S", "caracteristicas": "Rendimiento eléctrico, autonomía de largo alcance", "imagen": "assets/img_1017.png", "precio_venta": 85000, "precio_alquiler_dia": 400, "precio_alquiler_hora": 55 },
    { "codigo": 1018, "marca": "Nissan", "logo": "assets/logo_nissan.png", "tipo": "Sedán 🚗", "modelo": "Nissan Altima", "caracteristicas": "Tecnología avanzada, diseño aerodinámico", "imagen": "assets/img_1018.png", "precio_venta": 27000, "precio_alquiler_dia": 140, "precio_alquiler_hora": 18 },
    { "codigo": 1019, "marca": "Toyota", "logo": "assets/logo_toyota.png", "tipo": "Híbrido 🚗", "modelo": "Toyota Prius", "caracteristicas": "Eficiencia híbrida, bajo consumo de combustible", "imagen": "assets/img_1019.png", "precio_venta": 29500, "precio_alquiler_dia": 150, "precio_alquiler_hora": 19 },
    { "codigo": 1020, "marca": "Audi", "logo": "assets/logo_audi.png", "tipo": "SUV Eléctrico 🚙", "modelo": "Audi e-tron", "caracteristicas": "SUV totalmente eléctrico, lujo y sostenibilidad", "imagen": "assets/img_1020.png", "precio_venta": 75000, "precio_alquiler_dia": 360, "precio_alquiler_hora": 48 },
    { "codigo": 1021, "marca": "RAM", "logo": "assets/logo_ram.png", "tipo": "Pickup Lujo 🚛", "modelo": "RAM 1500 Limited", "caracteristicas": "Interior premium, capacidad todoterreno", "imagen": "assets/img_1021.png", "precio_venta": 62000, "precio_alquiler_dia": 310, "precio_alquiler_hora": 40 },
    { "codigo": 1022, "marca": "Porsche", "logo": "assets/logo_porsche.png", "tipo": "Superdeportivo 🏎️", "modelo": "Porsche 911", "caracteristicas": "Rendimiento legendario, diseño icónico", "imagen": "assets/img_1022.png", "precio_venta": 115000, "precio_alquiler_dia": 650, "precio_alquiler_hora": 85 },
    { "codigo": 1023, "marca": "Volvo", "logo": "assets/logo_volvo.png", "tipo": "SUV Compacto 🚙", "modelo": "Volvo XC40", "caracteristicas": "Seguridad avanzada, diseño escandinavo", "imagen": "assets/img_1023.png", "precio_venta": 38500, "precio_alquiler_dia": 190, "precio_alquiler_hora": 25 },
    { "codigo": 1024, "marca": "Honda", "logo": "assets/logo_honda.png", "tipo": "Minivan 🚐", "modelo": "Honda Odyssey", "caracteristicas": "Espacio familiar, confort superior", "imagen": "assets/img_1024.png", "precio_venta": 42000, "precio_alquiler_dia": 200, "precio_alquiler_hora": 26 },
    { "codigo": 1025, "marca": "Lexus", "logo": "assets/logo_lexus.png", "tipo": "Crossover 🚙", "modelo": "Lexus NX", "caracteristicas": "Lujo compacto, tecnología híbrida", "imagen": "assets/img_1025.png", "precio_venta": 45500, "precio_alquiler_dia": 220, "precio_alquiler_hora": 29 },
    { "codigo": 1026, "marca": "Lamborghini", "logo": "assets/logo_lamborghini.png", "tipo": "Superdeportivo 🏎️", "modelo": "Lamborghini Huracán", "caracteristicas": "Motor V10, diseño futurista, máximo rendimiento", "imagen": "assets/img_1026.png", "precio_venta": 265000, "precio_alquiler_dia": 1200, "precio_alquiler_hora": 150 },
    { "codigo": 1027, "marca": "Rolls-Royce", "logo": "assets/logo_rolls_royce.png", "tipo": "Luxury Sedan 🚗", "modelo": "Rolls-Royce Ghost", "caracteristicas": "Lujo supremo, acabados artesanales, máximo confort", "imagen": "assets/img_1027.png", "precio_venta": 315000, "precio_alquiler_dia": 1800, "precio_alquiler_hora": 220 },
    { "codigo": 1028, "marca": "Chevrolet", "logo": "assets/logo_chevrolet.png", "tipo": "Compacto 🚗", "modelo": "Chevrolet Spark", "caracteristicas": "Ultra compacto, excelente consumo de combustible", "imagen": "assets/img_1028.png", "precio_venta": 15500, "precio_alquiler_dia": 90, "precio_alquiler_hora": 12 },
    { "codigo": 1029, "marca": "Kia", "logo": "assets/logo_kia.png", "tipo": "Hatchback 🚗", "modelo": "Kia Rio", "caracteristicas": "Eficiente, práctico y bajo mantenimiento", "imagen": "assets/img_1029.png", "precio_venta": 17200, "precio_alquiler_dia": 100, "precio_alquiler_hora": 13 },
    { "codigo": 1030, "marca": "Hyundai", "logo": "assets/logo_hyundai.png", "tipo": "Sedán 🚗", "modelo": "Hyundai Accent", "caracteristicas": "Económico, espacioso, ideal para ciudad", "imagen": "assets/img_1030.png", "precio_venta": 16800, "precio_alquiler_dia": 95, "precio_alquiler_hora": 13 },
    { "codigo": 1031, "marca": "Bugatti", "logo": "assets/logo_bugatti.png", "tipo": "Hypercar 🏎️", "modelo": "Bugatti Chiron", "caracteristicas": "Velocidad máxima 420 km/h, motor W16 quad-turbo, edición limitada", "imagen": "assets/img_1031.png", "precio_venta": 3500000, "precio_alquiler_dia": 5000, "precio_alquiler_hora": 600 },
    { "codigo": 1032, "marca": "Rimac", "logo": "assets/logo_rimac.png", "tipo": "Superdeportivo Eléctrico 🏎️", "modelo": "Rimac Nevera", "caracteristicas": "100% eléctrico, 1914 hp, 0-100 km/h en 1.85s", "imagen": "assets/img_1032.png", "precio_venta": 2400000, "precio_alquiler_dia": 3500, "precio_alquiler_hora": 450 },
    { "codigo": 1033, "marca": "Aston Martin", "logo": "assets/logo_aston_martin.png", "tipo": "Grand Tourer 🏎️", "modelo": "Aston Martin DBS", "caracteristicas": "Interior artesanal, V12 biturbo, máximo lujo deportivo", "imagen": "assets/img_1033.png", "precio_venta": 375000, "precio_alquiler_dia": 1500, "precio_alquiler_hora": 180 },
    { "codigo": 1034, "marca": "Bentley", "logo": "assets/logo_bentley.png", "tipo": "SUV Ultra Lujo 🚙", "modelo": "Bentley Bentayga", "caracteristicas": "SUV más lujoso del mundo, acabados personalizados", "imagen": "assets/img_1034.png", "precio_venta": 450000, "precio_alquiler_dia": 1900, "precio_alquiler_hora": 230 },
    { "codigo": 1035, "marca": "Ferrari", "logo": "assets/logo_ferrari.png", "tipo": "Superdeportivo 🏎️", "modelo": "Ferrari SF90 Stradale", "caracteristicas": "Híbrido enchufable, 1000 hp, tecnología F1", "imagen": "assets/img_1035.png", "precio_venta": 625000, "precio_alquiler_dia": 2500, "precio_alquiler_hora": 300 }
  ],
  "motos": [
    { "codigo": 2001, "marca": "Neiman Marcus", "logo": "assets/logo_Neiman.png", "tipo": "Streetfighter", "modelo": "Limited Edition Fighter", "caracteristicas": "Diseño steampunk con chasis mecanizado de una sola pieza.", "imagen": "assets/img_2001.png", "precio_venta": 11000000, "precio_alquiler_dia": 15000, "precio_alquiler_hora": 2000 },
    { "codigo": 2002, "marca": "Honda", "logo": "assets/logo_honda.png", "tipo": "Deportiva", "modelo": "RC213V-S", "caracteristicas": "Réplica exacta de MotoGP homologada para calle.", "imagen": "assets/img_2002.png", "precio_venta": 184000, "precio_alquiler_dia": 900, "precio_alquiler_hora": 120 },
    { "codigo": 2003, "marca": "Aston Martin", "logo": "assets/logo_aston_martin.png", "tipo": "Pista", "modelo": "AMB 001 Pro", "caracteristicas": "Fibra de carbono, titanio y diseño aerodinámico extremo.", "imagen": "assets/img_2003.png", "precio_venta": 120000, "precio_alquiler_dia": 600, "precio_alquiler_hora": 80 },
    { "codigo": 2004, "marca": "Ducati", "logo": "assets/logo_Ducati.png", "tipo": "Deportiva", "modelo": "Superleggera V4", "caracteristicas": "La única moto del mundo con chasis y rines full carbono.", "imagen": "assets/img_2004.png", "precio_venta": 100000, "precio_alquiler_dia": 500, "precio_alquiler_hora": 60 },
    { "codigo": 2005, "marca": "BMW", "logo": "assets/logo_bmw.png", "tipo": "Pista", "modelo": "HP4 Race", "caracteristicas": "Moto de carreras pura sangre con cuadro íntegro en carbono.", "imagen": "assets/img_2005.png", "precio_venta": 80000, "precio_alquiler_dia": 400, "precio_alquiler_hora": 50 },
    { "codigo": 2006, "marca": "Lamborghini", "logo": "assets/logo_lamborghini.png", "tipo": "Cruiser", "modelo": "Diavel 1260", "caracteristicas": "Inspirada en el Sián FKP 37, pintura verde Gea Green.", "imagen": "assets/img_2006.png", "precio_venta": 60000, "precio_alquiler_dia": 300, "precio_alquiler_hora": 40 },
    { "codigo": 2007, "marca": "MV Agusta", "logo": "assets/agusta-logo.png", "tipo": "Naked", "modelo": "Rush 1000", "caracteristicas": "Diseño agresivo, componentes de grado aeroespacial.", "imagen": "assets/img_2007.png", "precio_venta": 45000, "precio_alquiler_dia": 220, "precio_alquiler_hora": 30 },
    { "codigo": 2008, "marca": "Arch", "logo": "assets/Arch-Logo.png", "tipo": "Cruiser", "modelo": "Method 143", "caracteristicas": "Fabricada por Keanu Reeves, chasis monobloque en aluminio.", "imagen": "assets/img_2008.png", "precio_venta": 85000, "precio_alquiler_dia": 420, "precio_alquiler_hora": 55 },
    { "codigo": 2009, "marca": "MTT", "logo": "assets/mtt-logo.png", "tipo": "Turbina", "modelo": "420-RR", "caracteristicas": "Equipada con un motor de helicóptero, alcanza 400 km/h.", "imagen": "assets/img_2009.png", "precio_venta": 250000, "precio_alquiler_dia": 1200, "precio_alquiler_hora": 150 },
    { "codigo": 2010, "marca": "Kawasaki", "logo": "assets/Kawasaki_Logo.png", "tipo": "Deportiva", "modelo": "Ninja H2R", "caracteristicas": "Motor supercargado, pintura de plata que se cura sola.", "imagen": "assets/img_2010.png", "precio_venta": 55000, "precio_alquiler_dia": 300, "precio_alquiler_hora": 40 },
    { "codigo": 2011, "marca": "Yamaha", "logo": "assets/logo_yamaha.png", "tipo": "Deportiva", "modelo": "YZF-R1M", "caracteristicas": "Tecnología derivada de MotoGP con suspensión electrónica Öhlins.", "imagen": "assets/img_2011.png", "precio_venta": 27000, "precio_alquiler_dia": 180, "precio_alquiler_hora": 25 },
    { "codigo": 2012, "marca": "Suzuki", "logo": "assets/Suzuki-Symbol.png", "tipo": "Hyper-Sport", "modelo": "Hayabusa", "caracteristicas": "La leyenda aerodinámica definitiva, el halcón peregrino de las motos.", "imagen": "assets/img_2012.png", "precio_venta": 19000, "precio_alquiler_dia": 130, "precio_alquiler_hora": 18 }
  ]
};

let cart = [];
let currentFilter = 'todos';
let currentSearchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
});

function filterCatalog(category) {
  currentFilter = category;
  document.getElementById('btnAll').className = category === 'todos' ? 'btn btn-sm btn-warning rounded-pill px-3 fw-bold' : 'btn btn-sm btn-outline-light rounded-pill px-3';
  document.getElementById('btnVehicles').className = category === 'vehiculos' ? 'btn btn-sm btn-warning rounded-pill px-3 fw-bold' : 'btn btn-sm btn-outline-light rounded-pill px-3';
  document.getElementById('btnMotos').className = category === 'motos' ? 'btn btn-sm btn-warning rounded-pill px-3 fw-bold' : 'btn btn-sm btn-outline-light rounded-pill px-3';
  renderCatalog();
}

function handleSearch(term) {
  currentSearchTerm = term.toLowerCase().trim();
  renderCatalog();
}

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let itemsToRender = [];
  if (currentFilter === 'todos' || currentFilter === 'vehiculos') {
    if (catalogData.vehiculos) {
      itemsToRender = itemsToRender.concat(catalogData.vehiculos.map(i => ({ ...i, categoriaItem: 'vehiculos' })));
    }
  }
  if (currentFilter === 'todos' || currentFilter === 'motos') {
    if (catalogData.motos) {
      itemsToRender = itemsToRender.concat(catalogData.motos.map(i => ({ ...i, categoriaItem: 'motos' })));
    }
  }

  if (currentSearchTerm) {
    itemsToRender = itemsToRender.filter(item => 
      item.marca.toLowerCase().includes(currentSearchTerm) || 
      item.modelo.toLowerCase().includes(currentSearchTerm) ||
      (item.tipo && item.tipo.toLowerCase().includes(currentSearchTerm))
    );
  }

  if (itemsToRender.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center py-5 text-muted"><h5>No se encontraron unidades disponibles con ese criterio.</h5></div>`;
    return;
  }

  itemsToRender.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-md-4 col-sm-6';
    const salePrice = item.precio_venta || 25000;
    const rentDay = item.precio_alquiler_dia || Math.round(salePrice * 0.005);
    const rentHour = item.precio_alquiler_hora || Math.round(rentDay / 8);
    const imgSrc = item.imagen ? item.imagen : 'assets/img_1001.png';

    col.innerHTML = `
      <div class="vehicle-card h-100 rounded-4 overflow-hidden shadow-sm d-flex flex-column">
        <div class="vehicle-img-wrapper position-relative">
          <img src="${imgSrc}" alt="${item.modelo}" onerror="this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600'">
          <span class="position-absolute top-0 start-0 m-2 badge bg-dark bg-opacity-75 text-warning border border-warning border-opacity-25">${item.tipo || 'Vehículo'}</span>
        </div>
        <div class="p-4 d-flex flex-column flex-grow-1">
          <span class="text-muted small text-uppercase fw-bold">${item.marca}</span>
          <h5 class="fw-bold text-white mb-2">${item.modelo}</h5>
          <p class="text-muted small mb-3 flex-grow-1">${item.caracteristicas || 'Unidad de alta gama y rendimiento óptimo.'}</p>
          
          <div class="mb-3 p-2 rounded bg-dark border border-secondary border-opacity-25 small">
            <div class="d-flex justify-content-between mb-1"><span class="text-muted">Precio Venta:</span><span class="fw-bold text-warning">$${salePrice.toLocaleString()} USD</span></div>
            <div class="d-flex justify-content-between"><span class="text-muted">Alquiler / Día:</span><span class="fw-bold text-info">$${rentDay} USD</span></div>
          </div>

          <div class="d-flex gap-2">
            <button class="btn btn-outline-warning btn-sm w-50 rounded-pill fw-bold" onclick='openRentalModal(${JSON.stringify(item)}, ${rentDay}, ${rentHour})'>
              <i class="fa-solid fa-key me-1"></i> Alquilar
            </button>
            <button class="btn btn-warning btn-sm w-50 rounded-pill fw-bold" onclick='addToCart(${JSON.stringify(item)}, "venta", 1, "Única vez", "N/A", ${salePrice})'>
              <i class="fa-solid fa-cart-plus me-1"></i> Comprar
            </button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
}

function openRentalModal(item, rentDay, rentHour) {
  const modalBody = document.getElementById('rentalModalBody');
  const imgSrc = item.imagen ? item.imagen : 'assets/img_1001.png';
  modalBody.innerHTML = `
    <div class="text-center mb-3">
      <img src="${imgSrc}" class="rounded-3 mb-2" style="width: 100%; height: 160px; object-fit: cover;" alt="${item.modelo}" onerror="this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600'">
      <h6 class="fw-bold text-white">${item.marca} ${item.modelo}</h6>
      <p class="text-muted small m-0">Tarifas: $${rentDay} / día | $${rentHour} / hora</p>
    </div>
    <div class="mb-3">
      <label class="form-label small text-muted">Modalidad de Alquiler</label>
      <select id="rentalModeSelect" class="form-select form-select-sm bg-dark text-light border-secondary" onchange="updateRentalCalc(${rentDay}, ${rentHour})">
        <option value="Día(s)">Por Día(s) ($${rentDay}/día)</option>
        <option value="Hora(s)">Por Hora(s) ($${rentHour}/hora)</option>
      </select>
    </div>
    <div class="row g-2 mb-3">
      <div class="col-6">
        <label class="form-label small text-muted">Cantidad</label>
        <input type="number" id="rentalDurationInput" class="form-control form-control-sm bg-dark text-light border-secondary" value="3" min="1" oninput="updateRentalCalc(${rentDay}, ${rentHour})">
      </div>
      <div class="col-6">
        <label class="form-label small text-muted">Fecha de Inicio</label>
        <input type="date" id="rentalStartDateInput" class="form-control form-control-sm bg-dark text-light border-secondary" value="2026-10-27">
      </div>
    </div>
    <div class="p-2 rounded bg-secondary bg-opacity-10 text-center small">
      Subtotal estimado de renta: <strong id="rentalSubtotalPreview" class="text-warning">$${rentDay * 3} USD</strong> + $500 Fianza
    </div>
  `;

  const confirmBtn = document.getElementById('confirmRentalBtn');
  confirmBtn.onclick = () => {
    const mode = document.getElementById('rentalModeSelect').value;
    const duration = parseInt(document.getElementById('rentalDurationInput').value) || 1;
    const startDate = document.getElementById('rentalStartDateInput').value;
    const unitPrice = mode === 'Día(s)' ? rentDay : rentHour;
    const subtotal = unitPrice * duration;

    addToCart(item, 'alquiler', duration, mode, startDate, subtotal);
    bootstrap.Modal.getInstance(document.getElementById('rentalModal')).hide();
  };

  new bootstrap.Modal(document.getElementById('rentalModal')).show();
}

function updateRentalCalc(rentDay, rentHour) {
  const mode = document.getElementById('rentalModeSelect').value;
  const duration = parseInt(document.getElementById('rentalDurationInput').value) || 1;
  const unitPrice = mode === 'Día(s)' ? rentDay : rentHour;
  document.getElementById('rentalSubtotalPreview').innerText = `$${unitPrice * duration} USD`;
}

function addToCart(item, type, duration, mode, startDate, price) {
  cart.push({
    ...item,
    tipoTransaccion: type,
    duracion: duration,
    modalidad: mode,
    fechaInicio: startDate,
    precioFinal: price
  });
  updateCartUI();
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: '¡Añadido al carrito con éxito!',
    showConfirmButton: false,
    timer: 2000,
    background: '#111827',
    color: '#fff'
  });
}

function updateCartUI() {
  const count = cart.length;
  const badge = document.getElementById('cartBadge');
  const floatingBadge = document.getElementById('floatingCartBadge');
  if (badge) badge.innerText = count;
  if (floatingBadge) floatingBadge.innerText = count;

  const list = document.getElementById('cartItemsList');
  if (!list) return;

  if (count === 0) {
    list.innerHTML = `<p class="text-center text-muted my-4">Tu carrito está vacío.</p>`;
    document.getElementById('cartSubtotal').innerText = '$0.00 USD';
    document.getElementById('cartTax').innerText = '$0.00 USD';
    document.getElementById('cartDeposit').innerText = '$0.00 USD';
    document.getElementById('cartTotal').innerText = '$0.00 USD';
    return;
  }

  list.innerHTML = '';
  let subtotal = 0;
  let totalDeposit = 0;

  cart.forEach((ci, idx) => {
    subtotal += ci.precioFinal;
    if (ci.tipoTransaccion === 'alquiler') totalDeposit += 500;

    const row = document.createElement('div');
    row.className = 'd-flex justify-content-between align-items-center mb-2 p-2 rounded bg-secondary bg-opacity-10 border border-secondary border-opacity-25 small';
    row.innerHTML = `
      <div>
        <strong class="text-white">${ci.marca} ${ci.modelo}</strong><br>
        <span class="text-muted">${ci.tipoTransaccion.toUpperCase()} ${ci.tipoTransaccion === 'alquiler' ? `(${ci.duracion} ${ci.modalidad})` : ''}</span>
      </div>
      <div class="text-end">
        <span class="text-warning fw-bold">$${ci.precioFinal.toLocaleString()} USD</span><br>
        <button class="btn btn-link text-danger btn-sm p-0 text-decoration-none" onclick="removeFromCart(${idx})"><i class="fa-solid fa-trash"></i> Eliminar</button>
      </div>
    `;
    list.appendChild(row);
  });

  const tax = 0;
  const grandTotal = subtotal + tax + totalDeposit;

  document.getElementById('cartSubtotal').innerText = `$${subtotal.toLocaleString()} USD`;
  document.getElementById('cartTax').innerText = `$${subtotal.toLocaleString()} USD`;
  document.getElementById('cartDeposit').innerText = `$${subtotal.toLocaleString()} USD`;
  document.getElementById('cartTotal').innerText = `$${grandTotal.toLocaleString()} USD`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function fillMockData() {
  document.getElementById('clientName').value = "Ing. Manuel A. Núñez R.";
  document.getElementById('clientId').value = "001-1234567-8";
  document.getElementById('clientLicense').value = "DO-8874125-VIP (Vigente)";
  document.getElementById('clientPhone').value = "+1 (809) 555-0199";
  document.getElementById('clientEmail').value = "manuelnunezrossis@hotmail.com";
  document.getElementById('clientAddress').value = "c. Proyecto 14, Las Palmas de Herrera, Santo Domingo, D.N.";
  document.getElementById('cardNum').value = "4532 8901 2345 8899";
  document.getElementById('cardExp').value = "12/28";
  document.getElementById('cardCvv').value = "789";
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Datos VIP cargados correctamente',
    showConfirmButton: false,
    timer: 1500,
    background: '#111827',
    color: '#fff'
  });
}

function scrollToCatalog() {
  document.getElementById('catalogSection').scrollIntoView({ behavior: 'smooth' });
}

function processCheckoutAndGeneratePDF() {
  if (cart.length === 0) {
    Swal.fire({ icon: 'warning', title: 'Carrito vacío', text: 'Agrega al menos un vehículo o moto para generar la factura o contrato.', background: '#111827', color: '#fff' });
    return;
  }

  const clientName = document.getElementById('clientName').value;
  const clientId = document.getElementById('clientId').value;
  const clientPhone = document.getElementById('clientPhone').value;
  const clientEmail = document.getElementById('clientEmail').value;
  const clientAddress = document.getElementById('clientAddress').value;

  const hasSales = cart.some(i => i.tipoTransaccion === 'venta');
  const hasRentals = cart.some(i => i.tipoTransaccion === 'alquiler');

  let docTitle = "FACTURA DE VENTA Y CONTRATO DE ALQUILER";

  if (hasSales && !hasRentals) {
    docTitle = "FACTURA DE VENTA";
  } else if (!hasSales && hasRentals) {
    docTitle = "CONTRATO DE ALQUILER Y ACUERDO DE RESPONSABILIDAD";
  }

  let subtotal = 0;
  let deposit = 0;
  let itemsHtml = '';

  cart.forEach((item, idx) => {
    subtotal += item.precioFinal;
    if (item.tipoTransaccion === 'alquiler') deposit += 500;
    const detailText = item.tipoTransaccion === 'venta' 
      ? 'Adquisición Vehicular Definitiva' 
      : `Alquiler: ${item.duracion} ${item.modalidad} (Desde ${item.fechaInicio})`;

    itemsHtml += `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: center;">${idx + 1}</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd;">
          <strong style="font-size: 13px; color: #000;">${item.marca} ${item.modelo}</strong><br>
          <span style="font-size: 10px; color: #666;">Ref Código: ${item.codigo}</span>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd;">${item.tipo}</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd;">${detailText}</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right;">$${item.precioFinal.toLocaleString()} USD</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: center;">1</td>
        <td style="padding: 12px; border-bottom: 1px solid #ddd; text-align: right; font-weight: bold;">$${item.precioFinal.toLocaleString()} USD</td>
      </tr>
    `;
  });

  const totalGeneral = subtotal + deposit;

  let clausesHtml = '';
  if (hasRentals) {
    clausesHtml = `
      <div style="margin-top: 25px; padding: 15px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 6px; font-size: 11px; line-height: 1.5;">
        <h5 style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; text-transform: uppercase; color: #000;">
          Acuerdo de Responsabilidad y Términos de Alquiler:
        </h5>
        <p style="margin: 0 0 6px 0;"><strong>1. Custodia del Bien:</strong> El arrendatario se compromete a operar la unidad bajo las leyes de tránsito vigentes, no exceder los límites de velocidad y mantener el vehículo en óptimas condiciones mecánicas y estéticas.</p>
        <p style="margin: 0 0 6px 0;"><strong>2. Cobertura & Deducible:</strong> La unidad cuenta con póliza de seguro completa con deducible del 10% en caso de colisión comprobada. Daños por negligencia, ingesta de alcohol o sustancias ilícitas son de responsabilidad exclusiva del arrendatario.</p>
        <p style="margin: 0 0 6px 0;"><strong>3. Política de Combustible:</strong> La unidad se entrega con tanque lleno y debe ser devuelta en las mismas condiciones. De lo contrario, se aplicará el cargo estándar de reposición.</p>
      </div>

      <table style="width: 100%; margin-top: 45px; font-size: 11px; text-align: center;" cellpadding="0" cellspacing="0">
        <tr>
          <td style="width: 45%; vertical-align: top;">
            <div style="border-top: 1px solid #000; padding-top: 10px; margin: 0 20px;">
              <strong>D NÚÑEZ MOTORS CORP.</strong><br>
              <span style="font-size: 10px; color: #555;">Firma Autorizada / Departamento Comercial</span>
            </div>
          </td>
          <td style="width: 10%;"></td>
          <td style="width: 45%; vertical-align: top;">
            <div style="border-top: 1px solid #000; padding-top: 10px; margin: 0 20px;">
              <strong>${clientName}</strong><br>
              <span style="font-size: 10px; color: #555;">Doc ID: ${clientId} (Cliente / Arrendatario)</span>
            </div>
          </td>
        </tr>
      </table>
    `;
  } else {
    clausesHtml = `
      <div style="margin-top: 25px; padding: 12px; background: #f9f9f9; border-left: 3px solid #2e7d32; font-size: 11px;">
        <strong>Garantía de Satisfacción:</strong> Unidad vendida con garantía certificada de 3 años o 60,000 km, traspaso legal garantizado y asistencia vial 24/7 de cortesía durante el primer año.
      </div>
      <table style="width: 100%; margin-top: 45px; font-size: 11px; text-align: center;" cellpadding="0" cellspacing="0">
        <tr>
          <td style="width: 45%; vertical-align: top;">
            <div style="border-top: 1px solid #000; padding-top: 10px; margin: 0 20px;">
              <strong>D NÚÑEZ MOTORS CORP.</strong><br>
              <span style="font-size: 10px; color: #555;">Firma Autorizada</span>
            </div>
          </td>
          <td style="width: 10%;"></td>
          <td style="width: 45%; vertical-align: top;">
            <div style="border-top: 1px solid #000; padding-top: 10px; margin: 0 20px;">
              <strong>${clientName}</strong><br>
              <span style="font-size: 10px; color: #555;">Doc ID: ${clientId} (Comprador)</span>
            </div>
          </td>
        </tr>
      </table>
    `;
  }

  ['checkoutModal', 'cartModal'].forEach(modalId => {
    const modalEl = document.getElementById(modalId);
    const instance = bootstrap.Modal.getInstance(modalEl);
    if (instance) instance.hide();
  });

  document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
  document.body.classList.remove('modal-open');
  document.body.style.removeProperty('padding-right');
  document.body.style.removeProperty('overflow');

  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>${docTitle}</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111; padding: 30px; margin: 0; background: #fff; }
        .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 15px; margin-bottom: 25px; }
        .header h2 { margin: 0; font-size: 22px; color: #000; letter-spacing: 1px; }
        .header p { margin: 5px 0; font-size: 11px; color: #555; }
        .badge { background: #000; color: #fff; font-size: 13px; font-weight: bold; padding: 6px 20px; display: inline-block; margin-top: 10px; }
        .info-table { width: 100%; margin-bottom: 25px; font-size: 11.5px; background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; }
        .items-table { width: 100%; border-collapse: collapse; font-size: 11.5px; margin-bottom: 25px; }
        .items-table th { background: #000; color: #fff; padding: 10px; text-align: left; }
        .totals { width: 300px; float: right; font-size: 12px; margin-bottom: 25px; }
        .totals div { display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #eee; }
        .totals .grand-total { font-size: 15px; font-weight: bold; border-top: 2px solid #000; border-bottom: none; margin-top: 5px; padding-top: 8px; }
        .footer { clear: both; margin-top: 40px; border-top: 1px dashed #ccc; padding-top: 12px; text-align: center; font-size: 10px; color: #777; }
        @media print {
          body { padding: 10px; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>D NÚÑEZ MOTORS CORP.</h2>
        <p>Av. Anacaona #105, Torre Empresarial Elite, Piso 14 | Tel: +1 (809) 555-DNUNEZ | info@dnunezmotors.com</p>
        <span class="badge">${docTitle}</span>
      </div>

      <table class="info-table" cellpadding="10">
        <tr>
          <td style="width: 50%; vertical-align: top;">
            <strong style="font-size: 12.5px; color: #000;">DATOS DEL CLIENTE:</strong><br>
            Nombre: ${clientName}<br>
            Cédula / Doc: ${clientId}<br>
            Licencia: ${document.getElementById('clientLicense').value}<br>
            Teléfono: ${clientPhone}<br>
            Email: ${clientEmail}<br>
            Dirección: ${clientAddress}
          </td>
          <td style="width: 50%; vertical-align: top;">
            <strong style="font-size: 12.5px; color: #000;">DETALLES DE LA TRANSACCIÓN:</strong><br>
            No. Documento: LME-${Math.floor(100000 + Math.random() * 900000)}<br>
            Fecha & Hora: ${new Date().toLocaleString()}<br>
            Método de Pago: Tarjeta Crédito (Simulada **** 8899)<br>
            Estado: <span style="color: #2e7d32; font-weight: bold;">Procesado & Confirmado</span><br>
            Agente Emisor: Sistema Automatizado D Núñez Pro
          </td>
        </tr>
      </table>

      <table class="items-table">
        <thead>
          <tr>
            <th style="text-align: center;">#</th>
            <th>Descripción / Modelo</th>
            <th>Tipo</th>
            <th>Detalle</th>
            <th style="text-align: right;">Precio</th>
            <th style="text-align: center;">Cant.</th>
            <th style="text-align: right;">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>

      <div class="totals">
        <div><span>Subtotal Bruto:</span> <strong>$${subtotal.toLocaleString()} USD</strong></div>
        <div><span>Fianza Reembolsable:</span> <strong>$${deposit.toLocaleString()} USD</strong></div>
        <div class="grand-total"><span>TOTAL GENERAL:</span> <span>$${totalGeneral.toLocaleString()} USD</span></div>
      </div>

      <div style="clear: both;"></div>
      ${clausesHtml}

      <div class="footer">
        Documento generado automáticamente por el Sistema E-Commerce & Alquiler D Núñez Motors | Arquitectura por Ing. Manuel A. Núñez R.
      </div>

      <script>
        window.onload = function() {
          window.print();
        }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();

  clearCart();
  Swal.fire({
    icon: 'success',
    title: '¡Transacción Exitosa!',
    text: 'La factura oficial se ha abierto para impresión o guardado en PDF.',
    background: '#111827',
    color: '#fff'
  });
}