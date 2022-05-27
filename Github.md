When using this project this is the structure this project will be following.

## Issues

Before starting work there should be an issue that you will be referencing in the branch and pull request. Things an issue is required to have:

- The correct label for the issue
- Assigned to the correct project

  If the company hasn't reviewed the issue it goes into the "backlog" swimlane otherwise it goes into the "to do" swimlane

- Assigned to a milestone if there is one being used

### Company Labels

These are the labels that the company uses and who is responsible for them

| Label             | Description                                                                       | Who's responsible for assigning label | Colour  |
| ----------------- | --------------------------------------------------------------------------------- | ------------------------------------- | ------- |
| bug/issue         | A bug/issue discovered in testing or programming                                  | The developer                         | #bb3a4a |
| feedback          | Feedback required on this issue. All post work discussions etc                    | The developer                         | #ff99dd |
| need-help         | Needs help on resolution.                                                         | The developer                         | #ff33cc |
| need-more-details | Issues that require planning or investigation before expected solution is defined | The developer                         | #EE9999 |
| planning          | Planning issue may contain reference to tasks or pre work discussion              | The developer                         | #ff66d9 |
| question          | Question in description or comments and need answering                            | The developer                         | #ffccf2 |
| back-end          | C# or any server side code                                                        | The developer                         | #99d6ff |
| front-end         | HTML/CSS/JS                                                                       | The developer                         | #b3e0ff |
| feature-request   | Something that one or many people asked for                                       | The developer                         | #6f5e52 |
| internal-idea     | Something good but we don't know if it can or cannot happen. Before Enhancement   | The developer                         | #8c724f |
| high              | Priority defined by business                                                      | The Company                           | #9933ff |
| medium            | Priority defined by business                                                      | The Company                           | #b366ff |
| low               | Priority defined by business                                                      | The Company                           | #cc99ff |

### Conventional Commits

All commits must follow the structure of a conventional commit. This structure is as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Heres the articles that goes into further detail on this subject: [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

There also is a vsCode extension that will help with following this pattern: [vsCode Extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

#### Commit Types

| Type     | Full Name                | Description                                                            |
| -------- | ------------------------ | ---------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                          |
| fix      | Bug Fixes                | A fix for a known bug or issue                                         |
| docs     | Documentation            | Documentation changes or addition                                      |
| style    | Styles                   | Changes that doesn't affect the code only in formatting                |
| refactor | Code Refactoring         | Changes to the code that neither fixes a bug or adds a new feature     |
| perf     | Performance Improvements | Changes to the code that improves the performance                      |
| test     | Test in code             | Adding tests to the code or correcting current tests                   |
| build    | Build changes            | Changes that effect the build of the project or any extra dependencies |
| revert   | Reverts                  | Reverts to previous commit or work                                     |

## Pull Requests

### Creating Pull Requests

1. Create a branch starting with ft-[scope]-[issue number]-[branch description]

2. Edit the [ReleaseNotes.md](ReleaseNotes.md) with what you plan to work on. (Making sure its in the correct section)

3. Commit the [ReleaseNotes.md](ReleaseNotes.md) change to branch

4. Create a pull request before doing any coding

5. Link the project

6. Add `- Closes # Issue Number` to the description of the pull request.

### Set Pull Request to Draft

- If you haven't finished the pull request but have stopped working on it for the day make sure that you set the Pull Request to draft

### Submitting Pull Request

1. After you've finished the task, set the project in the pull request to Done

2. Request a review from the required person

### Next task requires the Pull Request

- If your next task needs the previous work, make a branch off the previous branch and continue to work and when the previous pull request is merged to master and is deleted, the new pull request will

  change to being merged to master.

### Reviewing the Pull Requests

If you are the reviewer for a pull request theres to possible requirements you need to do, these are:

- If there are no issues and it is merged: Merge the pull request and delete the branch
- There are either conflicts or changes required: Send it back to the developer and move the pull request back to "in progress" on the project
