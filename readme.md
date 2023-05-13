# BSA | Quality Criteria

Set of rules that is required for the project

- [JavaScript 🟨](./src/javascript.md)
- [.NET 🟦](./src/dotnet.md)

## Simple Start

1. **`npm install`**
2. **`npx simple-git-hooks`**
3. Enjoy <3

**Note**: You must abide the linter rules, otherwise it won’t pass your changes through!

Before committing changes, make sure to run `npm run remark` command to ensure that markdown files are formatted correctly.

## Git

### Pull Request flow

```
<project-prefix>-<issue-number>: <ticket-title>
```

#### Example

- `qc-5: Add new JS rules`

#### Rules

- assignee is required
- label is required
- milestone is required
- project is required

**Note**: This repository is using `danger.js` to enforce rules and checks on pull requests.

### Branch flow

```
<type>/<project-prefix>-<issue-number>-<short-desc>
```

#### Types

- task
- fix

#### Examples

- `task/qc-5-interfaces-rule`
- `fix/qc-16-fix-classes-naming-rule`

### Commit flow

```
<project-prefix>-<issue-number>: <modifier> <description>
```

#### Modifiers

- `+` (add)
- `*` (edit)
- `-` (remove)

#### Examples

- `qc-5: + type naming rule`
- `qc-12: * array methods rule`
- `qc-16: - es-modules forcing rule`
