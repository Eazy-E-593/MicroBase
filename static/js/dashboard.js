const templatesConfig = {
    'blank': {
        title: 'Empezar desde 0',
        tables: [
            { icon: 'package', name: 'Inventario', desc: 'Catálogo de productos inicial.', cols: ['Nombre', 'Marca', 'COD', 'Unidad de Venta', 'Precio por Unidad', 'Cantidad'] }
        ]
    },
    'restaurant': {
        title: 'Restaurante / Comida',
        tables: [
            { icon: 'package', name: 'Inventario', desc: 'Materia prima e ingredientes.', cols: ['Nombre', 'Marca', 'COD', 'Unidad de Venta', 'Precio por Unidad', 'Cantidad'] },
            { icon: 'users', name: 'Clientes', desc: 'Directorio de clientes frecuentes.', cols: ['Nombre', 'Teléfono', 'Correo', 'Frecuencia'] },
            { icon: 'truck', name: 'Proveedores', desc: 'Suministradores de insumos.', cols: ['Empresa', 'Contacto', 'Producto', 'Pago'] },
            { icon: 'scroll-text', name: 'Menú', desc: 'Catálogo de platillos y precios.', cols: ['Nombre', 'Descripción', 'Precio', 'Categoría'] }
        ]
    },
    'store': {
        title: 'Tienda / Minimarket',
        tables: [
            { icon: 'package', name: 'Inventario', desc: 'Catálogo de productos para venta.', cols: ['Nombre', 'Marca', 'COD', 'Unidad de Venta', 'Precio por Unidad', 'Cantidad'] },
            { icon: 'users', name: 'Clientes', desc: 'Compradores registrados y fidelización.', cols: ['Nombre', 'WhatsApp', 'Puntos', 'Última Compra'] },
            { icon: 'truck', name: 'Proveedores', desc: 'Distribuidores de mercancía.', cols: ['Nombre', 'RUC', 'Teléfono', 'Crédito'] }
        ]
    },
    'gym': {
        title: 'Gimnasio / Centro Fitness',
        tables: [
            { icon: 'package', name: 'Inventario', desc: 'Gestión de existencias.', cols: ['Nombre', 'Marca', 'COD', 'Unidad de Venta', 'Precio por Unidad', 'Cantidad'] },
            { icon: 'users', name: 'Socios (Clientes)', desc: 'Miembros activos del gimnasio.', cols: ['Socio', 'DNI', 'Teléfono', 'Edad'] },
            { icon: 'truck', name: 'Proveedores', desc: 'Suministros y mantenimiento.', cols: ['Empresa', 'Servicio', 'Contacto'] },
            { icon: 'credit-card', name: 'Planes', desc: 'Membresías (Mensual, Anual, etc).', cols: ['Plan', 'Costo', 'Días', 'Acceso'] }
        ]
    },
    'liquor': {
        title: 'Licorería / Bar',
        tables: [
            { icon: 'package', name: 'Inventario', desc: 'Catálogo de bebidas y stock.', cols: ['Nombre', 'Marca', 'COD', 'Unidad de Venta', 'Precio por Unidad', 'Cantidad'] },
            { icon: 'users', name: 'Clientes', desc: 'Compradores frecuentes.', cols: ['Nombre', 'Edad', 'WhatsApp'] },
            { icon: 'truck', name: 'Proveedores', desc: 'Distribuidores de licores.', cols: ['Marca', 'Proveedor', 'Pedido Mín.'] }
        ]
    },
    'pharmacy': {
        title: 'Farmacia / Botica',
        tables: [
            { icon: 'package', name: 'Inventario', desc: 'Gestión de medicamentos.', cols: ['Nombre', 'Laboratorio', 'COD', 'Principio Activo', 'Precio', 'Cantidad'] },
            { icon: 'truck', name: 'Proveedores', desc: 'Distribuidores farmacéuticos.', cols: ['Distribuidor', 'Contacto', 'WhatsApp'] }
        ]
    },
    'vet': {
        title: 'Veterinaria / Pet Shop',
        tables: [
            { icon: 'heart', name: 'Pacientes', desc: 'Registro de mascotas y atención.', cols: ['Nombre Mascota', 'Especie', 'Raza', 'ID', 'Propietario', 'Última Cita'] },
            { icon: 'package', name: 'Inventario', desc: 'Medicamentos y productos de Pet Shop.', cols: ['Nombre', 'Marca', 'COD', 'Unidad de Venta', 'Precio por Unidad', 'Cantidad'] }
        ]
    },
    'hardware': {
        title: 'Ferretería',
        tables: [
            { icon: 'package', name: 'Inventario', desc: 'Gestión de herramientas y materiales.', cols: ['Producto', 'Categoría', 'COD', 'Marca', 'Precio', 'Stock'] },
            { icon: 'truck', name: 'Proveedores', desc: 'Distribuidores de ferretería.', cols: ['Distribuidora', 'Vendedor', 'Contacto'] }
        ]
    },
    'salon': {
        title: 'Salón de Belleza / Spa',
        tables: [
            { icon: 'scissors', name: 'Servicios', desc: 'Catálogo de servicios de belleza.', cols: ['Servicio', 'Categoría', 'Costo', 'Duración (min)'] },
            { icon: 'users', name: 'Clientes', desc: 'Directorio y preferencias de clientes.', cols: ['Nombre', 'WhatsApp', 'Notas'] }
        ]
    },
    'mechanic': {
        title: 'Taller Mecánico',
        tables: [
            { icon: 'wrench', name: 'Servicios', desc: 'Mantenimientos y reparaciones.', cols: ['Servicio', 'Categoría', 'Costo'] },
            { icon: 'package', name: 'Repuestos', desc: 'Inventario de autopartes.', cols: ['Repuesto', 'COD', 'Marca', 'Costo Unitario', 'Cantidad'] }
        ]
    }
};

let selectedTemplateType = null;

function showTemplateModal(type) {
    selectedTemplateType = type;
    const config = templatesConfig[type];
    if (!config) return;

    document.getElementById('template-modal-title').textContent = `¿Tu negocio es un ${config.title}?`;

    const listContainer = document.getElementById('template-tables-list');
    listContainer.innerHTML = ''; // Clear previous

    config.tables.forEach(table => {
        const item = document.createElement('div');
        item.className = 'suggestion-item'; // Use the class for styling
        item.style.display = 'flex';
        item.style.alignItems = 'flex-start';
        item.style.gap = '12px';
        item.style.background = 'var(--bg-main)';
        item.style.padding = '16px';
        item.style.borderRadius = '12px';
        item.style.border = '1px solid var(--border-glass)';

        // Preview columns tooltip
        const preview = document.createElement('div');
        preview.className = 'columns-preview';
        preview.innerHTML = `<div style="font-weight: 600; font-size: 0.8rem; margin-bottom: 8px; color: #fff;">Columnas sugeridas:</div>
                             <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                                ${table.cols.map(c => `<span class="column-tag">${c}</span>`).join('')}
                             </div>`;

        // Icon
        const iconDiv = document.createElement('div');
        iconDiv.style.color = 'var(--primary)';
        iconDiv.innerHTML = `<i data-lucide="${table.icon}" style="width: 24px; height: 24px;"></i>`;

        // Text
        const textDiv = document.createElement('div');
        textDiv.innerHTML = `<strong style="display: block; color: var(--text-main); font-size: 1rem; margin-bottom: 4px;">${table.name}</strong>
                             <span style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; display: block;">${table.desc}</span>`;

        item.appendChild(preview); // Add tooltip
        item.appendChild(iconDiv);
        item.appendChild(textDiv);
        listContainer.appendChild(item);
    });

    // Re-initialize lucide icons for the newly added HTML
    lucide.createIcons();

    // Show panel and scroll to it smoothly
    const panel = document.getElementById('template-suggestion-panel');
    panel.style.display = 'block';
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function confirmTemplate() {
    if (!selectedTemplateType) {
        showToast('Por favor selecciona una plantilla', 'error');
        return;
    }

    const btn = document.getElementById('btn-confirm-template');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Creando tablas...';
    }

    fetch('/api/business/setup-template', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ template: selectedTemplateType })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Error al configurar la plantilla');
            }
            return res.json();
        })
        .then(data => {
            showToast('Plantilla configurada correctamente', 'success');
            localStorage.setItem('showEditorIntro', 'true');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        })
        .catch(err => {
            console.error(err);
            showToast(err.message || 'Error al configurar la plantilla', 'error');
            if (btn) {
                btn.disabled = false;
                btn.textContent = 'Sí, crear estas tablas';
            }
        });
}

function confirmTemplateCreation() {
    confirmTemplate();
}

// Lógica del Dashboard Analítico e Interactivo
let productsCache = [];
let selectedProducts = [];
let salesChartInstance = null;
let pollingIntervalId = null;

function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

function initAdminDashboard() {
    loadProductsCache();
    updateDashboardData();

    // Configurar polling cada 5 segundos
    pollingIntervalId = setInterval(updateDashboardData, 5000);

    // Ocultar dropdown de autocompletado si se hace click fuera
    document.addEventListener('click', (e) => {
        const searchInput = document.getElementById('dash-prod-search');
        const resultsDiv = document.getElementById('dash-prod-results');
        if (searchInput && resultsDiv) {
            if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
                resultsDiv.style.display = 'none';
            }
        }
    });
}

function loadProductsCache() {
    fetch('/api/dashboard/products')
        .then(res => {
            if (!res.ok) throw new Error('No se pudo cargar la lista de productos');
            return res.json();
        })
        .then(data => {
            productsCache = data;
        })
        .catch(err => console.error('Error cargando cache de productos:', err));
}

function updateDashboardData() {
    const productIds = selectedProducts.map(p => p.id).join(',');
    const startDate = document.getElementById('dash-start-date')?.value || '';
    const endDate = document.getElementById('dash-end-date')?.value || '';

    let params = [];
    if (productIds) params.push(`products=${productIds}`);
    if (startDate) params.push(`start_date=${startDate}`);
    if (endDate) params.push(`end_date=${endDate}`);

    const queryString = params.length > 0 ? `?${params.join('&')}` : '';
    const url = `/api/dashboard/stats${queryString}`;

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error('Error al obtener estadísticas del dashboard');
            return res.json();
        })
        .then(data => {
            // Actualizar tarjetas de KPI
            const totalSalesEl = document.getElementById('dash-total-sales');
            const totalPurchasesEl = document.getElementById('dash-total-purchases');
            const netProfitEl = document.getElementById('dash-net-profit');
            const totalTxEl = document.getElementById('dash-total-tx');

            if (totalSalesEl) totalSalesEl.textContent = formatCurrency(data.stats.total_sales);
            if (totalPurchasesEl) totalPurchasesEl.textContent = formatCurrency(data.stats.total_purchases);

            if (netProfitEl) {
                netProfitEl.textContent = formatCurrency(data.stats.gain_net);
                if (data.stats.gain_net < 0) {
                    netProfitEl.style.color = 'var(--danger)';
                } else {
                    netProfitEl.style.color = 'var(--primary)';
                }
            }

            if (totalTxEl) totalTxEl.textContent = data.stats.total_transactions;

            // Alerta de stock bajo
            const lowStockAlert = document.getElementById('dash-low-stock-alert');
            const lowStockCount = document.getElementById('dash-low-stock-count');
            if (lowStockAlert && lowStockCount) {
                if (data.stats.low_stock_count > 0) {
                    lowStockCount.textContent = data.stats.low_stock_count;
                    lowStockAlert.style.display = 'flex';
                } else {
                    lowStockAlert.style.display = 'none';
                }
            }

            // Actualizar gráfico de Chart.js
            renderSalesChart(data.chart.labels, data.chart.datasets);

            // Actualizar productos más y menos vendidos
            renderProductPerformanceList('top-sold-list', data.top_sold, 'top');
            renderProductPerformanceList('least-sold-list', data.least_sold, 'least');
        })
        .catch(err => console.error('Error en polling de dashboard:', err));
}

function renderProductPerformanceList(containerId, products, type) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!products || products.length === 0) {
        container.innerHTML = `
            <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
                <i data-lucide="package" style="width: 24px; height: 24px; margin: 0 auto 8px; display: block; opacity: 0.5;"></i>
                No hay datos disponibles
            </div>
        `;
        lucide.createIcons();
        return;
    }

    container.innerHTML = '';
    products.forEach((prod, index) => {
        const rankNum = index + 1;
        const rankClass = `rank-${type}-${rankNum}`;

        // Formatear cantidades para omitir decimales si es entero
        const qtyStr = Number.isInteger(prod.sold_qty)
            ? prod.sold_qty
            : prod.sold_qty.toFixed(2).replace(/\.00$/, '');

        const item = document.createElement('div');
        item.className = 'product-performance-item';

        item.innerHTML = `
            <div class="product-info-wrapper">
                <div class="product-rank ${rankClass}">
                    ${rankNum}°
                </div>
                <div class="product-details">
                    <span class="product-name" title="${prod.name}">${prod.name}</span>
                    <span class="product-sku">${prod.sku ? 'SKU: ' + prod.sku : 'Sin SKU'}</span>
                </div>
            </div>
            <div class="product-stats">
                <span class="product-qty">${qtyStr} u.</span>
                <span class="product-revenue">${formatCurrency(prod.revenue)}</span>
            </div>
        `;
        container.appendChild(item);
    });

    lucide.createIcons();
}

function onDateFilterChange() {
    updateDashboardData();
}

function clearDateFilter() {
    const startDateEl = document.getElementById('dash-start-date');
    const endDateEl = document.getElementById('dash-end-date');
    if (startDateEl) startDateEl.value = '';
    if (endDateEl) endDateEl.value = '';
    updateDashboardData();
}

function renderSalesChart(labels, datasets) {
    const canvas = document.getElementById('salesChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Modificar estilos de los datasets para que tengan una estética premium
    const styledDatasets = datasets.map(ds => {
        if (ds.fill && ds.borderColor === '#10b981') {
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
            gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
            ds.backgroundColor = gradient;
        }

        ds.borderWidth = 3;
        ds.pointBackgroundColor = ds.borderColor;
        ds.pointBorderColor = '#171821'; // Oscuro premium a tono con el fondo
        ds.pointBorderWidth = 2;
        ds.pointRadius = 4;
        ds.pointHoverRadius = 6;
        ds.pointHoverBorderWidth = 3;

        return ds;
    });

    if (salesChartInstance) {
        salesChartInstance.data.labels = labels;
        salesChartInstance.data.datasets = styledDatasets;
        if (salesChartInstance.options.scales.y.title) {
            salesChartInstance.options.scales.y.title.text = (selectedProducts.length > 0) ? 'Cantidad Vendida (Unidades)' : 'Total Ventas (Dólares USD)';
        }
        salesChartInstance.update('none'); // Update sin animaciones repetidas para que sea fluido
    } else {
        salesChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: styledDatasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#94a3b8',
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            },
                            boxWidth: 12,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        titleColor: '#f8fafc',
                        bodyColor: '#e2e8f0',
                        borderColor: '#334155',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        usePointStyle: true,
                        titleFont: {
                            family: 'Inter',
                            size: 13,
                            weight: '600'
                        },
                        bodyFont: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Fechas',
                            color: '#cbd5e1',
                            font: {
                                family: 'Inter',
                                size: 18,
                                weight: '600'
                            },
                            padding: { top: 10, bottom: 0 }
                        },
                        grid: {
                            color: 'rgba(51, 65, 85, 0.2)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                family: 'Inter',
                                size: 18
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: (selectedProducts.length > 0) ? 'Cantidad Vendida (Unidades)' : 'Total Ventas (Dólares USD)',
                            color: '#cbd5e1',
                            font: {
                                family: 'Inter',
                                size: 18,
                                weight: '600'
                            },
                            padding: { top: 0, bottom: 10 }
                        },
                        min: 0,
                        grid: {
                            color: 'rgba(51, 65, 85, 0.2)',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                family: 'Inter',
                                size: 18
                            }
                        }
                    }
                },
                interaction: {
                    mode: 'index',
                    intersect: false
                }
            }
        });
    }
}

function showDashProductDropdown() {
    const resultsDiv = document.getElementById('dash-prod-results');
    if (resultsDiv) {
        resultsDiv.style.display = 'block';
        searchDashProducts(document.getElementById('dash-prod-search').value);
    }
}

function searchDashProducts(query) {
    const resultsDiv = document.getElementById('dash-prod-results');
    if (!resultsDiv) return;

    const cleanQuery = query.toLowerCase().trim();
    const selectedIds = selectedProducts.map(p => p.id);

    const filtered = productsCache.filter(p => {
        const matches = p.name.toLowerCase().includes(cleanQuery) || p.sku.toLowerCase().includes(cleanQuery);
        const notSelected = !selectedIds.includes(p.id);
        return matches && notSelected;
    });

    resultsDiv.innerHTML = '';

    if (filtered.length === 0) {
        const noResults = document.createElement('div');
        noResults.style.padding = '12px 16px';
        noResults.style.color = 'var(--text-muted)';
        noResults.style.fontSize = '0.9rem';
        noResults.textContent = 'No se encontraron productos';
        resultsDiv.appendChild(noResults);
        return;
    }

    filtered.slice(0, 8).forEach(prod => {
        const item = document.createElement('div');
        item.style.padding = '10px 16px';
        item.style.cursor = 'pointer';
        item.style.borderBottom = '1px solid var(--border-glass)';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        item.style.transition = 'background 0.2s';

        item.onmouseover = () => { item.style.background = 'rgba(255, 255, 255, 0.04)'; };
        item.onmouseout = () => { item.style.background = 'transparent'; };

        item.onclick = () => {
            addProductFilter(prod);
        };

        const textDiv = document.createElement('div');
        textDiv.innerHTML = `<strong style="color: var(--text-main); font-size: 0.9rem;">${prod.name}</strong>`;
        if (prod.sku) {
            textDiv.innerHTML += `<span style="display: block; font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">SKU: ${prod.sku}</span>`;
        }

        const addIcon = document.createElement('span');
        addIcon.style.color = 'var(--primary)';
        addIcon.innerHTML = `<i data-lucide="plus" style="width: 16px; height: 16px;"></i>`;

        item.appendChild(textDiv);
        item.appendChild(addIcon);
        resultsDiv.appendChild(item);
    });

    lucide.createIcons();
}

function addProductFilter(prod) {
    if (selectedProducts.some(p => p.id === prod.id)) return;

    selectedProducts.push(prod);
    renderProductTags();

    const searchInput = document.getElementById('dash-prod-search');
    if (searchInput) searchInput.value = '';

    const resultsDiv = document.getElementById('dash-prod-results');
    if (resultsDiv) resultsDiv.style.display = 'none';

    updateDashboardData();
}

function removeProductFilter(prodId) {
    selectedProducts = selectedProducts.filter(p => p.id !== prodId);
    renderProductTags();
    updateDashboardData();
}

function clearProductFilters() {
    selectedProducts = [];
    renderProductTags();

    const searchInput = document.getElementById('dash-prod-search');
    if (searchInput) searchInput.value = '';

    updateDashboardData();
}

function renderProductTags() {
    const tagsContainer = document.getElementById('selected-products-tags');
    if (!tagsContainer) return;

    tagsContainer.innerHTML = '';

    selectedProducts.forEach(prod => {
        const tag = document.createElement('span');
        tag.className = 'badge';
        tag.style.background = 'rgba(59, 130, 246, 0.12)';
        tag.style.color = 'var(--primary)';
        tag.style.border = '1px solid rgba(59, 130, 246, 0.3)';
        tag.style.display = 'inline-flex';
        tag.style.alignItems = 'center';
        tag.style.gap = '6px';
        tag.style.padding = '6px 12px';
        tag.style.borderRadius = '20px';
        tag.style.fontSize = '0.85rem';

        tag.innerHTML = `
            <span>${prod.name}</span>
            <button style="border: none; background: transparent; cursor: pointer; color: var(--primary); display: inline-flex; align-items: center; padding: 0;" onclick="removeProductFilter(${prod.id})">
                <i data-lucide="x" style="width: 14px; height: 14px;"></i>
            </button>
        `;

        tagsContainer.appendChild(tag);
    });

    lucide.createIcons();
}

// Inicializar si el canvas del grafico existe
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('salesChart')) {
        initAdminDashboard();
    }
    // Auto-abrir el tour si es la primera vez del admin
    autoOpenTour();
});


// ================================================================
//   SPOTLIGHT TOUR DE ONBOARDING - MicroBase v2
//   Ilumina elementos reales del UI y explica su función
// ================================================================

const TOUR_KEY = 'microbase_tour_v2_done';
let currentTourStep = 0;
let tourResizeObserver = null;

// Definición de pasos: target = selector CSS del elemento a iluminar
// position = dónde aparece el tooltip relativo al elemento ('right','left','top','bottom','center')
const tourSteps = [
    {
        target: null, // Paso inicial centrado, sin spotlight
        icon: 'rocket',
        title: '¡Bienvenido a MicroBase! 🚀',
        body: 'Vamos a darte un <strong>recorrido rápido</strong> por todas las funciones disponibles. Verás cada sección iluminada mientras la explicamos. Puedes salir en cualquier momento.',
        position: 'center'
    },
    {
        target: 'a[href="/dashboard"]',
        icon: 'home',
        title: 'Dashboard — Tu centro de mando',
        body: 'Aquí puedes ver tus <strong>Gráficos en tiempo real</strong>: ventas totales, compras, ganancias estimadas y transacciones. El gráfico se actualiza automáticamente cada 5 segundos.',
        position: 'right'
    },
    {
        target: 'a[href="/tables-view"], a[title="Mis Tablas"]',
        icon: 'table',
        title: 'Mis Tablas — El corazón de tu negocio',
        body: 'Aquí viven todos tus datos: <strong>inventario, clientes, productos, proveedores</strong> y más. Puedes crear tablas personalizadas, agregar columnas y editar registros — todo sin código.',
        position: 'right'
    },
    {
        target: 'a[href="/audits-view"]',
        icon: 'clipboard-list',
        title: 'Historial Fiscal — Auditoría completa',
        body: 'Registro inmutable de <strong>cada movimiento financiero</strong>: ventas, compras y ajustes. Ideal para informes contables, declaraciones fiscales y auditorías. Puedes exportarlo a PDF o Excel.',
        position: 'right'
    },
    {
        target: 'a[href="/staff"]',
        icon: 'users',
        title: 'Personal — Gestiona tu equipo',
        body: 'Invita a empleados compartiendo el <strong>Código de tu Negocio</strong>. Aquí apruebas o rechazas accesos y asignas roles: <em>Cajero</em> (solo registrar ventas), <em>Gerente</em> (ver reportes) o <em>Admin</em> (control total).',
        position: 'right'
    },
    {
        target: 'a[href="/settings"]',
        icon: 'settings',
        title: 'Configuración — Personaliza tu negocio',
        body: 'Cambia el nombre de tu negocio, RUC, datos de contacto y opciones de facturación. También puedes <strong>personalizar los campos</strong> que aparecen en tus tickets de venta.',
        position: 'right'
    },
    {
        target: '#edit-mode-toggle',
        icon: 'pencil',
        title: 'Modo Edición — Personaliza tus tablas',
        body: 'Activa este interruptor para <strong>agregar, editar o eliminar tablas y columnas</strong> de tu negocio. Cuando está desactivado, el sistema está en modo operativo normal para registrar datos.',
        position: 'right'
    },
    {
        target: '#btn-open-tour',
        icon: 'graduation-cap',
        title: 'Tour Guiado — Siempre disponible',
        body: '¡Este botón! Puedes volver a ver este tour en cualquier momento. Úsalo para <strong>entrenar a nuevos empleados</strong> o recordar cómo funciona alguna función.',
        position: 'right'
    },
    {
        target: null, // Paso final centrado
        icon: 'party-popper',
        title: '¡Listo para empezar! 🎉',
        body: 'Ya conoces MicroBase. Recuerda: comienza <strong>eligiendo una plantilla</strong> en el Dashboard para configurar tus tablas, o créalas desde cero. ¡Tu negocio digital empieza ahora!',
        position: 'center'
    }
];

function isMobileNav() {
    const mobileNavbar = document.querySelector('.mobile-navbar');
    return (mobileNavbar && window.getComputedStyle(mobileNavbar).display !== 'none') || window.innerWidth <= 850;
}

function ensureSidebarStateForTour(shouldBeOpen, onDone) {
    if (!isMobileNav()) {
        if (onDone) onDone();
        return;
    }
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if (!sidebar) {
        if (onDone) onDone();
        return;
    }

    const currentlyOpen = sidebar.classList.contains('mobile-open');
    if (shouldBeOpen) {
        if (!currentlyOpen) {
            sidebar.classList.add('mobile-open');
            if (overlay) overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            // Esperar animación de deslizamiento (300ms) para obtener coordenadas reales
            setTimeout(() => {
                if (onDone) onDone();
            }, 320);
            return;
        }
    } else {
        if (currentlyOpen) {
            sidebar.classList.remove('mobile-open');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                if (onDone) onDone();
            }, 320);
            return;
        }
    }
    if (onDone) onDone();
}

function autoOpenTour() {
    if (!document.getElementById('tour-overlay')) return;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('start_tour') === '1') {
        window.history.replaceState({}, document.title, window.location.pathname);
        setTimeout(() => startTour(), 400);
    } else if (!localStorage.getItem(TOUR_KEY)) {
        setTimeout(() => startTour(), 700);
    }
}

// Alias para el botón de la sidebar
function openOnboardingModal() { startTour(); }

function startTour() {
    if (!document.getElementById('tour-overlay')) return;
    document.body.classList.add('tour-active');
    currentTourStep = 0;
    renderTourStep(0);
}

function closeTour() {
    document.body.classList.remove('tour-active');
    const overlay = document.getElementById('tour-overlay');
    const tooltip = document.getElementById('tour-tooltip');
    if (overlay) overlay.classList.remove('tour-visible');
    if (tooltip) tooltip.classList.remove('tour-visible');
    // Limpiar highlight del elemento anterior
    document.querySelectorAll('.tour-highlighted').forEach(el => el.classList.remove('tour-highlighted'));
    if (tourResizeObserver) { tourResizeObserver.disconnect(); tourResizeObserver = null; }

    // En móvil, si la barra lateral quedó abierta por el tour, cerrarla
    if (isMobileNav()) {
        const sidebar = document.querySelector('.sidebar');
        const sidebarOverlay = document.querySelector('.sidebar-overlay');
        if (sidebar) sidebar.classList.remove('mobile-open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function finishTour() {
    localStorage.setItem(TOUR_KEY, '1');
    closeTour();
}

function nextTourStep() {
    if (currentTourStep < tourSteps.length - 1) renderTourStep(currentTourStep + 1);
}

function prevTourStep() {
    if (currentTourStep > 0) renderTourStep(currentTourStep - 1);
}

function renderTourStep(stepIndex) {
    currentTourStep = stepIndex;
    const step = tourSteps[stepIndex];
    const total = tourSteps.length;
    const overlay = document.getElementById('tour-overlay');
    const spotlight = document.getElementById('tour-spotlight');
    const tooltip = document.getElementById('tour-tooltip');

    if (!overlay || !tooltip) return;

    // Limpiar highlight anterior
    document.querySelectorAll('.tour-highlighted').forEach(el => el.classList.remove('tour-highlighted'));

    // --- Actualizar contenido del tooltip ---
    document.getElementById('tt-title').textContent = step.title;
    document.getElementById('tt-body').innerHTML = step.body;

    // Ícono
    const iconInner = document.getElementById('tt-icon-inner');
    iconInner.setAttribute('data-lucide', step.icon);

    // Dots de progreso
    const dotsEl = document.getElementById('tt-dots');
    dotsEl.innerHTML = tourSteps.map((_, i) =>
        `<span class="tt-dot ${i === stepIndex ? 'active' : ''}"></span>`
    ).join('');

    // Progreso textual
    document.getElementById('tt-progress').textContent = `${stepIndex + 1}/${total}`;

    // Botones
    const btnPrev = document.getElementById('tt-btn-prev');
    const btnNext = document.getElementById('tt-btn-next');
    const btnFinish = document.getElementById('tt-btn-finish');
    btnPrev.style.display = stepIndex > 0 ? 'inline-flex' : 'none';
    btnNext.style.display = stepIndex < total - 1 ? 'inline-flex' : 'none';
    btnFinish.style.display = stepIndex === total - 1 ? 'inline-flex' : 'none';

    lucide.createIcons();

    // Determinar si este paso apunta a un elemento dentro de la barra lateral
    const isSidebarStep = step.target && (
        step.target.includes('sidebar') ||
        step.target.includes('tables-view') ||
        step.target.includes('audits-view') ||
        step.target.includes('staff') ||
        step.target.includes('settings') ||
        step.target.includes('dashboard') ||
        step.target.includes('edit-mode-toggle') ||
        step.target.includes('btn-open-tour')
    );

    const needsSidebarOpen = isMobileNav() && isSidebarStep;

    overlay.classList.add('tour-visible');
    tooltip.classList.add('tour-visible');

    if (tourResizeObserver) { tourResizeObserver.disconnect(); tourResizeObserver = null; }

    ensureSidebarStateForTour(needsSidebarOpen, () => {
        if (!step.target || step.position === 'center') {
            // Paso centrado: ocultar spotlight, centrar tooltip
            spotlight.style.opacity = '0';
            overlay.style.background = 'rgba(0,0,0,0.65)';
            positionTooltipCenter(tooltip);
        } else {
            // Buscar el elemento objetivo
            const targetEl = document.querySelector(step.target);
            if (!targetEl) {
                // El elemento no existe en este contexto — saltar
                nextTourStep();
                return;
            }
            targetEl.classList.add('tour-highlighted');
            spotlight.style.opacity = '1';
            overlay.style.background = 'transparent';

            positionSpotlightAndTooltip(targetEl, spotlight, tooltip, step.position);

            // Reposicionar si el elemento o la ventana cambian de tamaño
            tourResizeObserver = new ResizeObserver(() => {
                positionSpotlightAndTooltip(targetEl, spotlight, tooltip, step.position);
            });
            tourResizeObserver.observe(document.body);
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) tourResizeObserver.observe(sidebar);
        }
    });
}

function positionSpotlightAndTooltip(targetEl, spotlight, tooltip, position) {
    const isMobile = isMobileNav();
    const PAD = isMobile ? 6 : 8;
    const GAP = 14;
    const rect = targetEl.getBoundingClientRect();

    // Posicionar spotlight alrededor del elemento
    spotlight.style.left = (rect.left - PAD) + 'px';
    spotlight.style.top = (rect.top - PAD) + 'px';
    spotlight.style.width = (rect.width + PAD * 2) + 'px';
    spotlight.style.height = (rect.height + PAD * 2) + 'px';

    // Scroll suave si el elemento está fuera de la zona visible
    if (rect.top < 60 || rect.bottom > window.innerHeight - 80) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (isMobile) {
        // EN MÓVIL: Formato Bottom-Sheet o Top-Sheet para garantizar visibilidad total
        tooltip.style.width = 'calc(100vw - 28px)';
        tooltip.style.maxWidth = '380px';
        tooltip.style.left = '14px';
        tooltip.style.right = '14px';
        tooltip.style.margin = '0 auto';
        tooltip.style.transform = 'none';

        const elemMidY = rect.top + (rect.height / 2);
        const vh = window.innerHeight;

        if (elemMidY < vh * 0.48) {
            // El elemento iluminado está en la mitad superior -> Tooltip al fondo
            tooltip.style.top = 'auto';
            tooltip.style.bottom = '16px';
        } else {
            // El elemento iluminado está en la mitad inferior -> Tooltip arriba
            tooltip.style.top = '68px';
            tooltip.style.bottom = 'auto';
        }
        return;
    }

    // --- ESCRITORIO (>= 850px) ---
    tooltip.style.width = '320px';
    tooltip.style.maxWidth = 'none';
    tooltip.style.margin = '0';
    tooltip.style.bottom = 'auto';
    tooltip.style.right = 'auto';
    tooltip.style.transform = 'none';

    const tw = tooltip.offsetWidth || 320;
    const th = tooltip.offsetHeight || 220;
    let top, left;

    switch (position) {
        case 'right':
            left = rect.right + PAD + GAP;
            top = rect.top + (rect.height / 2) - (th / 2);
            if (left + tw > window.innerWidth - 12) {
                left = rect.left - PAD - GAP - tw;
            }
            break;
        case 'left':
            left = rect.left - PAD - GAP - tw;
            top = rect.top + (rect.height / 2) - (th / 2);
            if (left < 12) {
                left = rect.right + PAD + GAP;
            }
            break;
        case 'bottom':
            top = rect.bottom + PAD + GAP;
            left = rect.left + (rect.width / 2) - (tw / 2);
            break;
        case 'top':
            top = rect.top - PAD - GAP - th;
            left = rect.left + (rect.width / 2) - (tw / 2);
            break;
        default:
            positionTooltipCenter(tooltip);
            return;
    }

    // Clamping para que no se salga de los bordes
    top = Math.max(12, Math.min(top, window.innerHeight - th - 12));
    left = Math.max(12, Math.min(left, window.innerWidth - tw - 12));

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
}

function positionTooltipCenter(tooltip) {
    const isMobile = isMobileNav();
    tooltip.style.width = isMobile ? 'calc(100vw - 32px)' : '340px';
    tooltip.style.maxWidth = '380px';
    tooltip.style.margin = '0';
    tooltip.style.bottom = 'auto';
    tooltip.style.right = 'auto';
    tooltip.style.top = '50%';
    tooltip.style.left = '50%';
    tooltip.style.transform = 'translate(-50%, -50%)';

    const spotlight = document.getElementById('tour-spotlight');
    if (spotlight) spotlight.style.opacity = '0';
}

// Listener para redimensionamiento de pantalla
window.addEventListener('resize', () => {
    if (document.getElementById('tour-overlay')?.classList.contains('tour-visible')) {
        renderTourStep(currentTourStep);
    }
});

