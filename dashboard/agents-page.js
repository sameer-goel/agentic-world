document.addEventListener('DOMContentLoaded', () => {
    renderAgents();
    setupSearch();
    updateLastUpdated();
});

function renderAgents() {
    const agentsList = document.getElementById('agentsList');
    if (!agentsList) return;

    let html = '';

    agentData.departments.forEach(dept => {
        const statusBadge = dept.status === 'active' ? 'success' : 
                           dept.status === 'forming' ? 'warning' : 'error';

        html += `
            <div class="card-header" style="margin-top: 24px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="font-size: 28px;">${dept.emoji}</span>
                    <h2>${dept.name}</h2>
                </div>
                <span class="badge ${statusBadge}">${dept.status}</span>
            </div>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">${dept.mission}</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px;">
        `;

        dept.agents.forEach(agent => {
            const agentStatus = agent.status === 'active' ? 'success' : 
                               agent.status === 'planned' ? 'warning' : 'error';

            html += `
                <div class="card" style="margin: 0;">
                    <div class="card-header" style="margin-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span style="font-size: 24px;">${agent.emoji}</span>
                            <h3 style="font-size: 16px;">${agent.name}</h3>
                        </div>
                        <span class="badge ${agentStatus}">${agent.status}</span>
                    </div>
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;">
                        ${agent.role}
                    </div>
                    <div style="font-size: 12px; color: var(--text-tertiary); margin-bottom: 12px;">
                        <strong>Runtime:</strong> ${agent.runtime}
                        ${agent.schedule ? `<br><strong>Schedule:</strong> ${agent.schedule}` : ''}
                    </div>
                    <div class="capabilities">
                        ${agent.capabilities.map(cap => `
                            <span class="capability-tag" style="font-size: 11px;">
                                ${formatCapability(cap)}
                            </span>
                        `).join('')}
                    </div>
                </div>
            `;
        });

        html += '</div>';
    });

    agentsList.innerHTML = html;
}

function setupSearch() {
    const searchInput = document.getElementById('agentSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const agentCards = document.querySelectorAll('.card');

        agentCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function formatCapability(cap) {
    return cap.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
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
