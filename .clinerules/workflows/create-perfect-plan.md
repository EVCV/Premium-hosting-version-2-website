---
description: Create a comprehensive implementation plan from requirements document through extensive research
argument-hint: [requirements-file-path]
---

# Create Implementation Plan from Requirements

> **Purpose**
> To generate a self-contained, research-backed, AI-executable plan that enables an autonomous coding agent to implement a feature or requirement in one pass with built-in validation.
> The human researcher performs the deep research, analysis, and review.
> The AI agent executes sequentially and self-validates.

---

## Step 1. Read and Analyze Requirements

**Input:**
Read the requirements document from: $ARGUMENTS

Extract and understand:

- Core feature requests and objectives
- Technical requirements and constraints
- Expected outcomes and success criteria
- Integration points with existing systems
- Performance and scalability requirements
- Any specific technologies or frameworks mentioned

**Goal:**
Produce a complete PRP saved to `PRPs/{feature-name}.md` that contains all context, references, and validation gates required for one-pass autonomous implementation.

---

## Step 2. Research Process (Optimal Execution Order)

### 2.1 Requirements Deep Dive (Foundation First)

**MANDATORY**: Read requirements document 3x for different perspectives:

- **Pass 1**: Overview and high-level understanding
- **Pass 2**: Technical details and constraints
- **Pass 3**: Content frameworks and integration points
- Document all explicit requirements, success criteria, and brand guidelines

### 2.2 Codebase Analysis First (Reality Check)

**MANDATORY**: Use filesystem MCP to explore existing project structure:

- Map current components, layouts, and utilities
- Identify reusable patterns and existing integrations
- Document current tech stack implementation and gaps
- Analyze existing architecture before planning new work

### 2.3 Tech Stack Research (Context7 MCP)

Use **context7 MCP tools** to discover existing patterns, dependencies, and architecture:

- Research best practices for specified technologies
- Find reference implementations for complex requirements
- Document reusable modules, services, and helpers
- Identify file paths and structure conventions

### 2.4 Web Research & Knowledge Base (Archon RAG)

Gather authoritative information and search knowledge bases:

- Use `mcp_archon__rag_get_available_sources()` to find relevant documentation
- Search for implementation patterns: `mcp_archon__rag_search_knowledge_base(query="...")`
- Find code examples: `mcp_archon__rag_search_code_examples(query="...")`
- Focus on requirements-specific best practices and similar implementations

| Category | What to Find | Required Output |
|-----------|--------------|-----------------|
| Libraries / APIs | Official docs, version details | URLs + snippets |
| Patterns | Common design/architecture patterns | URLs + rationale |
| Implementations | GitHub, StackOverflow, blogs | Links + notes |
| Pitfalls | Known issues or version quirks | Warning list |

### 2.5 Sequential Reasoning Validation (Critical Thinking)

**MANDATORY**: Use SequentialThinking MCP to validate all findings:

1. **Analyze** input requirements against existing patterns
2. **Decompose** into minimal sequential subtasks
3. **Validate** each subtask has clear acceptance criteria
4. **Iterate** internally until all validations succeed

---

## Step 3. Context Embedding for AI Agent

Based on your research, create a detailed plan that includes:

### 3.1 Task Breakdown

Create a prioritized list of implementation tasks:

- Each task should be specific and actionable
- Include clear acceptance criteria and validation steps
- Document dependencies between tasks
- Order tasks logically for implementation flow

### 3.2 Technical Architecture

Define the technical approach:

- Component structure and organization
- Data flow and state management
- API design (if applicable)
- Database schema changes (if needed)
- Integration points with existing code

### 3.3 Implementation References

Document key resources for implementation:

- Existing code files to reference or modify (with specific paths)
- Documentation links for technologies used
- Code examples from research with citations
- Patterns to follow from the codebase
- Libraries or dependencies to add with versions

---

## Step 4: Create the Plan Document

Write a comprehensive plan to `PRPs/[feature-name].md` with roughly this structure (n represents that this could be any number of those things)

```markdown
# Implementation Plan: [Feature Name]

## Overview
[Brief description of what will be implemented]

## Requirements Summary
- [Key requirement 1]
- [Key requirement 2]
- [Key requirement n]

## Research Findings
### Best Practices
- [Finding 1 with source citation]
- [Finding n with source citation]

### Reference Implementations
- [Example 1 with link/location and code snippet]
- [Example n with link/location and code snippet]

### Technology Decisions
- [Technology choice 1 and rationale with research backing]
- [Technology choice n and rationale with research backing]

### Implementation Tasks

### Phase 1: Foundation
1. **Task Name**
   - Description: [What needs to be done]
   - Files to modify/create: [Specific file paths]
   - Dependencies: [Prerequisites]
   - Acceptance Criteria: [How to validate completion]

2. **Task Name**
   - Description: [What needs to be done]
   - Files to modify/create: [Specific file paths]
   - Dependencies: [Prerequisites]
   - Acceptance Criteria: [How to validate completion]

### Phase 2: Core Implementation
[Continue with numbered tasks...]

### Phase 3: Integration & Testing
[Continue with numbered tasks...]

## Codebase Integration Points
### Files to Modify
- `path/to/file1.js` - [Specific changes needed with code examples]
- `path/to/filen.py` - [Specific changes needed with code examples]

### New Files to Create
- `path/to/newfile1.js` - [Purpose and basic structure]
- `path/to/newfilen.py` - [Purpose and basic structure]

## Existing Patterns to follow
- [Pattern 1 from codebase with file path reference]
- [Pattern n from codebase with file path reference]

## Technical Design

### Architecture Diagram (if applicable)

[ASCII diagram or description]

### Data Flow
[Description of how data flows through the feature]

### API Endpoints (if applicable)
- `POST /api/endpoint` - [Purpose and expected payload]
- `GET /api/endpoint/:id` - [Purpose and response format]

## Dependencies and Libraries
- [Library 1] v[X.Y.Z] - [Purpose and integration details]
- [Library n] v[X.Y.Z] - [Purpose and integration details]

## Testing Strategy
- Unit tests for [specific components] using [testing framework]
- Integration tests for [specific workflows] covering [edge cases]
- Validation gates: [Automated checks and manual reviews]

## Success Criteria
- [ ] [Specific, measurable criterion tied to requirements]
- [ ] [Specific, measurable criterion tied to requirements]
- [ ] [Specific, measurable criterion tied to requirements]

## Notes and Considerations
- [Research-backed implementation notes]
- [Potential challenges with mitigation strategies]
- [Future enhancements based on research findings]

---

*This plan is ready for execution with `/execute-plan`*

## Step 5: Validation & Iteration

Before finalizing the plan:
1. **Requirements Coverage**: Cross-reference every requirement from $ARGUMENTS against the plan
2. **Task Validation**: Ensure all tasks have clear acceptance criteria
3. **Research Backing**: Verify all decisions are supported by research findings
4. **Integration Clarity**: Confirm all file paths and code references are specific
5. **AI Executability**: Test plan clarity for autonomous implementation
6. **Iterate** until zero gaps remain

## Important Guidelines

- **Be thorough in research**: Quality depends on understanding best practices through MCP tools
- **Keep tasks actionable**: Every task must be completable with clear validation
- **Reference everything**: Include specific file paths, code snippets, and source citations
- **Consider the existing codebase**: Leverage existing patterns and architecture
- **Include validation gates**: Every task needs acceptance criteria and testing strategy
- **Size tasks appropriately**: Break down complex work into manageable units
- **Use MCP tools systematically**: Follow the optimal execution order for research

## Output

Save the plan to the PRPs directory and inform the user:
"Implementation plan created at: PRPs/[feature-name].md
You can now execute this plan using: `/execute-plan PRPs/[feature-name].md`"
