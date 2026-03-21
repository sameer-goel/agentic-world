document.addEventListener('DOMContentLoaded', () => {
    renderCronJobs();
    updateCronStats();
    updateLastUpdated();
});

function renderCronJobs() {
    const cronJobsList = document.getElementById('cronJobsList');
    if (!cronJobsList) return;

    cronJobsList.innerHTML = '';

    cronJobs.forEach(job => {
        const jobCard = createJobCard(job);
        cronJobsList.appendChild(jobCard);
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = 'health-item';
    card.style.padding = '16px';
    card.style.cursor = 'pointer';

    const statusBadge = job.status === 'active' ? 'success' : 
                       job.status === 'paused' ? 'warning' : 'error';

    card.innerHTML = `
        <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                <span style="font-size: 24px;">⏰</span>
                <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 15px;">${job.name}</div>
                    <div style="font-size: 12px; color: var(--text-tertiary); margin-top: 2px;">
                        ID: ${job.id}
                    </div>
                </div>
                <span class="badge ${statusBadge}">${job.status}</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 12px; font-size: 13px;">
                <div>
                    <div style="color: var(--text-tertiary); font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Schedule</div>
                    <code style="background: var(--bg-primary); padding: 4px 8px; border-radius: 4px; font-size: 12px;">
                        ${job.schedule}
                    </code>
                </div>
                <div>
                    <div style="color: var(--text-tertiary); font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Last Run</div>
                    <div>${job.lastRun}</div>
                </div>
                <div>
                    <div style="color: var(--text-tertiary); font-size: 11px; text-transform: uppercase; margin-bottom: 4px;">Next Run</div>
                    <div style="color: var(--accent-green);">${job.nextRun}</div>
                </div>
            </div>
        </div>
    `;

    return card;
}

function updateCronStats() {
    // Active jobs count
    const activeJobs = cronJobs.filter(j => j.status === 'active').length;
    document.getElementById('activeJobs').textContent = activeJobs;
    document.getElementById('activeJobsCount').textContent = activeJobs;

    // Daily jobs count (jobs that run multiple times per day)
    const dailyJobs = cronJobs.filter(j => j.schedule.includes('*')).length;
    document.getElementById('dailyJobs').textContent = dailyJobs;

    // Next job (simplified - just show first one)
    const nextJob = cronJobs[0]?.nextRun || '--';
    document.getElementById('nextJob').textContent = nextJob;

    // Last run (simplified - just show most recent)
    const lastRun = cronJobs[0]?.lastRun || '--';
    document.getElementById('lastRun').textContent = lastRun;
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
