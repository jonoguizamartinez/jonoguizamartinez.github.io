document.addEventListener("DOMContentLoaded", () => {
    // Hide Loader
    setTimeout(() => {
        const loader = document.getElementById("loading-screen");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }, 1000);

    // Fetch GitHub Repositories
    fetchGitHubProjects("shishir420-git");
});

async function fetchGitHubProjects(username) {
    const container = document.getElementById("projects");
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const repos = await response.json();
        
        container.innerHTML = repos.map(repo => `
            <div class="project-card">
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description provided."}</p>
                <div class="card-footer">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <a href="${repo.html_url}" target="_blank">View Code →</a>
                </div>
            </div>
        `).join("");
    } catch (err) {
        container.innerHTML = "<p>Failed to load projects.</p>";
    }
}