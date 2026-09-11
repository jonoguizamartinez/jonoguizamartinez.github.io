document.addEventListener("DOMContentLoaded", () => {
    // 1. Loading Screen Logic
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        if(loader) {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }
    }, 1000);

    // 2. Render Fake Repositories
    renderFakeProjects();
});

function renderFakeProjects() {
    const container = document.getElementById("projects");
    
    // Fake JSON array to simulate an API response
    const fakeRepos = [
        {
            name: "awesome-placeholder-app",
            description: "A completely fake application built to demonstrate layout grids.",
            stargazers_count: 42,
            html_url: "#"
        },
        {
            name: "lorem-ipsum-cli",
            description: "Command line interface for generating nonsense text in your terminal.",
            stargazers_count: 128,
            html_url: "#"
        },
        {
            name: "null-pointer-exception",
            description: "Just an empty repository. Nothing to see here.",
            stargazers_count: 0,
            html_url: "#"
        },
        {
            name: "cyber-neon-theme",
            description: "A VS Code theme that makes everything look like the Matrix.",
            stargazers_count: 312,
            html_url: "#"
        }
    ];

    // Build the grid
    container.innerHTML = fakeRepos.map(repo => `
        <div class="repo-card" style="border: 1px solid #333; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
            <h3 style="margin-top:0;">${repo.name}</h3>
            <p style="color: #888; font-size: 0.9rem;">${repo.description}</p>
            <div class="repo-footer" style="display: flex; justify-content: space-between; margin-top: 1rem;">
                <span>⭐ ${repo.stargazers_count}</span>
                <a href="${repo.html_url}" style="color: #00ff66; text-decoration: none;">View Repo</a>
            </div>
        </div>
    `).join("");
}