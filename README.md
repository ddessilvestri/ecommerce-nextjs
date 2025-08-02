# E-commerce Platform

A modern e-commerce platform built with Next.js, TypeScript, and AWS Amplify.

## 🚀 Features

- **Authentication**: AWS Amplify integration with Cognito
- **Modern UI**: Built with shadcn/ui components
- **Type Safety**: Full TypeScript support
- **Code Quality**: ESLint, Prettier, and Husky for code standards
- **CI/CD**: Automated testing, building, and deployment
- **Version Management**: Automated releases with release-please

## 🛠️ Development Tools

### Code Quality Tools

#### **Prettier**

- **Purpose**: Code formatting and style consistency
- **Configuration**: `.prettierrc` and `.prettierignore`
- **Commands**:
  - `npm run format`: Format all files
  - `npm run format:check`: Check if files are formatted

#### **ESLint**

- **Purpose**: Code linting and error detection
- **Configuration**: Uses Next.js ESLint config
- **Commands**:
  - `npm run lint`: Lint all files
  - `npm run lint:fix`: Lint and auto-fix issues

#### **Husky + lint-staged**

- **Purpose**: Pre-commit hooks for code quality
- **What it does**: Runs ESLint and Prettier on staged files before commit
- **Configuration**: `.husky/pre-commit` and `lint-staged` in package.json

### Type Checking

- **TypeScript**: Full type safety with `npm run type-check`
- **Configuration**: `tsconfig.json`

## 🔄 GitHub Actions

### **CI Workflow** (`.github/workflows/ci.yml`)

Runs on every push and PR to main/develop:

- **Build**: Tests on Node.js 18.x and 20.x
- **Type Check**: TypeScript type checking
- **Lint**: ESLint validation
- **Format Check**: Prettier formatting verification
- **Security**: npm audit for vulnerabilities

### **Release-Please Workflow** (`.github/workflows/release-please.yml`)

Automated version management:

- **Triggers**: When PR from develop to main is merged
- **Actions**:
  - Creates version bump PR
  - Updates CHANGELOG.md
  - Updates package.json version
  - Creates GitHub release when merged

### **Dependency Update Workflow** (`.github/workflows/dependency-update.yml`)

Automated dependency management:

- **Schedule**: Weekly on Sundays
- **Actions**: Checks for outdated packages and updates them

## 📋 Development Workflow

### **Branch Strategy**

```
feature-branch → develop → main → release
```

### **Commit Convention**

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `ci:` CI/CD changes
- `chore:` Maintenance tasks

### **Release Process**

1. Work on feature branches
2. Merge features to `develop`
3. Create PR from `develop` to `main`
4. Release-please creates version PR
5. Merge version PR to create GitHub release

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ecommerce

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your AWS Amplify configuration
```

### Development

```bash
# Start development server
npm run dev

# Run linting
npm run lint

# Run type checking
npm run type-check

# Format code
npm run format

# Build for production
npm run build
```

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_AWS_REGION=your-region
NEXT_PUBLIC_AWS_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_AWS_USER_POOL_CLIENT_ID=your-client-id
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── layouts/        # Layout components
├── contexts/           # React contexts (auth, etc.)
├── lib/               # Utility libraries
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes following the commit convention
3. Run `npm run lint` and `npm run format` before committing
4. Create a PR to `develop`
5. After review, merge to `develop`
6. When ready for release, create PR from `develop` to `main`

## Code Quality - Run before commiting

```bash
   npm run lint          # Check for issues
   npm run lint:fix      # Auto-fix issues
   npm run format        # Format code
   npm run type-check    # Type checking
```

## ✍️ Conventional Commits (Summary)

We use [Conventional Commits](https://www.conventionalcommits.org/) to automate changelogs and versioning with [release-please](https://github.com/googleapis/release-please).

| Type       | Emoji | Description                           |
| ---------- | :---: | ------------------------------------- |
| `feat`     |  ✨   | Add a new feature                     |
| `fix`      |  🐛   | Fix a bug                             |
| `docs`     |  📝   | Update documentation                  |
| `style`    |  🎨   | Code style changes (no logic changes) |
| `refactor` |  ♻️   | Refactor code (no feature or bug fix) |
| `perf`     |  ⚡️  | Improve performance                   |
| `test`     |  ✅   | Add or update tests                   |
| `chore`    |  🔧   | Maintenance tasks (build, deps, etc.) |
| `ci`       |  🛠️   | CI/CD config or script changes        |
| `build`    |  📦   | Build system or dependency changes    |
| `revert`   |  ⏪   | Revert a previous commit              |

> 🔥 **Breaking changes**: Use `!` (e.g. `feat!:`) or add a `BREAKING CHANGE:` footer to trigger a **major version bump**.

## 📝 License

This project is licensed under the MIT License.
