// Main application logic
let refreshInterval;

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded');
    updateDashboard();
    setupEventListeners();
    startAutoRefresh();
});

function setupEventListeners() {
    // Refresh button
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', updateDashboard);
    }

    // Auto-refresh toggle
    const autoRefreshToggle = document.getElementById('autoRefresh');
    if (autoRefreshToggle) {
        autoRefreshToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                startAutoRefresh();
            } else {
                stopAutoRefresh();
            }
        });
    }

    // Department search
    const deptSearch = document.getElementById('deptSearch');
    if (deptSearch) {
        deptSearch.addEventListener('input', filterDepartments);
    }
}

function startAutoRefresh() {
    stopAutoRefresh(); // Clear any existing interval
    refreshInterval = setInterval(updateDashboard, 30000); // 30 seconds
}

function stopAutoRefresh() {
    if (refreshInterval) {
        clearInterval(refreshInterval);
    }
}

function updateDashboard() {
    updateStats();
    updateDepartments();
    updateLastUpdated();
}

function updateStats() {
    // Count total agents
    let totalAgents = 1; // Scout (COO)
    agentData.departments.forEach(dept => {
        totalAgents += dept.agents.length;
    });
    
    const totalAgentsEl = document.getElementById('totalAgents');
    if (totalAgentsEl) {
        totalAgentsEl.textContent = totalAgents;
    }

    // Count active cron jobs
    const activeCrons = cronJobs.filter(job => job.status === 'active').length;
    const activeCronsEl = document.getElementById('activeCrons');
    if (activeCronsEl) {
        activeCronsEl.textContent = activeCrons;
    }

    // Count tools
    const totalToolsEl = document.getElementById('totalTools');
    if (totalToolsEl) {
        totalToolsEl.textContent = tools.length;
    }
}

function updateDepartments() {
    const departmentsList = document.getElementById('departmentsList');
    if (!departmentsList) return;

    departmentsList.innerHTML = '';

    agentData.departments.forEach(dept => {
        const deptCard = createDepartmentCard(dept);
        departmentsList.appendChild(deptCard);
    });
}

function createDepartmentCard(dept) {
    const card = document.createElement('div');
    card.className = 'department-card';
    card.dataset.deptId = dept.id;

    const statusBadge = dept.status === 'active' ? 'success' : 
                       dept.status === 'forming' ? 'warning' : 'error';

    card.innerHTML = `
        <div class="department-header">
            <div class="department-title">
                <span>${dept.emoji}</span>
                <span>${dept.name}</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
                <span class="badge ${statusBadge}">${dept.status}</span>
                <span class="agent-count">${dept.agents.length} agent${dept.agents.length !== 1 ? 's' : ''}</span>
            </div>
        </div>
        <div class="department-mission">${dept.mission}</div>
        <div class="capabilities" style="margin-top: 8px;">
            ${dept.agents.map(agent => `
                <span class="capability-tag" title="${agent.role}">
                    ${agent.emoji} ${agent.name}
                </span>
            `).join('')}
        </div>
    `;

    return card;
}

function filterDepartments() {
    const searchTerm = document.getElementById('deptSearch').value.toLowerCase();
    const departmentCards = document.querySelectorAll('.department-card');

    departmentCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updateLastUpdated() {
    const lastUpdatedEl = document.getElementById('lastUpdated');
    if (lastUpdatedEl) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
        lastUpdatedEl.textContent = `Updated: ${timeString}`;
    }
}

// Helper function for formatting
function formatCapability(cap) {
    return cap.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
