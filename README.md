<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">KNOWLEDGE-EXTRACT</h1></p>
<p align="center">
	<em>Unlocking Knowledge, Powering Conversations.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/sandeepsalwan1/AnimalCare?style=flat&logo=opensourceinitiative&logoColor=white&label=License&color=0080ff" alt="MIT License">
	<img src="https://img.shields.io/github/last-commit/sandeepsalwan1/knowledge-extract?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/sandeepsalwan1/knowledge-extract?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/sandeepsalwan1/knowledge-extract?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
  - [🧪 Testing](#🧪-testing)
- [📌 Project Roadmap](#-project-roadmap)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The Knowledge-Extract project revolutionizes the way we interact with digital content by transforming real-time conversations into structured, readable markdown documents. Leveraging advanced APIs for transcription and speech synthesis, this tool is ideal for educators, journalists, and content creators who need to capture and document dynamic interactions effortlessly. Its seamless integration and user-friendly interface ensure a smooth, efficient workflow, enhancing productivity and content accessibility.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes a multi-language stack including Python, JavaScript, and HTML.</li><li>Employs both frontend and backend components, likely with a web interface.</li><li>Containerized with Docker for easy deployment and isolation.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Includes a variety of dependencies indicating a complex but potentially feature-rich application.</li><li>Uses modern libraries like Pydantic for data validation and FastAPI or similar frameworks.</li><li>Codebase likely follows modern coding practices given the use of tools like poetry for dependency management.</li></ul> |
| 📄 | **Documentation** | <ul><li>Presence of 'readmeai' suggests automated documentation generation or enhancement.</li><li>Use of 'robots.txt' implies web crawling management, important for SEO and web visibility.</li><li>Documentation might be extensive to cover diverse dependencies and their integration.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Integrates with various data handling and visualization libraries like pandas, matplotlib, and scikit-learn.</li><li>Web technologies integration (HTML, CSS, JavaScript) for frontend development.</li><li>API development suggested by dependencies on libraries like 'fastjsonschema' and 'httpcore'.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Use of Docker and poetry implies a modular approach to dependency and environment management.</li><li>Project likely structured in a way that supports scalability and maintenance.</li><li>Modular codebase can be inferred from the diverse set of dependencies catering to different functionalities.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Dependencies like 'pytest', 'pluggy', and 'mock' suggest a strong emphasis on testing.</li><li>Use of continuous integration tools or practices could be inferred.</li><li>Testing likely covers multiple layers of the application, from backend logic to frontend integration.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Use of performance optimization libraries like 'numpy' and 'pandas' for data handling.</li><li>'psutil' and 'matplotlib' for resource monitoring and visualization.</li><li>Performance considerations are likely a priority given the computational nature of tasks.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Security libraries like 'cryptography', 'argon2-cffi-bindings', and 'pydantic' for data validation and secure data handling.</li><li>Use of 'docker' also suggests an isolated environment which enhances security.</li><li>Web security features indicated by 'urllib3' and 'requests' for safe HTTP requests.</li></ul> |

---

## 📁 Project Structure

```sh
└── knowledge-extract/
    ├── README.md
    ├── client_backend
    │   ├── Dockerfile
    │   ├── README.md
    │   ├── __pycache__
    │   ├── conversation_custom.py
    │   ├── main.py
    │   ├── poetry.lock
    │   ├── prompts.py
    │   ├── pyproject.toml
    │   └── test_ai.py
    ├── python_direct
    │   └── run.py
    ├── requirements.txt
    └── vocode-web
        ├── README.md
        ├── config-overrides.js
        ├── package-lock.json
        ├── package.json
        ├── public
        └── src
```


### 📂 Project Index
<details open>
	<summary><b><code>KNOWLEDGE-EXTRACT/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/requirements.txt'>requirements.txt</a></b></td>
				<td>- The `requirements.txt` file serves as a critical component within the broader architecture of the project, primarily focusing on managing and documenting the dependencies required for the project's environment<br>- This file lists all the necessary Python packages and their specific versions to ensure that the project runs consistently across different setups by avoiding discrepancies caused by varying package versions<br>- It includes a variety of libraries, such as `aiohttp` for asynchronous HTTP networking, `anyio` which abstracts asynchronous features across different libraries, and specific dependencies that are tailored for performance and security like `argon2-cffi` for password hashing.

In essence, `requirements.txt` is pivotal for maintaining a stable development, testing, and production environment, facilitating reproducibility and compatibility in the project's lifecycle<br>- This file is typically used in conjunction with tools like `pip` to install the specified versions of packages, thereby aligning the project's software stack across different machines and deployments.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- python_direct Submodule -->
		<summary><b>python_direct</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/python_direct/run.py'>run.py</a></b></td>
				<td>- Establishes a streaming conversation environment using external APIs for transcription, dialogue management, and speech synthesis<br>- It configures and initiates a real-time interactive session that integrates microphone input and speaker output, handling user interruptions and maintaining the flow of conversation until manually terminated.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- vocode-web Submodule -->
		<summary><b>vocode-web</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/package-lock.json'>package-lock.json</a></b></td>
				<td>- The file `vocode-web/package-lock.json` is a crucial component within the `vocode-web` project, primarily serving as a manifest for managing exact versions of npm dependencies and ensuring consistent installations across different environments<br>- This file locks down the versions of all packages and their dependencies, which is essential for maintaining the reliability and stability of the application across multiple development and production setups<br>- It includes dependencies critical for the project's front-end development, such as React and various testing libraries, which are integral for building and testing the user interface<br>- This setup supports the project's overall architecture by ensuring that all team members and deployment processes utilize precisely the same versions of each package, thereby avoiding discrepancies that can arise from version mismatches in a dynamically evolving ecosystem like npm.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/config-overrides.js'>config-overrides.js</a></b></td>
				<td>- Config-overrides.js customizes the Webpack configuration for the vocode-web project, ensuring compatibility and functionality enhancements<br>- It modifies the resolution fallbacks and integrates new plugins to support Buffer globally within the application<br>- This adjustment facilitates smoother integration of Node.js modules that rely on Buffer, enhancing the project's overall build process and runtime execution.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/package.json'>package.json</a></b></td>
				<td>- Defines the configuration and dependencies for the vocode-web project, setting up the environment for a React application<br>- It includes libraries for testing, document object model rendering, and markdown processing, ensuring compatibility across major browsers<br>- The scripts section provides commands for starting, building, testing, and ejecting the application.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/ConversationComponent.js'>ConversationComponent.js</a></b></td>
						<td>- ConversationComponent serves as the interactive interface for capturing and processing user conversations in real-time<br>- It utilizes web sockets for live communication, converts speech to text, and sends this data for server-side processing to generate readable markdown content, which is then displayed to the user.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/index.css'>index.css</a></b></td>
						<td>- Establishes the foundational styling for the web interface of the vocode-web project, setting universal font properties and smoothing for text and code elements across the application<br>- This CSS file ensures a consistent visual experience by standardizing typography and eliminating default browser styling.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/App.css'>App.css</a></b></td>
						<td>- App.css establishes the visual styling for the main application interface in the vocode-web project<br>- It centers text alignment, animates the logo, and sets the app header's background color, size, and font<br>- Additionally, it ensures accessibility with motion preferences and styles links for better visibility and interaction.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/App.test.js'>App.test.js</a></b></td>
						<td>- App.test.js serves as a unit test for the main application component in the vocode-web project<br>- It verifies the presence of a specific link within the App component, ensuring that the application's user interface renders expected elements correctly, thereby supporting the reliability and stability of the user interface throughout the development lifecycle.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/setupTests.js'>setupTests.js</a></b></td>
						<td>- Enhances testing capabilities within the vocode-web project by integrating custom Jest matchers from jest-dom<br>- This setup facilitates more expressive assertions on DOM nodes during testing, improving the clarity and efficiency of tests<br>- It supports developers in verifying UI components against expected text contents and other DOM properties, crucial for ensuring the reliability of the user interface.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/App.js'>App.js</a></b></td>
						<td>- App.js serves as the root component in the vocode-web project, orchestrating the user interface<br>- It integrates the ConversationComponent within the application's main layout, defined under a styled header, facilitating the primary interactive element of the web application<br>- This setup centralizes user interactions and visual structure in the project's architecture.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/reportWebVitals.js'>reportWebVitals.js</a></b></td>
						<td>- ReportWebVitals.js enhances the performance monitoring of the vocode-web application by dynamically importing and utilizing web vitals metrics such as CLS, FID, FCP, LCP, and TTFB<br>- These metrics help in assessing the user experience quality by measuring visible and interactive aspects of the application, contributing to its overall responsiveness and efficiency.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/src/index.js'>index.js</a></b></td>
						<td>- Serves as the entry point for the vocode-web application, initializing the React framework and rendering the main App component within a strict mode context<br>- It also includes styling through index.css and sets up performance monitoring with reportWebVitals, facilitating potential enhancements based on user interaction metrics.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>public</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/public/index.html'>index.html</a></b></td>
						<td>- Serves as the entry point for the web application, initializing the user interface by loading essential resources like icons, metadata, and the manifest for app installation<br>- It sets up the environment for the React application to mount, ensuring compatibility and responsiveness across various devices.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/public/manifest.json'>manifest.json</a></b></td>
						<td>- Manifest.json configures the web application's appearance on mobile devices, defining essential properties such as app names, icons, and theme colors<br>- It ensures the app can be installed on home screens with specific icons and colors, enhancing user experience and brand consistency across devices<br>- This setup supports the project's broader goal of providing a seamless, standalone user interface.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/vocode-web/public/robots.txt'>robots.txt</a></b></td>
						<td>- Manages web crawler access for the vocode-web project, specifically within the public directory<br>- By setting no restrictions in the robots.txt, it allows all search engines to index all content, enhancing the site's visibility and searchability on the internet<br>- This approach supports optimal SEO practices for the website.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- client_backend Submodule -->
		<summary><b>client_backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/client_backend/conversation_custom.py'>conversation_custom.py</a></b></td>
				<td>- Manages real-time conversations through a WebSocket interface, integrating transcription and synthesis services<br>- It initializes conversation components, handles incoming audio, and manages events related to transcripts, ensuring seamless interaction between the user and the system via audio streams.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/client_backend/test_ai.py'>test_ai.py</a></b></td>
				<td>- Test_summarize_conversation in client_backend/test_ai.py validates the functionality of summarizing conversations within the application<br>- It uses a series of mock messages between a user and an assistant to ensure the summarize_conversation function accurately condenses and reflects the interaction's essence, crucial for enhancing user experience and system reliability.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/client_backend/main.py'>main.py</a></b></td>
				<td>- Centralizes backend functionalities for a FastAPI application, handling conversation processing and transcript summarization into blog posts<br>- It integrates with OpenAI's GPT models and Azure's text-to-speech services, facilitating dynamic conversation handling and audio synthesis, while ensuring cross-origin resource sharing via middleware configuration.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/client_backend/pyproject.toml'>pyproject.toml</a></b></td>
				<td>- Defines the configuration for the client-backend component, specifying its dependencies and build system<br>- It sets the Python version, integrates external libraries like python-dotenv, vocode, and elevenlabs, and utilizes Poetry for package management<br>- This setup ensures the backend aligns with the required libraries and Python standards for seamless integration and deployment within the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/client_backend/prompts.py'>prompts.py</a></b></td>
				<td>- Client_backend/prompts.py defines interactive templates for generating blog content and conducting interviews within the application<br>- It includes a blog generator for creating Markdown-formatted articles from transcripts and prompts for guiding deep, insightful interviews, enhancing the user engagement and content creation process in the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/sandeepsalwan1/knowledge-extract/blob/master/client_backend/Dockerfile'>Dockerfile</a></b></td>
				<td>- Establishes the environment for the client backend by setting up a Docker container with Python and necessary audio libraries<br>- It installs dependencies, configures a non-virtual environment for Python packages, and prepares the main application to run on a server using Uvicorn, exposing it on port 3000.</td>
			</tr>
			</table>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with knowledge-extract, ensure your runtime environment meets the following requirements:

- **Programming Language:** JavaScript
- **Package Manager:** Pip, Npm, Poetry
- **Container Runtime:** Docker


### ⚙️ Installation

Install knowledge-extract using one of the following methods:

**Build from source:**

1. Clone the knowledge-extract repository:
```sh
❯ git clone https://github.com/sandeepsalwan1/knowledge-extract
```

2. Navigate to the project directory:
```sh
❯ cd knowledge-extract
```

3. Install the project dependencies:


**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-INSTALL-COMMAND-HERE'
```


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```


**Using `poetry`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-INSTALL-COMMAND-HERE'
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker build -t sandeepsalwan1/knowledge-extract .
```




### 🤖 Usage
Run knowledge-extract using the following command:
**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-RUN-COMMAND-HERE'
```


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```


**Using `poetry`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-RUN-COMMAND-HERE'
```


**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker run -it {image_name}
```


### 🧪 Testing
Run the test suite using the following command:
**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-TEST-COMMAND-HERE'
```


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```


**Using `poetry`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-TEST-COMMAND-HERE'
```


---
## 📌 Project Roadmap

- [X] **`Task 1`**: <strike>Implement login.</strike>
- [ ] **`Task 2`**: Implement More agents.
- [ ] **`Task 3`**: Make more userfriendly.

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/sandeepsalwan1/knowledge-extract/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/sandeepsalwan1/knowledge-extract/issues)**: Submit bugs found or log feature requests for the `knowledge-extract` project.
- **💡 [Submit Pull Requests](https://github.com/sandeepsalwan1/knowledge-extract/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/sandeepsalwan1/knowledge-extract
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/sandeepsalwan1/knowledge-extract/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=sandeepsalwan1/knowledge-extract">
   </a>
</p>
</details>

---

## 🎗 License

This project is released under the [MIT License](https://opensource.org/licenses/MIT/). For more details, please refer to the [LICENSE](./LICENSE) file.

---
