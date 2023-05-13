import {
  danger,
  fail,
  type GitHubPRDSL as LibGitHubDSL,
  type GitHubMergeRef,
  type GitHubRepo,
} from 'danger';

import { ProjectPrefix } from './project.config';

type GitHubPRDSL = LibGitHubDSL & {
  head: GitHubMergeRef & {
    repo: GitHubRepo & {
      has_projects: boolean;
    };
  };
  milestone: Record<string, unknown> | null;
  labels: unknown[];
  project_id: string | null;
};

const BranchPrefix = {
  TASK: 'task',
  FIX: 'fix',
} as const;

const DangerConfig = {
  TITLE: {
    PATTERN: new RegExp(
      `^((${ProjectPrefix.APPS.join(
        '|',
      )})-[0-9]{1,6}): (.*\\S)$|(${ProjectPrefix.ENVIRONMENTS.join(
        '|',
      )}) to (${ProjectPrefix.ENVIRONMENTS.join('|')})$`,
    ),
  },
  ASSIGNEES: {
    IS_REQUIRED: true,
  },
  PROJECTS: {
    IS_REQUIRED: true,
  },
  MILESTONE: {
    IS_REQUIRED: true,
  },
  LABELS: {
    IS_REQUIRED: true,
  },
  BRANCH: {
    PATTERN: new RegExp(
      `^((${Object.values(BranchPrefix).join('|')})/(${ProjectPrefix.APPS.join(
        '|',
      )})-[0-9]{1,6})-[a-zA-Z0-9-]+$|(${ProjectPrefix.ENVIRONMENTS.join(
        '|',
      )})$`,
    ),
  },
};

const pr = danger.github.pr as GitHubPRDSL;

const checkAssignees = () => {
  const hasAssignees = Boolean(pr.assignee);

  if (!hasAssignees) {
    fail('This pull request should have at least one assignee.');
  }
};

const checkTitle = (titlePattern: RegExp) => {
  const isTitleValid = titlePattern.test(pr.title);

  if (!isTitleValid) {
    fail(
      `The pull request title should match the following pattern: ${titlePattern}.`,
    );
  }
};

const checkProjects = () => {
  const { has_projects: hasProjects } = pr.head.repo;

  if (!hasProjects) {
    fail('This pull request should be linked to a project.');
  }
};

const checkMilestone = () => {
  const hasMilestone = Boolean(pr.milestone);

  if (!hasMilestone) {
    fail('This pull request should have a milestone.');
  }
};

const checkLabels = () => {
  const hasLabels = Boolean(pr.labels.length);

  if (!hasLabels) {
    fail('This pull request should have at least one label.');
  }
};

const checkBranch = (branchPattern: RegExp) => {
  const isBranchValid = branchPattern.test(pr.head.ref);

  if (!isBranchValid) {
    fail(
      `The pull request branch should match the following pattern: ${branchPattern}.`,
    );
  }
};

const applyDanger = () => {
  if (DangerConfig.TITLE.PATTERN) {
    checkTitle(DangerConfig.TITLE.PATTERN);
  }

  if (DangerConfig.ASSIGNEES.IS_REQUIRED) {
    checkAssignees();
  }

  if (DangerConfig.PROJECTS.IS_REQUIRED) {
    checkProjects();
  }

  if (DangerConfig.MILESTONE.IS_REQUIRED) {
    checkMilestone();
  }

  if (DangerConfig.LABELS.IS_REQUIRED) {
    checkLabels();
  }

  if (DangerConfig.BRANCH.PATTERN) {
    checkBranch(DangerConfig.BRANCH.PATTERN);
  }
};

applyDanger();
