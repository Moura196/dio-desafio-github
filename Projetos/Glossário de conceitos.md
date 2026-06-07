GH-900: GitHub Foundations - Final Exam Review Guide

1. High-Priority: Domain 1 - Understand Git and GitHub Basics (25–30%)

The Hook: Imagine a historian without a record of past events or a scientist unable to replicate an experiment. In software, managing the "multiverse" of code changes without a system leads to chaos. Version control provides the "time machine" necessary to document, experiment, and collaborate safely.

Version Control Mechanics

Version control is the practice of tracking and managing changes to software code. It provides a source of truth, allowing teams to revisit previous states and work in parallel.

| Feature | Git (The Local Engine) | GitHub (The Cloud-Based Habitat) |
| --- | --- | --- |
| Definition | A distributed version control system. | A cloud-based platform built on Git. |
| Primary Role | Tracks changes in files locally on a machine. | Provides a centralized habitat for collaboration. |
| Environment | Operates in a local "multiverse" of history. | Offers a shared ecosystem for team interactions. |

Core Concepts

* Repositories: The fundamental "habitat" containing all project files and their entire revision history.
* Commits: Snapshots of your work. Each commit documents a specific point in time within the repository's history.
* Branches: Independent lines of development that allow you to work on features or fixes without disturbing the "Main" codebase.

The GitHub Flow

The GitHub Flow is a lightweight, branch-based workflow for collaborative delivery:

1. Create a Branch: Isolate your experiment from the stable environment.
2. Add Commits: Document your progress as you build.
3. Open a Pull Request: Propose your changes and initiate a discussion.
4. Merge: Once approved, integrate your branch back into the main history.

Markdown for Communication: Markdown is the language of the habitat. It ensures clarity in Issues and Pull Requests.

* Formatting: Use headings, bold text, and task lists to organize information.
* Slash Commands: Use / commands (e.g., /template) to speed up manual tasks and automate common responses within the interface.

Platform Access

* GitHub Desktop: A graphical interface that simplifies local Git operations for those who prefer visual over command-line interaction.
* GitHub Mobile: Keeps you connected to the ecosystem on the go, allowing for notification management and basic code review.

Organizational Structure

* Individual Accounts: The entry point for personal projects and open-source contributions.
* Organizations: Shared accounts for groups to manage multiple projects with tiered permissions.
* Enterprise Options: Advanced management for large-scale habitats, featuring Enterprise Managed Users (EMUs) which allow identities to be managed through an external identity provider (IdP).

Exam Golden Tip: A commit is a local operation that saves changes to your machine's history; a push is the act of uploading those commits to the remote habitat on GitHub.


--------------------------------------------------------------------------------


2. Core-Priority: Domain 2 - Working with GitHub Repositories (10–15%)

The Hook: A repository without structure is like an unmapped wilderness. Essential files act as the laws and maps of your project, ensuring every contributor knows how to navigate and contribute safely.

Essential Repository Files

* README: The project's "front door," explaining what the code does and how to use it.
* LICENSE: The legal framework defining how the code may be shared and reused.
* CONTRIBUTING: The guide for "outsiders" to become contributors.
* CODEOWNERS: Identifies the specific experts responsible for approving changes in certain directories.
* SECURITY: Detailed instructions on how to report vulnerabilities without exposing the habitat to threats.

Repository Management

* Templates: Use standardized templates to ensure all new repositories follow organizational best practices.
* Branching Strategies: Implement naming conventions and structures to manage complex release cycles.

Visibility and Insights

* Repository Insights: Visualizes contributor trends and project activity.
* Feature Previews: Allows users to opt-in to experimental platform features to test new functionalities.
* Dependency Insights: Tracks external libraries to monitor for security vulnerabilities and health.
* Stars and Metrics Dashboards: Indicators of project popularity and technical performance.

Exam Golden Tip: The CODEOWNERS file is a powerful automation tool; it automatically assigns the correct reviewers to a Pull Request based on which files were modified.


--------------------------------------------------------------------------------


3. Core-Priority: Domain 3 - Collaborate Using GitHub (10–15%)

The Hook: Communication is the lifeblood of the ecosystem. GitHub provides specialized "watering holes" where different types of interaction occur, from bug reports to community brainstorming.

Collaboration Triad

* Issues: For tracking specific tasks, bugs, or feature requests.
* Pull Requests (PRs): The specialized mechanism for proposing, reviewing, and merging code changes.
* Discussions: A collaborative space for open-ended questions and community interaction outside the rigid structure of code commits.

Workflow Management

* Linking: Connect PRs to Issues to automate the project lifecycle (e.g., automatically closing an issue when a PR is merged).
* Organization: Use Labels for categorization, Milestones for tracking progress, and Filters to find specific work items.

Knowledge Sharing

* Gists: Quick snippets of code or text.
* Wikis: Long-form documentation hosted within the repository.
* GitHub Pages: Turns a repository into a live, hosted website.

Notifications and Subscriptions

Managing information flow is vital to avoid "noise":

* Watch: Use this to subscribe to all activity in a repository.
* Participating: Limits notifications to threads you are explicitly involved in (mentions or assignments).
* Custom Subscriptions: Tailor alerts to specific events like "Releases" or "Security Alerts."

Exam Golden Tip: In any professional or collaborative habitat, the Pull Request is the mandatory gateway for merging code, ensuring nothing enters the "Main" branch without peer review.


--------------------------------------------------------------------------------


4. Core-Priority: Domain 4 - Modern Development Practices (10–15%)

The Hook: Automation is the force multiplier of the modern developer. By offloading repetitive tasks to AI and CI/CD, we free the human mind to focus on high-level architecture.

GitHub Actions

GitHub Actions is the automation engine for CI/CD (Continuous Integration and Continuous Deployment). It executes workflows triggered by platform events (like a push or a PR) to build, test, and deploy code.

GitHub Copilot

The world's most widely adopted AI developer tool now features 2026-standard updates:

* AI Suggestions: Real-time code completion within your IDE.
* Agent Mode: Allows Copilot to act as an agent, assisting from initial issue analysis to the final merge.
* Multi-Model Support: Flexibility to choose between different AI models to suit specific coding tasks.
* Plans: Tiered into Individual, Business, and Enterprise levels.

Cloud Environments

* github.dev: A lightweight, browser-based editor accessed by pressing the . key. It is ideal for quick edits but lacks a runtime.
* GitHub Codespaces: A complete, containerized development environment. It includes a virtual machine, terminal access, and supports dev containers for environment-as-code customization.

Exam Golden Tip: Remember the hardware distinction: Codespaces provides a full virtual machine with compute power, while github.dev is merely a web-based text editor.


--------------------------------------------------------------------------------


5. Core-Priority: Domain 6 - Privacy, Security, and Administration (10–15%)

The Hook: Security is not an afterthought; it is the boundary that protects our habitat from predators. Administration must be built on trust but verified through technical controls.

Account Security

* 2FA & Passkeys: The primary defense against unauthorized access. Every professional account should require a second factor for authentication.

Access and Permissions

* Principle of Least Privilege: This is the core philosophy of GitHub administration. Users must only be granted the minimum level of access (e.g., Read, Write, Admin) required to perform their specific role.
* Enterprise Managed Users (EMUs): Provides a mechanism for enterprises to manage account identities through an external identity provider (IdP).
* Visibility Settings: Control whether a repository is Public (open to all) or Private (restricted to specific members).

Policy and Protection

* Branch Protection Rules: Safeguard the "Main" branch by requiring status checks, signed commits, or a minimum number of approvals before a merge can occur.
* Copilot Policies: Organization-wide settings that manage how AI tools are used and who has access to them.

Exam Golden Tip: Administration and permissions should always adhere to the Principle of Least Privilege to minimize the "blast radius" of any potential account compromise.


--------------------------------------------------------------------------------


6. Secondary-Priority: Domain 5 - Manage Projects with GitHub (5–10%)

The Hook: Storing code is not the same as managing work. While a repository holds the "what" (the code), a Project manages the "when" and "who" (the schedule and team).

GitHub Projects

* Layouts: View your work in Tables, Boards, or Roadmaps to track progress across multiple repositories.
* Automation: Use Workflows to move cards automatically based on issue status changes.
* Streamlining: Use Saved Replies and Assignees to maintain a high team velocity.

Project Insights

Provides data-driven dashboards to monitor team productivity, track task completion rates, and identify bottlenecks before they stall development.

Exam Golden Tip: A Repository is a container for code and its history; a Project is a management tool for planning and tracking work. They are separate entities that work together.


--------------------------------------------------------------------------------


7. Secondary-Priority: Domain 7 - Explore the GitHub Community (5–10%)

The Hook: GitHub is more than a tool; it is a global community. The "InnerSource" movement takes the successful patterns of open-source—transparency and collaboration—and applies them within the private walls of a corporation.

Open Source & Sponsors

* Open Source: Software with source code that anyone can inspect, modify, and enhance.
* GitHub Sponsors: A way to provide financial backing to the maintainers who keep open-source ecosystems healthy.

Community Mechanics

* Forks: A Fork is your personal copy of someone else's repository. It allows you to experiment or prepare a contribution to the original project via a Pull Request.
* GitHub Marketplace: A central hub to find Actions and Apps that extend the platform's capabilities.
* InnerSource: The practice of using open-source patterns (like PRs and transparent issues) within a private organization to break down silos.

Exam Golden Tip: A Fork is a copy of a repository that lives in your account, whereas a Branch is a copy that lives within the original repository. Use a Fork when you don't have write access to the original project.
