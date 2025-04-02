# Commit Message Format

Each commit message should follow the conventional commits format:

<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

Types:
- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that don't affect the code's meaning
- refactor: Code changes that neither fix a bug nor add a feature
- perf: Performance improvements
- test: Adding missing tests or correcting existing tests
- chore: Changes to build process or auxiliary tools
- ci: Changes to CI configuration files and scripts

Example:
feat(auth): add login functionality

Implements OAuth2 login flow with Google
Closes #123
